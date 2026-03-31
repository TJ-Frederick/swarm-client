export function getFrontendHtml(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>x402 Client</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #000000;
    --surface: #0a0a0a;
    --surface-2: #0f0f0f;
    --surface-3: #141414;
    --border: #1a1a1a;
    --border-light: #262626;
    --text: #cccccc;
    --text-bright: #eeeeee;
    --text-dim: #777777;
    --text-muted: #3d3d3d;
    --orange: #ff8c00;
    --orange-dim: rgba(255, 140, 0, 0.15);
    --orange-bg: rgba(255, 140, 0, 0.05);
    --green: #00c853;
    --green-dim: rgba(0, 200, 83, 0.15);
    --red: #ff3d3d;
    --red-dim: rgba(255, 61, 61, 0.15);
    --mono: 'JetBrains Mono', 'SF Mono', 'Fira Code', monospace;
    --sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  }

  body {
    font-family: var(--mono);
    background: var(--bg);
    color: var(--text);
    line-height: 1.5;
    min-height: 100vh;
    background-image:
      linear-gradient(rgba(255,140,0,0.012) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,140,0,0.012) 1px, transparent 1px);
    background-size: 48px 48px;
  }

  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: var(--border-light); border-radius: 3px; }

  .container {
    max-width: 820px;
    margin: 0 auto;
    padding: 48px 24px;
  }

  /* ── Header ── */

  .header {
    text-align: center;
    margin-bottom: 40px;
  }

  .header h1 {
    font-family: var(--sans);
    font-size: 28px;
    font-weight: 700;
    color: var(--text-bright);
    letter-spacing: -0.5px;
    margin-bottom: 8px;
  }

  .header h1 span {
    color: var(--orange);
  }

  .header p {
    font-size: 12px;
    color: var(--text-dim);
    letter-spacing: 0.5px;
  }

  /* ── Cards ── */

  .card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 24px;
    margin-bottom: 16px;
  }

  .card-label {
    font-size: 10px;
    font-weight: 600;
    color: var(--text-dim);
    text-transform: uppercase;
    letter-spacing: 1.2px;
    margin-bottom: 16px;
  }

  /* ── Mode tabs ── */

  .mode-tabs {
    display: flex;
    gap: 0;
    margin-bottom: 16px;
    border: 1px solid var(--border);
    border-radius: 6px;
    overflow: hidden;
  }

  .mode-tab {
    flex: 1;
    padding: 10px 16px;
    background: var(--surface-2);
    border: none;
    font-family: var(--mono);
    font-size: 12px;
    font-weight: 600;
    color: var(--text-dim);
    cursor: pointer;
    transition: all 0.2s;
    letter-spacing: 0.3px;
  }

  .mode-tab:not(:last-child) {
    border-right: 1px solid var(--border);
  }

  .mode-tab:hover:not(.active) {
    background: var(--surface-3);
    color: var(--text);
  }

  .mode-tab.active {
    background: var(--orange-bg);
    color: var(--orange);
  }

  /* ── Inputs ── */

  .input-group {
    margin-bottom: 16px;
  }

  .input-group label {
    display: block;
    font-size: 11px;
    color: var(--text-dim);
    margin-bottom: 6px;
    letter-spacing: 0.3px;
  }

  .input-group input[type="text"],
  .input-group input[type="url"],
  .input-group input[type="number"] {
    width: 100%;
    background: var(--surface-2);
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 10px 14px;
    font-family: var(--mono);
    font-size: 13px;
    color: var(--text-bright);
    outline: none;
    transition: border-color 0.2s;
  }

  .input-group input:focus {
    border-color: var(--orange);
  }

  .input-group input::placeholder {
    color: var(--text-muted);
  }

  .input-group input:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  .input-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }

  /* ── Cost estimate ── */

  .cost-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 14px;
    background: var(--orange-bg);
    border: 1px solid var(--orange-dim);
    border-radius: 6px;
    margin-bottom: 16px;
    font-size: 12px;
  }

  .cost-label {
    color: var(--text-dim);
  }

  .cost-value {
    color: var(--orange);
    font-weight: 600;
    font-variant-numeric: tabular-nums;
  }

  /* ── Buttons ── */

  .btn-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 12px 20px;
    border: 1px solid var(--border);
    border-radius: 6px;
    font-family: var(--mono);
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    letter-spacing: 0.3px;
  }

  .btn:disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }

  .btn-wallet {
    background: var(--surface-2);
    color: var(--text);
  }

  .btn-wallet:hover:not(:disabled) {
    border-color: var(--border-light);
    background: var(--surface-3);
  }

  .btn-wallet.connected {
    border-color: var(--green-dim);
    color: var(--green);
  }

  .btn-launch {
    background: var(--orange);
    color: #000;
    border-color: var(--orange);
  }

  .btn-launch:hover:not(:disabled) {
    background: #e07e00;
    border-color: #e07e00;
  }

  .btn-launch.stop {
    background: var(--red);
    border-color: var(--red);
  }

  .btn-launch.stop:hover:not(:disabled) {
    background: #e03030;
    border-color: #e03030;
  }

  /* ── Stats bar ── */

  .stats-bar {
    grid-template-columns: repeat(4, 1fr);
    gap: 1px;
    background: var(--border);
    border: 1px solid var(--border);
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 16px;
  }

  .stat-cell {
    background: var(--surface);
    padding: 14px 16px;
    text-align: center;
  }

  .stat-cell .stat-label {
    font-size: 9px;
    font-weight: 600;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 4px;
  }

  .stat-cell .stat-value {
    font-size: 18px;
    font-weight: 700;
    color: var(--text-bright);
    font-variant-numeric: tabular-nums;
  }

  .stat-cell .stat-value.orange { color: var(--orange); }
  .stat-cell .stat-value.green { color: var(--green); }

  /* ── Status line ── */

  .status-line {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 14px;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 6px;
    margin-bottom: 16px;
    font-size: 12px;
    color: var(--text-dim);
    min-height: 40px;
  }

  .status-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--text-muted);
    flex-shrink: 0;
  }

  .status-dot.active {
    background: var(--green);
    animation: pulse 2s ease-in-out infinite;
  }

  .status-dot.error {
    background: var(--red);
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
  }

  /* ── Result panel ── */

  .result-meta {
    display: flex;
    gap: 16px;
    padding: 10px 14px;
    background: var(--surface-2);
    border: 1px solid var(--border);
    border-radius: 6px;
    margin-bottom: 12px;
    font-size: 12px;
    flex-wrap: wrap;
  }

  .meta-item {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .meta-label {
    color: var(--text-dim);
  }

  .meta-value {
    color: var(--text-bright);
    font-weight: 600;
    font-variant-numeric: tabular-nums;
  }

  .meta-value.orange { color: var(--orange); }

  .result-toolbar {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-bottom: 8px;
  }

  .btn-sm {
    padding: 6px 12px;
    background: var(--surface-2);
    border: 1px solid var(--border);
    border-radius: 4px;
    font-family: var(--mono);
    font-size: 11px;
    color: var(--text-dim);
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s;
  }

  .btn-sm:hover {
    border-color: var(--border-light);
    color: var(--text);
  }

  .json-block {
    background: var(--surface-2);
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 16px;
    overflow-x: auto;
    max-height: 480px;
    overflow-y: auto;
    font-size: 12px;
    line-height: 1.5;
    white-space: pre;
    word-wrap: normal;
  }

  .json-key { color: var(--orange); }
  .json-string { color: var(--green); }
  .json-number { color: #7ec8e3; }
  .json-boolean { color: #c792ea; }
  .json-null { color: var(--text-dim); }

  .text-block {
    background: var(--surface-2);
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 16px;
    overflow-x: auto;
    max-height: 480px;
    overflow-y: auto;
    font-size: 12px;
    line-height: 1.5;
    white-space: pre-wrap;
    word-break: break-word;
    color: var(--text);
  }

  .html-preview {
    width: 100%;
    height: 400px;
    border: 1px solid var(--border);
    border-radius: 6px;
    background: #fff;
  }

  /* ── Activity log ── */

  .log-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 8px;
    overflow: hidden;
  }

  .log-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid var(--border);
  }

  .log-header .log-title {
    font-size: 10px;
    font-weight: 600;
    color: var(--text-dim);
    text-transform: uppercase;
    letter-spacing: 1.2px;
  }

  .log-header .log-count {
    font-size: 10px;
    color: var(--text-muted);
    font-variant-numeric: tabular-nums;
  }

  .log-body {
    height: 360px;
    overflow-y: auto;
    padding: 4px 0;
  }

  .log-empty {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: var(--text-muted);
    font-size: 12px;
  }

  .log-entry {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 6px 16px;
    font-size: 11px;
    line-height: 1.4;
    border-bottom: 1px solid rgba(26, 26, 26, 0.5);
  }

  .log-entry:hover {
    background: var(--surface-2);
  }

  .log-entry .log-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    margin-top: 5px;
    flex-shrink: 0;
  }

  .log-entry .log-dot.ok { background: var(--green); }
  .log-entry .log-dot.err { background: var(--red); }

  .log-entry .log-agent {
    color: var(--text-dim);
    white-space: nowrap;
    min-width: 72px;
  }

  .log-entry .log-msg {
    color: var(--text);
    flex: 1;
    min-width: 0;
  }

  .log-entry .log-latency {
    color: var(--text-dim);
    white-space: nowrap;
    font-variant-numeric: tabular-nums;
  }

  .log-entry .log-tx a {
    color: var(--orange);
    text-decoration: none;
    font-size: 10px;
    opacity: 0.7;
    transition: opacity 0.2s;
  }

  .log-entry .log-tx a:hover {
    opacity: 1;
    text-decoration: underline;
  }

  .log-entry.error .log-msg {
    color: var(--red);
  }

  /* ── Footer ── */

  .footer {
    text-align: center;
    margin-top: 32px;
    font-size: 11px;
    color: var(--text-muted);
  }

  .footer a {
    color: var(--text-dim);
    text-decoration: none;
  }

  .footer a:hover {
    color: var(--orange);
  }
