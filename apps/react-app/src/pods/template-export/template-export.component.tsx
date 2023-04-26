import React from 'react';
import { useUserChoiceContext } from '@/core';
import { Button, Footer, Header, Navbar } from '@/common-app/components';
import * as classes from './template-export.styles';

interface Props {
  onExport: (text: string) => void;
}

export const TemplateExport: React.FC<Props> = props => {
  const { onExport } = props;
  const { userChoice, setUserChoice } = useUserChoiceContext();
  const [text, setText] = React.useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleOnExport = () => {
    if (text.trim().length !== 0) {
      // setUserChoice({ ...userChoice, manfredJsonContent: text });
      onExport(userChoice.manfredJsonContent);
    } else {
      alert('No content');
    }
  };

  return (
    <div className={classes.root}>
      <Navbar />
      <div className={classes.container}>
        <Header />
        <textarea
          onChange={handleChange}
          value={text}
          placeholder="Pega aquí tu JSON en formato MAC"
          className={classes.textarea}
        ></textarea>
        <Button onClick={handleOnExport} className={classes.buttonClass} showIcon={false}>
          Export
        </Button>
      </div>
      <Footer />
    </div>
  );
};
