import React from 'react';
import * as classes from './customSelect.styles';

interface Props {
  listOptions: string[];
  label: string;
  onSelectedOption: (option: string) => void;
}
export const CustomSelect: React.FC<Props> = props => {
  const { listOptions, label, onSelectedOption } = props;
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [selectedOption, setSelectedOption] = React.useState<string>(listOptions[0]);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleOnMouseLeave = () => isOpen && toggleIsOpen();

  const handleOptionSelect = (option: string) => {
    onSelectedOption(option);
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={classes.selectContainer} onMouseLeave={handleOnMouseLeave}>
      <span className={classes.label}>{label}</span>
      <div className={classes.selectContent} onClick={toggleIsOpen}>
        <span>{selectedOption}</span>
        <img src="./assets/arrow_select.svg" alt="arrow select" className={classes.rotate(isOpen)} />
      </div>
      {isOpen && (
        <ul className={classes.listContainer}>
          {listOptions &&
            listOptions.map((option, index) => (
              <li key={index} onClick={() => handleOptionSelect(option)}>
                {option}
                {index === 0 && ' (por defecto)'}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};
