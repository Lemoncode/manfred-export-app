import { mockDoc } from './mock-document';
import * as docx from 'docx';

export const exportManfredJSonToWord = (jsonContent: string): Promise<Buffer> => {
  const promise = new Promise<Buffer>((resolve, reject) => docx.Packer.toBuffer(mockDoc));
  return promise;
};
