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
    setUserChoice({ ...userChoice, manfredJsonContent: text });
    onExport(text);
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
        <div className={classes.buttonContainer}>
          <Button
            disabled={text ? false : true}
            onClick={handleOnExport}
            className={classes.buttonClass}
            showIcon={false}
          >
            Export To Word
          </Button>
          <Button
            disabled={text ? false : true}
            onClick={handleOnExport} /* TODO functionality for Markdown export */
            className={classes.buttonClass}
            showIcon={false}
          >
            Export To Markdwon
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