</style>
</head>
<body>
<div class="container">

  <div class="header">
    <h1><span>x402</span> Client</h1>
    <p>Send paid HTTP requests to any x402-protected endpoint</p>
  </div>

  <!-- Config -->
  <div class="card">
    <div class="card-label">Configuration</div>

    <div class="mode-tabs">
      <button class="mode-tab active" data-mode="single">Single Query</button>
      <button class="mode-tab" data-mode="swarm">Agent Swarm</button>
    </div>

    <div class="input-group">
      <label>Target URL (x402-protected endpoint)</label>
      <input type="url" id="targetUrl" placeholder="https://example.com/api/resource" />
    </div>

    <div id="swarmConfig" style="display:none">
      <div class="input-row">
        <div class="input-group">
          <label>Agents (1\u2013100)</label>
          <input type="number" id="numAgents" value="10" min="1" max="100" />
        </div>
        <div class="input-group">
          <label>Requests per agent (1\u20131000)</label>
          <input type="number" id="reqPerAgent" value="5" min="1" max="1000" />
        </div>
      </div>

      <div class="cost-row">
        <span class="cost-label">Estimated cost</span>
        <span class="cost-value" id="costEstimate">50 reqs &times; $0.0001 = $0.0050</span>
      </div>
    </div>

    <div class="btn-row">
      <button class="btn btn-wallet" id="btnWallet">Connect Wallet</button>
      <button class="btn btn-launch" id="btnLaunch" disabled>Send Request</button>
    </div>
  </div>

  <!-- Stats (swarm only) -->
  <div class="stats-bar" id="statsBar" style="display:none">
    <div class="stat-cell">
      <div class="stat-label">Requests</div>
      <div class="stat-value" id="statReqs">0</div>
    </div>
    <div class="stat-cell">
      <div class="stat-label">Total Spent</div>
      <div class="stat-value orange" id="statSpent">$0.0000</div>
    </div>
    <div class="stat-cell">
      <div class="stat-label">Req/sec</div>
      <div class="stat-value green" id="statRps">0.0</div>
    </div>
    <div class="stat-cell">
      <div class="stat-label">Elapsed</div>
      <div class="stat-value" id="statElapsed">0s</div>
    </div>
  </div>

  <!-- Status -->
  <div class="status-line" id="statusLine">
    <div class="status-dot" id="statusDot"></div>
    <span id="statusText">Ready</span>
  </div>

  <!-- Result panel (single query only) -->
  <div id="resultPanel" class="card" style="display:none">
    <div class="card-label">Response</div>
    <div class="result-meta" id="resultMeta"></div>
    <div id="resultContent"></div>
  </div>

  <!-- Activity Log (swarm only) -->
  <div class="log-card" id="logCard" style="display:none">
    <div class="log-header">
      <span class="log-title">Activity Log</span>
      <span class="log-count" id="logCount">0 entries</span>
    </div>
    <div class="log-body" id="logBody">
      <div class="log-empty" id="logEmpty">Waiting for swarm launch...</div>
    </div>
  </div>

  <div class="footer">
    Powered by <a href="https://theradius.xyz" target="_blank">Radius</a> &middot; x402 protocol
  </div>

