let count = 0;

const countEl = document.getElementById('count');
const statusEl = document.getElementById('status');

function updateDisplay() {
  countEl.textContent = count;
}

function showStatus(msg) {
  statusEl.textContent = msg;
  setTimeout(() => { statusEl.textContent = ''; }, 1200);
}

document.getElementById('increment').addEventListener('click', () => {
  count++;
  updateDisplay();
  showStatus('Incremented!');
});

document.getElementById('decrement').addEventListener('click', () => {
  count--;
  updateDisplay();
  showStatus('Decremented!');
});

document.getElementById('reset').addEventListener('click', () => {
  count = 0;
  updateDisplay();
  showStatus('Reset!');
});
