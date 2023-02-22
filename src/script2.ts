import { codes } from './codes';

const codesListEle = document.querySelector<HTMLUListElement>('#codes')!;

Object.entries(codes).forEach(([code, url]) => {
  const link = document.createElement('a');
  link.href = url;
  link.target = '_blank';
  link.textContent = `Mã ${code}`;
  const item = document.createElement('li');
  item.append(link);
  codesListEle.append(item);
});