</div>

<script type="module">
import { createWalletClient, custom, defineChain } from 'https://esm.sh/viem';

// ── State ──

let walletClient = null;
let connectedAddress = null;
let currentSwarm = null;
let currentMode = 'single';
let logEntryCount = 0;
let perRequestAmount = 100;
let activeBlobUrl = null;

const RADIUS_CHAIN = defineChain({
  id: 723487,
  name: 'Radius',
  nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 },
  rpcUrls: { default: { http: ['https://rpc.radiustech.xyz/cebu04iqsbb2xhuklnlnj68amqfukg8ayl32tuwga9ldsuf2'] } },
});

const MAX_LOG_ENTRIES = 500;
const EXPLORER_TX = 'https://network.radiustech.xyz/tx/';

function proxyUrl(targetUrl) {
  return '/proxy?url=' + encodeURIComponent(targetUrl);
}

// ── DOM refs ──

const $url = document.getElementById('targetUrl');
const $agents = document.getElementById('numAgents');
const $reqs = document.getElementById('reqPerAgent');
const $cost = document.getElementById('costEstimate');
const $btnWallet = document.getElementById('btnWallet');
const $btnLaunch = document.getElementById('btnLaunch');
const $statReqs = document.getElementById('statReqs');
const $statSpent = document.getElementById('statSpent');
const $statRps = document.getElementById('statRps');
const $statElapsed = document.getElementById('statElapsed');
const $statusDot = document.getElementById('statusDot');
const $statusText = document.getElementById('statusText');
const $logBody = document.getElementById('logBody');
const $logCount = document.getElementById('logCount');
const $swarmConfig = document.getElementById('swarmConfig');
const $statsBar = document.getElementById('statsBar');
const $logCard = document.getElementById('logCard');
const $resultPanel = document.getElementById('resultPanel');
const $resultMeta = document.getElementById('resultMeta');
const $resultContent = document.getElementById('resultContent');

