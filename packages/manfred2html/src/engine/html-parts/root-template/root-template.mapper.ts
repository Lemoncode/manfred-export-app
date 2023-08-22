import { ManfredAwesomicCV } from '@/model';
import { AsideVM } from './model';

export const mapFromCvToAsideVm = (cv: ManfredAwesomicCV | null): AsideVM => {
  return {
    areLanguagesInformed: Boolean(cv?.knowledge?.languages && cv.knowledge.languages.length > 0),
    areSoftSkillsInformed: Boolean(cv?.knowledge?.softSkills),
    areHardSkillsInformed: Boolean(cv?.knowledge?.hardSkills),
    areLinksInformed: Boolean(cv?.aboutMe?.relevantLinks),
  };
};
