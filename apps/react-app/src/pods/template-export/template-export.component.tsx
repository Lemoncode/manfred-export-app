import React from 'react';
import { ExportHTMLSettings } from '@lemoncode/manfred2html';
import { useUserChoiceContext } from '@/core';
import { Button, Footer, Header, Modal, Navbar, ExportConfig } from '@/common-app/components';
import * as classes from './template-export.styles';

interface Props {
  onExportToWord: (text: string) => void;
  onExportToMarkdown: (text: string) => void;
  onExportToHTML: (text: string, exportHTMLSettings: ExportHTMLSettings) => void;
  onHTMLSettingSelectionChanged: (text: string, exportHTMLSettings: ExportHTMLSettings) => string;
}

export const TemplateExport: React.FC<Props> = props => {
  const { onExportToWord, onExportToMarkdown, onExportToHTML, onHTMLSettingSelectionChanged } = props;
  const { userChoice, setUserChoice } = useUserChoiceContext();
  const [text, setText] = React.useState<string>('');
  const [openModal, setOpenModal] = React.useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleOnExportToWord = () => {
    setUserChoice({ ...userChoice, manfredJsonContent: text });
    onExportToWord(text);
  };

  const handleOnExportToMarkdown = () => {
    setUserChoice({ ...userChoice, manfredJsonContent: text });
    onExportToMarkdown(text);
  };

  const handleOnExportToHTML = (exportHTMLSettings: ExportHTMLSettings) => {
    setUserChoice({ ...userChoice, manfredJsonContent: text });
    onExportToHTML(text, exportHTMLSettings);
  };

  const handleCloseModal = () => setOpenModal(false);

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
            onClick={handleOnExportToWord}
            className={classes.buttonClass}
            showIcon={false}
          >
            Export To Word
          </Button>
          <Button
            disabled={text ? false : true}
            onClick={handleOnExportToMarkdown}
            className={classes.buttonClass}
            showIcon={false}
          >
            Export To Markdown
          </Button>
          <Button
            disabled={text ? false : true}
            className={classes.buttonClass}
            showIcon={false}
            onClick={() => {
              setOpenModal(true);
            }}
          >
            Export To HTML
          </Button>
        </div>
      </div>
      <Modal isOpen={openModal}>
        <ExportConfig
          htmlTemplate={text}
          onExportToHTML={handleOnExportToHTML}
          onHTMLSettingSelectionChanged={onHTMLSettingSelectionChanged}
          cancelExport={handleCloseModal}
        />
      </Modal>
      <Footer />
    </div>
  );
};