// ── Mode switching ──

document.querySelectorAll('.mode-tab').forEach(tab => {
  tab.addEventListener('click', () => switchMode(tab.dataset.mode));
});

function switchMode(mode) {
  currentMode = mode;
  document.querySelectorAll('.mode-tab').forEach(t => t.classList.remove('active'));
  document.querySelector('[data-mode="' + mode + '"]').classList.add('active');

  $swarmConfig.style.display = mode === 'swarm' ? 'block' : 'none';
  $statsBar.style.display = mode === 'swarm' ? 'grid' : 'none';
  $logCard.style.display = mode === 'swarm' ? 'block' : 'none';

  if (mode === 'swarm') hideResult();

  $btnLaunch.textContent = mode === 'single' ? 'Send Request' : 'Launch Swarm';
  $btnLaunch.classList.remove('stop');
  $btnLaunch.disabled = !connectedAddress;
}

// ── Cost estimate (swarm only) ──

function updateCost() {
  const agents = Math.min(100, Math.max(1, parseInt($agents.value) || 10));
  const reqs = Math.max(1, parseInt($reqs.value) || 5);
  const total = agents * reqs;
  const costPer = perRequestAmount / 1e6;
  const totalCost = total * costPer;
  $cost.innerHTML = total + ' reqs &times; $' + costPer.toFixed(4) + ' = $' + totalCost.toFixed(4);
}

