import { ManfredAwesomicCV } from '@/model';
import { LanguageSectionVM } from './language-section.vm';

export const mapLanguageCV = (cv: ManfredAwesomicCV): LanguageSectionVM[] => {
  return mapLanguageListCV(cv);
};

export const mapLanguageListCV = (cv: ManfredAwesomicCV): LanguageSectionVM[] => {
  return (
    cv.knowledge?.languages?.map(item => {
      return {
        name: item.name,
        level: item.level,
      };
    }) || []
  );
};
