import { Document, Packer } from 'docx';
import { download } from './engine.helpers';
import { doc } from './mock-document';

const createMetaDocument = (): Promise<Document> => {
  return new Promise(resolve => {
    resolve(doc);
  });
};

export const exportManfredJSonToWordAndDownload = async (filename: string) => {
  const doc = await createMetaDocument();
  const blob = await Packer.toBlob(doc);
  download(blob, filename);
};