$agents.addEventListener('input', updateCost);
$reqs.addEventListener('input', updateCost);
updateCost();

// ── Wallet ──

$btnWallet.addEventListener('click', async () => {
  if (connectedAddress) return;

  if (!window.ethereum) {
    setStatus('Install MetaMask to continue', 'error');
    return;
  }

  try {
    $btnWallet.disabled = true;
    $btnWallet.textContent = 'Connecting...';

    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    connectedAddress = accounts[0];

    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0xB0A1F' }],
      });
    } catch (switchErr) {
      if (switchErr.code === 4902) {
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [{
            chainId: '0xB0A1F',
            chainName: 'Radius',
            nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 },
            rpcUrls: ['https://rpc.radiustech.xyz/cebu04iqsbb2xhuklnlnj68amqfukg8ayl32tuwga9ldsuf2'],
            blockExplorerUrls: ['https://network.radiustech.xyz'],
          }],
        });
      } else {
        throw switchErr;
      }
    }

    walletClient = createWalletClient({
      chain: RADIUS_CHAIN,
      transport: custom(window.ethereum),
    });

    const short = connectedAddress.slice(0, 6) + '...' + connectedAddress.slice(-4);
    $btnWallet.textContent = short;
    $btnWallet.classList.add('connected');
    $btnLaunch.disabled = false;
    setStatus('Wallet connected');

  } catch (err) {
    connectedAddress = null;
    walletClient = null;
    $btnWallet.textContent = 'Connect Wallet';
    $btnWallet.classList.remove('connected');
    setStatus(err.message || 'Wallet connection failed', 'error');
  } finally {
    $btnWallet.disabled = !!connectedAddress;
  }
});

// ── Status ──

function setStatus(msg, type) {
  $statusText.textContent = msg;
  $statusDot.className = 'status-dot' + (type === 'active' ? ' active' : type === 'error' ? ' error' : '');
}

// ── Stats ──

function resetStats() {
  $statReqs.textContent = '0';
  $statSpent.textContent = '$0.0000';
  $statRps.textContent = '0.0';
  $statElapsed.textContent = '0s';
}

function updateStats(stats) {
  $statReqs.textContent = stats.totalRequests.toLocaleString();
  $statSpent.textContent = '$' + (stats.totalSpentRaw / 1e6).toFixed(4);
  $statRps.textContent = stats.requestsPerSecond.toFixed(1);
  const secs = Math.floor(stats.elapsedMs / 1000);
  $statElapsed.textContent = secs < 60 ? secs + 's' : Math.floor(secs / 60) + 'm ' + (secs % 60) + 's';
}

// ── Log ──

function clearLog() {
  $logBody.innerHTML = '';
  logEntryCount = 0;
  $logCount.textContent = '0 entries';
}

function addLogEntry(entry) {
  const empty = $logBody.querySelector('.log-empty');
  if (empty) empty.remove();

  const div = document.createElement('div');
  div.className = 'log-entry' + (entry.isError ? ' error' : '');

  const dot = '<div class="log-dot ' + (entry.isError ? 'err' : 'ok') + '"></div>';
  const agent = '<span class="log-agent">[Agent ' + entry.agentIndex + ']</span>';
  let msg, latency = '', tx = '';

  if (entry.isError) {
    msg = '<span class="log-msg">' + escHtml(entry.message || 'Request failed') + '</span>';
    if (entry.probeMs != null) {
      const parts = ['probe:' + entry.probeMs];
      if (entry.signMs != null) parts.push('sign:' + entry.signMs);
      if (entry.fetchMs != null) parts.push('fetch:' + entry.fetchMs);
      latency = '<span class="log-latency">' + parts.join(' ') + '</span>';
    }
  } else {
    msg = '<span class="log-msg">OK</span>';
    if (entry.totalMs != null) {
      latency = '<span class="log-latency">'
        + 'probe:' + entry.probeMs + ' sign:' + entry.signMs
        + ' fetch:' + entry.fetchMs + ' parse:' + entry.parseMs
        + ' \\u2192 ' + entry.totalMs + 'ms'
        + '</span>';
    } else if (entry.latencyMs != null) {
      latency = '<span class="log-latency">' + entry.latencyMs + 'ms</span>';
    }
    if (entry.txHash) tx = '<span class="log-tx"><a href="' + EXPLORER_TX + entry.txHash + '" target="_blank" rel="noopener">' + entry.txHash.slice(0, 10) + '...</a></span>';
  }

  div.innerHTML = dot + agent + msg + latency + tx;
  $logBody.prepend(div);
  logEntryCount++;
  $logCount.textContent = logEntryCount + ' entries';

  while ($logBody.children.length > MAX_LOG_ENTRIES) {
    $logBody.removeChild($logBody.lastChild);
  }
}

function escHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// ── Result rendering (single query) ──

function hideResult() {
  $resultPanel.style.display = 'none';
  $resultMeta.innerHTML = '';
  $resultContent.innerHTML = '';
  if (activeBlobUrl) {
    URL.revokeObjectURL(activeBlobUrl);
    activeBlobUrl = null;
  }
}

function buildMetaHtml(elapsedMs, cost, txHash) {
  let html = '<span class="meta-item"><span class="meta-label">Cost</span><span class="meta-value orange">' + cost + '</span></span>';
  html += '<span class="meta-item"><span class="meta-label">Latency</span><span class="meta-value">' + elapsedMs + 'ms</span></span>';
  if (txHash) {
    html += '<span class="meta-item"><span class="meta-label">Tx</span><span class="meta-value"><a href="' + EXPLORER_TX + txHash + '" target="_blank" rel="noopener" style="color:var(--orange);text-decoration:none;font-size:11px">' + txHash.slice(0, 10) + '...</a></span></span>';
  }
  return html;
}

function showJsonResult(data, elapsedMs, cost, headerTxHash) {
  $resultPanel.style.display = 'block';
  const txHash = (data && data.tx_hash) || headerTxHash || null;
  $resultMeta.innerHTML = buildMetaHtml(elapsedMs, cost, txHash);

  const highlighted = syntaxHighlight(data);
  $resultContent.innerHTML =
    '<div class="result-toolbar"><button class="btn-sm" id="btnCopy">Copy JSON</button></div>' +
    '<pre class="json-block">' + highlighted + '</pre>';

  document.getElementById('btnCopy').addEventListener('click', () => {
    navigator.clipboard.writeText(JSON.stringify(data, null, 2)).then(() => {
      document.getElementById('btnCopy').textContent = 'Copied!';
      setTimeout(() => { document.getElementById('btnCopy').textContent = 'Copy JSON'; }, 1500);
    });
  });
}

function showHtmlResult(html, elapsedMs, cost, txHash) {
  $resultPanel.style.display = 'block';
  $resultMeta.innerHTML = buildMetaHtml(elapsedMs, cost, txHash || null);

  if (activeBlobUrl) URL.revokeObjectURL(activeBlobUrl);
  const blob = new Blob([html], { type: 'text/html' });
  activeBlobUrl = URL.createObjectURL(blob);

  $resultContent.innerHTML =
    '<div class="result-toolbar"><a class="btn-sm" href="' + activeBlobUrl + '" target="_blank" rel="noopener">Open in new tab</a></div>' +
    '<iframe class="html-preview" sandbox="allow-scripts allow-same-origin" src="' + activeBlobUrl + '"></iframe>';
}

function showTextResult(text, elapsedMs, cost, txHash) {
  $resultPanel.style.display = 'block';
  $resultMeta.innerHTML = buildMetaHtml(elapsedMs, cost, txHash || null);
  $resultContent.innerHTML = '<pre class="text-block">' + escHtml(text) + '</pre>';
}

function syntaxHighlight(obj) {
  const json = JSON.stringify(obj, null, 2);
  return json
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/("(\\\\u[a-zA-Z0-9]{4}|\\\\[^u]|[^\\\\"])*"(\\s*:)?|\\b(true|false|null)\\b|-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?)/g,
      function(match) {
        let cls = 'json-number';
        if (/^"/.test(match)) {
          cls = /:$/.test(match) ? 'json-key' : 'json-string';
        } else if (/true|false/.test(match)) {
          cls = 'json-boolean';
        } else if (/null/.test(match)) {
          cls = 'json-null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
      });
}

