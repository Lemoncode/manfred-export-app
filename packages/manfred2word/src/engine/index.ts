import { Document, Packer, IRunOptions } from 'docx';
import { ManfredAwesomicCV } from '../model';
import { download } from './engine.helpers';
import { removeInvalidChars } from './json-parse.business';
import { generateProfileSection } from './doc-parts';

const createMetaDocument = (cv: ManfredAwesomicCV): Document =>
  new Document({
    sections: [
      {
        properties: {},
        children: generateProfileSection(cv),
      },
    ],
  });

export const parseStringToManfredJSon = (manfredJsonContent: string): ManfredAwesomicCV => {
  const cleanedContent = removeInvalidChars(manfredJsonContent);
  return JSON.parse(cleanedContent);
};

export const exportManfredJSonToWordAndDownload = async (filename: string, manfredJsonContent: ManfredAwesomicCV) => {
  const doc = createMetaDocument(manfredJsonContent);
  const blob = await Packer.toBlob(doc);
  download(blob, filename);
};
