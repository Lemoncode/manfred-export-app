import { Document, Packer, IRunOptions } from 'docx';
import { ManfredAwesomicCV } from '../model';
import { download } from './engine.helpers';
import { removeInvalidChars } from './json-parse.business';
import { generateParagraph } from './doc-parts';

const createMetaDocument = (cv: ManfredAwesomicCV): Document => {
  const name = cv?.aboutMe?.profile?.name ?? '';
  const surnames = cv?.aboutMe?.profile?.surnames ?? '';
  const fullName = `${name} ${surnames}`;
  const title = cv?.aboutMe?.profile?.title ?? '';
  const email = cv?.aboutMe?.profile?.contact?.contactMails ?? '';

  type TextRunStyles = Omit<IRunOptions, 'text'>;
  const styles = {
    aboutme: {
      name: {
        bold: true,
        size: '20pt',
      } as TextRunStyles,
      title: {
        bold: true,
        size: '10pt',
      } as TextRunStyles,
    },
  };

  return new Document({
    sections: [
      {
        properties: {},
        children: [generateParagraph(name), generateParagraph(title)],
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
