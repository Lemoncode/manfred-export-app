import { TableCell, TableRow, Table } from 'docx';
import { ManfredAwesomicCV } from '@/model';
import { HardSkillVM } from './hard-skill-section.vm';
import { mapFromCvToHardSkillVm } from './hard-skill-section.mapper';
import { styles } from './hard-skill-section.styles';
import { renderSectionHardSkillSection, renderTitleHardSkillSection } from './sections-hard-skill-section.parts';

export const generateHardSkillSection = (cv: ManfredAwesomicCV): Table => {
  const hardSkillVmArray = mapFromCvToHardSkillVm(cv);

  return generateHardSkillSectionInner(hardSkillVmArray);
};

const generateHardSkillSectionInner = (hardSkillVmArray: HardSkillVM[]): Table => {
  if (Array.isArray(hardSkillVmArray) && hardSkillVmArray.length >= 1) {
    return new Table({
      ...styles.table,
      rows: generateSectionFromVmToRows(hardSkillVmArray),
    });
  } else {
    return new Table({
      rows: [],
    });
  }
};

const generateSectionFromVmToRows = (hardSkillVmArray: Array<HardSkillVM>) => {
  let result = [];

  result = hardSkillVmArray.map(
    (hardSkill: HardSkillVM) =>
      new TableRow({
        children: [
          new TableCell({
            ...styles.table,
            children: [renderSectionHardSkillSection(hardSkill)],
          }),
        ],
      })
  );

  result.unshift(
    new TableRow({
      children: [
        new TableCell({
          children: [renderTitleHardSkillSection()],
        }),
      ],
    })
  );

  return result;
};
