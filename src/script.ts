import { codes } from './codes';

const codeInput = document.querySelector<HTMLInputElement>(`#codeInp`)!;

document.getElementById('orderForm')?.addEventListener('submit', e => {
  e.preventDefault();
  const code = codeInput.value;
  const url = (codes as Record<string, string>)[code];
  if (url) window.open(url, '_blank');
});
