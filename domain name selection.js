const elements = document.querySelectorAll('[class*=DomainTile__status]:not([class*=DomainTile__icon_status_failed]) > span[title]');
const values = Array.from(elements).map(el => el.getAttribute('title')).join('\n');
const tempInput = document.createElement('textarea');
document.body.appendChild(tempInput);
tempInput.value = values;
tempInput.select();
document.execCommand('copy');
document.body.removeChild(tempInput);
console.log('Copied to clipboard:', values);
