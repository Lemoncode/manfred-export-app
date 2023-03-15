import { Document, Packer } from 'docx';
import { ManfredAwesomicCV } from '../model';
import { download } from './engine.helpers';
import { removeInvalidChars } from './json-parse.business';
import { generateProfileSection } from './doc-parts';

const createMetaDocument = (cv: ManfredAwesomicCV): Document => {
  const name = cv?.aboutMe?.profile?.name ?? '';
  const surnames = cv?.aboutMe?.profile?.surnames ?? '';
  const email = cv?.aboutMe?.profile?.contact?.contactMails ?? '';

  return new Document({
    sections: [
      {
        properties: {},
        children: [generateProfileSection(name), generateProfileSection(surnames)],
      },
    ],
  });
};

export const parseStringToManfredJSon = (manfredJsonContent: string): ManfredAwesomicCV => {
  const cleanedContent = removeInvalidChars(manfredJsonContent);
  return JSON.parse(cleanedContent);
};

export const exportManfredJSonToWordAndDownload = async (filename: string, manfredJsonContent: ManfredAwesomicCV) => {
  const doc = createMetaDocument(manfredJsonContent);
  const blob = await Packer.toBlob(doc);
  download(blob, filename);
};
