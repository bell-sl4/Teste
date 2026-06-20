window.addEventListener('DOMContentLoaded', () => {
  requestAnimationFrame(() => document.body.classList.add('is-ready'));
});

const btn = document.getElementById('enterBtn');
const overlay = document.getElementById('overlay');
const backBtn = document.getElementById('backBtn');

function setOrigin(el){
  const r = el.getBoundingClientRect();
  overlay.style.setProperty('--cx', (r.left + r.width / 2) + 'px');
  overlay.style.setProperty('--cy', (r.top + r.height / 2) + 'px');
}

btn.addEventListener('click', () => {
  setOrigin(btn);
  overlay.classList.add('open');
});

backBtn.addEventListener('click', () => {
  setOrigin(backBtn);
  overlay.classList.remove('open');
});