// ── Shared: probe for 402 ──

async function probeFor402(targetUrl) {
  let probeRes;
  try {
    probeRes = await fetch(proxyUrl(targetUrl));
  } catch {
    throw new Error('Could not reach endpoint.');
  }

  if (probeRes.status !== 402) {
    throw new Error('Endpoint returned ' + probeRes.status + '. Expected 402 (Payment Required).');
  }

  let probeBody;
  try {
    probeBody = await probeRes.json();
  } catch {
    throw new Error('Could not parse 402 response body as JSON.');
  }

  const requirement = (probeBody.paymentRequirements && probeBody.paymentRequirements[0])
    || (probeBody.accepts && probeBody.accepts[0]);

  if (!requirement) {
    throw new Error('Response missing payment requirements. Body: ' + JSON.stringify(probeBody).slice(0, 200));
  }
  if (!requirement.payTo) throw new Error('Payment requirement missing payTo address.');

  // Normalize: accepts format uses maxAmountRequired instead of amount
  if (!requirement.amount && requirement.maxAmountRequired) {
    requirement.amount = requirement.maxAmountRequired;
  }

  return requirement;
}

// ── Single Query ──

async function runSingleQuery() {
  const targetUrl = $url.value.trim();
  if (!targetUrl) { setStatus('Enter a target URL', 'error'); return; }
  if (!connectedAddress || !walletClient) { setStatus('Connect your wallet first', 'error'); return; }

  $btnLaunch.disabled = true;
  $url.disabled = true;
  $btnWallet.disabled = true;
  hideResult();

  const t0 = Date.now();
  try {
    // 1. Probe for 402
    setStatus('Probing endpoint for payment requirements...', 'active');
    const requirement = await probeFor402(targetUrl);
    const amount = requirement.amount || '100';
    const costStr = '$' + (parseInt(amount) / 1e6).toFixed(4);

    // 2. Create lightweight swarm for getNonce + config
    setStatus('Preparing payment...', 'active');
    const { createSwarm, signX402Payment } = await import('/modules/swarm.js');
    const helper = createSwarm({
      paymentAddress: requirement.payTo,
      rpcUrl: 'https://rpc.radiustech.xyz/cebu04iqsbb2xhuklnlnj68amqfukg8ayl32tuwga9ldsuf2',
      amountPerRequest: amount,
    });

    // 3. Get nonce and sign
    setStatus('Signing payment... Confirm in wallet.', 'active');
    const permitNonce = await helper.getNonce(connectedAddress);

    const { xPayment } = await signX402Payment({
      signTypedData: (params) => walletClient.signTypedData({ account: connectedAddress, ...params }),
      owner: connectedAddress,
      permitNonce,
      resource: { url: targetUrl, description: 'Single query', mimeType: '*/*' },
      accepted: requirement,
      config: helper.config,
    });

    // 4. Fetch with payment (through proxy)
    setStatus('Settling payment and fetching response...', 'active');
    const res = await fetch(proxyUrl(targetUrl), { headers: { 'X-Payment': xPayment } });
    const elapsed = Date.now() - t0;

    if (!res.ok) {
      const errText = await res.text().catch(() => '');
      throw new Error('Request failed (' + res.status + '): ' + errText.slice(0, 200));
    }

    // 5. Extract tx hash from payment-response header if present
    let headerTxHash = null;
    const paymentResponseHeader = res.headers.get('payment-response');
    if (paymentResponseHeader) {
      try {
        const pr = JSON.parse(atob(paymentResponseHeader));
        headerTxHash = pr.transaction || pr.txHash || pr.transactionHash || pr.hash || null;
      } catch {}
    }

    // 6. Detect content type and render
    const contentType = res.headers.get('content-type') || '';

    if (contentType.includes('text/html')) {
      const htmlText = await res.text();
      showHtmlResult(htmlText, elapsed, costStr, headerTxHash);
    } else {
      const text = await res.text();
      try {
        const data = JSON.parse(text);
        showJsonResult(data, elapsed, costStr, headerTxHash);
      } catch {
        showTextResult(text, elapsed, costStr, headerTxHash);
      }
    }

    setStatus('Complete! ' + elapsed + 'ms, ' + costStr);

  } catch (err) {
    const msg = err.message || 'Request failed';
    if (msg.includes('User rejected') || msg.includes('user rejected') || msg.includes('User denied')) {
      setStatus('Wallet action cancelled.', 'error');
    } else {
      setStatus(msg, 'error');
    }
  } finally {
    $btnLaunch.disabled = !connectedAddress;
    $url.disabled = false;
    $btnWallet.disabled = !!connectedAddress;
  }
}

