import {
  TableCell,
  TableRow,
  Table,
  ITableCellOptions,
  XmlComponent,
  ITableRowOptions,
  TextRun,
  Paragraph,
} from 'docx';
import { ManfredAwesomicCV } from '@/model';
import { HardSkillVM } from './hard-skill-section.vm';
import { mapFromCvToHardSkillVm } from './hard-skill-section.mapper';
import { styles } from './hard-skill-section.styles';
import { renderTitleHardSkillSection } from './sections-hard-skill-section.parts';

const createTable = (hardSkillList: HardSkillVM[]): Table =>
  new Table({
    ...styles.table,
    rows: [createTableTitle(), createHardSkillListRow(hardSkillList)],
  });

const createTableTitle = (): TableRow =>
  new TableRow({
    children: [
      new TableCell({
        children: [renderTitleHardSkillSection()],
      }),
    ],
  });

const createHardSkillListRow = (sectionSoftSkillVm: HardSkillVM[]): TableRow =>
  new TableRow({
    children: [
      new TableCell({
        ...styles.table,
        children: [createParagraph(sectionSoftSkillVm)],
      }),
    ],
  });

const getSkillNameList = (skillList: HardSkillVM[]): string[] =>
  skillList.map(item => (item.skill?.name ? item.skill?.name : ''));

const createSkillListWithSeparator = (skillList: string[]): XmlComponent[] =>
  skillList.map((item, index) => {
    if (index === skillList.length - 1) {
      return createSoftSkillItem(item);
    }
    return createSoftSkillItem(`${item} | `);
  });

const createParagraph = (skillList: HardSkillVM[]): XmlComponent => {
  const list = getSkillNameList(skillList);
  const skillListWithSeparator = createSkillListWithSeparator(list);

  return new Paragraph({
    spacing: { before: 200 },
    children: [...skillListWithSeparator],
  });
};
const createSoftSkillItem = (skill: string): XmlComponent =>
  skill ? new TextRun({ text: skill, size: '12pt' }) : new TextRun({ text: '', size: '12pt' });

export const generateHardSkillSection = (cv: ManfredAwesomicCV): Table => {
  const hardSkillList = mapFromCvToHardSkillVm(cv);

  return createTable(hardSkillList);
};
