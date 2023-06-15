export const download = (blob: Blob, filename: string) => {
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  document.body.appendChild(a);
  a.style.display = 'none';
  a.href = url;
  a.download = filename;
  a.click();
  window.URL.revokeObjectURL(url);
  a.remove();
};

export const capitalizeWords = (text: string): string => {
  return text
    .split(' ')
    .map(c => c.charAt(0).toUpperCase() + c.slice(1))
    .join(' ');
};