// ── Swarm Launch ──

async function launchSwarm() {
  const targetUrl = $url.value.trim();
  if (!targetUrl) { setStatus('Enter a target URL', 'error'); return; }
  if (!connectedAddress || !walletClient) { setStatus('Connect your wallet first', 'error'); return; }

  const numAgents = Math.min(100, Math.max(1, parseInt($agents.value) || 10));
  const requestsPerAgent = Math.max(1, parseInt($reqs.value) || 5);

  $url.disabled = true;
  $agents.disabled = true;
  $reqs.disabled = true;
  $btnWallet.disabled = true;
  resetStats();
  clearLog();

  try {
    // 1. Probe for 402
    setStatus('Probing endpoint for payment requirements...', 'active');
    const requirement = await probeFor402(targetUrl);

    perRequestAmount = parseInt(requirement.amount) || 100;
    updateCost();

    setStatus('Payment requirements received. Creating swarm...', 'active');

    // 2. Import swarm module and create swarm
    const { createSwarm } = await import('/modules/swarm.js');
    const swarm = createSwarm({
      paymentAddress: requirement.payTo,
      rpcUrl: 'https://rpc.radiustech.xyz/cebu04iqsbb2xhuklnlnj68amqfukg8ayl32tuwga9ldsuf2',
      amountPerRequest: String(perRequestAmount),
    });
    currentSwarm = swarm;

    $btnLaunch.textContent = 'Stop Swarm';
    $btnLaunch.classList.add('stop');

    // 3. Launch
    await swarm.launch({
      numAgents,
      requestsPerAgent,
      generateRequests: (agentIdx, count) =>
        Array.from({ length: count }, () => ({
          url: proxyUrl(targetUrl),
          resourceUrl: targetUrl,
          description: 'Swarm request',
        })),
      callbacks: {
        onStatus: (msg) => setStatus(msg, 'active'),
        onFundingStep: (step, status) => {
          const labels = {
            'approve': status === 'pending' ? 'Approving batch contract... Confirm in wallet.' : 'Approval confirmed.',
            'batch-transfer': status === 'pending' ? 'Batch funding agents... Confirm in wallet.' : 'Agents funded.',
          };
          setStatus(labels[step] || (step + ' ' + status), 'active');
        },
        onAgentLog: (entry) => addLogEntry(entry),
        onStatsUpdate: (stats) => updateStats(stats),
        onComplete: (stats) => {
          updateStats(stats);
          setStatus('Complete! ' + stats.totalRequests + ' requests in ' + (stats.elapsedMs / 1000).toFixed(1) + 's');
        },
      },
      walletClient,
      address: connectedAddress,
    });

  } catch (err) {
    const msg = err.message || 'Launch failed';
    if (msg.includes('User rejected') || msg.includes('user rejected') || msg.includes('User denied')) {
      setStatus('Wallet action cancelled.', 'error');
    } else {
      setStatus(msg, 'error');
    }
  } finally {
    currentSwarm = null;
    $url.disabled = false;
    $agents.disabled = false;
    $reqs.disabled = false;
    $btnWallet.disabled = !!connectedAddress;
    $btnLaunch.textContent = 'Launch Swarm';
    $btnLaunch.classList.remove('stop');
    $btnLaunch.disabled = !connectedAddress;
  }
}

// ── Action button dispatcher ──

$btnLaunch.addEventListener('click', () => {
  if (currentMode === 'single') {
    runSingleQuery();
  } else {
    if (currentSwarm && currentSwarm.isRunning()) {
      currentSwarm.stop();
    } else {
      launchSwarm();
    }
  }
});

</script>
</body>
</html>`;
}
