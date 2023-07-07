import { ManfredAwesomicCV } from '@/model';
import {
  renderParagraph,
  renderTable,
  renderTableCell,
  renderTableRow,
  renderTextRun,
} from '@/common-app/helpers/render-elements.helpers';
import { TableRow, Table, XmlComponent } from 'docx';
import { SoftSkillVM } from './soft-skill-section.vm';
import { styles } from './soft-skill-section.styles';
import { mapFromCvToSoftSkillVm } from './soft-skill-section.mapper';
import { sectionTitle } from './soft-skill.constants';

const getSkillNameList = (skillList: SoftSkillVM[]): string[] =>
  skillList.map(item => (item.skill?.name ? item.skill?.name : ''));

const createSkillListWithSeparator = (skillList: string[]): XmlComponent[] =>
  skillList.map((item, index) => (index === skillList.length - 1 ? renderTextRun(item) : renderTextRun(`${item} / `)));

const createSkillsTableRow = (skillList: SoftSkillVM[]): TableRow => {
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

export const generateSoftSkillSection = (cv: ManfredAwesomicCV): Table => {
  const hardSkillList = mapFromCvToSoftSkillVm(cv);
  const title = createTitleTableRow(sectionTitle);
  const hardSkillItems = createSkillsTableRow(hardSkillList);
  const table = renderTable([title, hardSkillItems], styles.table);

  return table;
};
