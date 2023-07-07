import { TableRow, Table, XmlComponent, HeadingLevel } from 'docx';
import { ManfredAwesomicCV } from '@/model';
import { HardSkillVM } from './hard-skill-section.vm';
import { mapFromCvToHardSkillVm } from './hard-skill-section.mapper';
import {
  renderTable,
  renderTableRow,
  renderTableCell,
  renderParagraph,
  renderTextRun,
} from './hard-skill-section.helpers';
import { sectionTitle } from './hard-skill-constants';
import { styles } from './hard-skill-section.styles';

const getSkillNameList = (skillList: HardSkillVM[]): string[] =>
  skillList.map(item => (item.skill?.name ? item.skill?.name : ''));

const createSkillListWithSeparator = (skillList: string[]): XmlComponent[] =>
  skillList.map((item, index) => (index === skillList.length - 1 ? renderTextRun(item) : renderTextRun(`${item} / `)));

const createSkillsTableRow = (skillList: HardSkillVM[]): TableRow => {
  const list = getSkillNameList(skillList);
  const skillListWithSeparator = createSkillListWithSeparator(list);
  const paragraph = renderParagraph(skillListWithSeparator, { spacing: { before: 200 } });
  const cell = renderTableCell([paragraph]);
  const row = renderTableRow([cell]);

  return row;
};

const createTitleTableRow = (text: string): TableRow => {
  const title = renderTextRun(text, { size: '18pt', bold: true });
  const paragraph = renderParagraph([title], { spacing: { before: 200 } });
  const cell = renderTableCell([paragraph]);
  const row = renderTableRow([cell]);

  return row;
};

export const generateHardSkillSection = (cv: ManfredAwesomicCV): Table => {
  const hardSkillList = mapFromCvToHardSkillVm(cv);
  const title = createTitleTableRow(sectionTitle);
  const hardSkillItems = createSkillsTableRow(hardSkillList);
  const table = renderTable([title, hardSkillItems], styles.table);

  return table;
};
