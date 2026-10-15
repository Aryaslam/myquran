let toastEl = null;
let lastMsg = '';
let lastTime = 0;
let audioCtx = null;

function ensureToast() {
  if (toastEl) return toastEl;
  toastEl = document.createElement('div');
  toastEl.id = 'toast';
  toastEl.setAttribute('role', 'alert');
  toastEl.style.cssText = `
    position: fixed;
    left: 50%;
    bottom: 104px;
    transform: translateX(-50%) translateY(16px);
    z-index: 80;
    background: var(--ink);
    color: #fff;
    font: 500 13px Inter, system-ui, sans-serif;
    padding: 12px 18px 12px 28px;
    border-radius: 16px;
    max-width: min(460px, calc(100vw - 32px));
    opacity: 0;
    pointer-events: auto;
    box-sizing: border-box;
  `;
  toastEl.innerHTML = `<span style="position:absolute;left:10px;top:50%;margin-top:-4px;width:8px;height:8px;border-radius:50%;background:#d0524a;"></span><span id="toastText"></span>`;
  document.body.appendChild(toastEl);
  toastEl.addEventListener('click', hideToast);
  return toastEl;
}

function hideToast() {
  if (!toastEl) return;
  toastEl.style.transition = 'transform 0.5s var(--ease), opacity 0.5s var(--ease)';
  toastEl.style.transform = 'translateX(-50%) translateY(16px)';
  toastEl.style.opacity = '0';
  setTimeout(() => { if (toastEl) toastEl.remove(); toastEl = null; }, 500);
}

export function showError(message) {
  const now = Date.now();
  if (message === lastMsg && now - lastTime < 3000) return;
  lastMsg = message;
  lastTime = now;
  const el = ensureToast();
  el.querySelector('#toastText').textContent = message;
  el.style.transition = 'transform 0.7s var(--ease), opacity 0.7s var(--ease)';
  el.style.transform = 'translateX(-50%) translateY(0)';
  el.style.opacity = '1';
  setTimeout(hideToast, 4500);
  ding();
}

function ding() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') audioCtx.resume();
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = 'sine';
  osc.frequency.value = 1046;
  gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.5);
  osc.connect(gain).connect(audioCtx.destination);
  osc.start();
  osc.stop(audioCtx.currentTime + 0.5);
}