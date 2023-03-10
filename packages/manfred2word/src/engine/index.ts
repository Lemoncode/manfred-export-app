import { Document, Packer } from 'docx';
import { download } from './engine.helpers';
import { doc } from './mock-document';

const createDocument = (): Promise<Document> => {
  return new Promise(resolve => {
    resolve(doc);
  });
};

export const exportManfredJSonToWord = () => {
  createDocument().then(doc => {
    Packer.toBlob(doc).then(blob => {
      const filename = 'exportManfredJSonToWord.docx';
      download(blob, filename);
    });
  });
};
