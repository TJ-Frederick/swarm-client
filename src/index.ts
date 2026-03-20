import { getFrontendHtml } from './frontend';
import { getSwarmModuleJs } from './swarm';

const CORS_HEADERS: Record<string, string> = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, X-Payment',
  'Access-Control-Expose-Headers': '*',
};

export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }

    // Proxy: forwards requests to external x402 endpoints to avoid CORS issues.
    // GET  /proxy?url=<encoded> — probe for 402
    // POST /proxy?url=<encoded> with X-Payment header — paid request
    if (url.pathname === '/proxy') {
      const target = url.searchParams.get('url');
      if (!target) {
        return new Response(JSON.stringify({ error: 'Missing url parameter' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json', ...CORS_HEADERS },
        });
      }

      try {
        new URL(target);
      } catch {
        return new Response(JSON.stringify({ error: 'Invalid url parameter' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json', ...CORS_HEADERS },
        });
      }

      const proxyHeaders: Record<string, string> = {};
      const xPayment = request.headers.get('X-Payment');
      if (xPayment) proxyHeaders['X-Payment'] = xPayment;

      const accept = request.headers.get('Accept');
      if (accept) proxyHeaders['Accept'] = accept;

      const upstream = await fetch(target, {
        method: request.method === 'POST' ? 'POST' : 'GET',
        headers: proxyHeaders,
      });

      const body = await upstream.arrayBuffer();
      const responseHeaders: Record<string, string> = {
        ...CORS_HEADERS,
      };

      // Forward all upstream headers (preserving CORS overrides)
      upstream.headers.forEach((value, key) => {
        const lower = key.toLowerCase();
        if (lower !== 'access-control-allow-origin' &&
            lower !== 'access-control-allow-methods' &&
            lower !== 'access-control-allow-headers' &&
            lower !== 'access-control-expose-headers') {
          responseHeaders[key] = value;
        }
      });

      return new Response(body, {
        status: upstream.status,
        headers: responseHeaders,
      });
    }

    if (url.pathname === '/modules/swarm.js') {
      return new Response(getSwarmModuleJs(), {
        headers: { 'Content-Type': 'application/javascript; charset=utf-8' },
      });
    }

    if (url.pathname === '/' || url.pathname === '') {
      return new Response(getFrontendHtml(), {
        headers: { 'Content-Type': 'text/html; charset=utf-8' },
      });
    }

    return new Response(JSON.stringify({ error: 'Not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json', ...CORS_HEADERS },
    });
  },
};
