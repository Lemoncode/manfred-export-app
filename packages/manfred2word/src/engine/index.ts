import { Document, Packer } from 'docx';
import { download } from './engine.helpers';
import { doc } from './mock-document';


// Mock
const createMetaDocument = (): Document => doc;

export const exportManfredJSonToWordAndDownload = async (filename: string) => {
  const doc = createMetaDocument();
  const blob = await Packer.toBlob(doc);
  download(blob, filename);
};
