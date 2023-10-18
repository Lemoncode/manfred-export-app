import React from 'react';
import * as classes from './customSelect.styles';

interface Props {
  listOptions: string[];
  label: string;
}
export const CustomSelect: React.FC<Props> = ({ listOptions, label }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const toggleIsOpen = () => setIsOpen(!isOpen);
  return (
    <div className={classes.selectContainer}>
      <div className={classes.selectContent} onClick={toggleIsOpen}>
        <span>{label}</span>
        <img src="./assets/arrow_down_select.svg" alt="arrow down select" />{' '}
      </div>
      {isOpen && (
        <ul className={classes.listContainer}>
          {listOptions && listOptions.map((option, index) => <li key={index}>{option}</li>)}
        </ul>
      )}
    </div>
  );
};
