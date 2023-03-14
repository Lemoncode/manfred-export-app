import { Document, Packer } from 'docx';
import { ManfredAwesomicCV } from '../model';
import { download } from './engine.helpers';
import { removeInvalidChars } from './json-parse.business';
import { doc } from './mock-document';

// Mock
const createMetaDocument = (): Document => doc;

export const parseStringToManfredJSon = (manfredJsonContent: string): ManfredAwesomicCV => {
  const cleanedContent = removeInvalidChars(manfredJsonContent);
  return JSON.parse(cleanedContent);
};

export const exportManfredJSonToWordAndDownload = async (filename: string, manfredJsonContent: ManfredAwesomicCV) => {
  const doc = createMetaDocument();
  const blob = await Packer.toBlob(doc);
  download(blob, filename);
};
