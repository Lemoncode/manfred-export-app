/*
Grab a string or other format and download it as a file.

https://stackoverflow.com/questions/19327749/javascript-blob-filename-without-link
*/
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
