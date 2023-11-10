import React from 'react';
import { ExportHTMLSettings } from '@lemoncode/manfred2html';
import { useUserChoiceContext } from '@/core';
import { Button, Footer, Header, Modal, Navbar, AlertMessage, CodeMirrorComponent } from '@/common-app/components';
import { ExportConfig } from './components/export-config';
import * as classes from './template-export.styles';

interface Props {
  error: boolean;
  setError: (error: boolean) => void;
  onExportToWord: (text: string) => void;
  onExportToMarkdown: (text: string) => void;
  onExportToHTML: (text: string, exportHTMLSettings: ExportHTMLSettings) => void;
  onHTMLSettingSelectionChanged: (text: string, exportHTMLSettings: ExportHTMLSettings) => string;
}

export const TemplateExport: React.FC<Props> = props => {
  const { error, setError, onExportToWord, onExportToMarkdown, onExportToHTML, onHTMLSettingSelectionChanged } = props;
  const { userChoice, setUserChoice } = useUserChoiceContext();
  const [text, setText] = React.useState<string>('');
  const [openSettingsModal, setOpenSettingsModal] = React.useState<boolean>(false);

  const handleChange = (value: string) => setText(value);

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

  const handleOpenSettingsModal = () => {
    try {
      JSON.parse(text);
      setOpenSettingsModal(true);
    } catch (error) {
      setError(true);
    }
  };

  const handleCloseSettingsModal = () => setOpenSettingsModal(false);
  const handleCloseErrorModal = () => setError(false);

  return (
    <div className={classes.root}>
      <Navbar />
      <div className={classes.container}>
        <Header />
        <CodeMirrorComponent className={classes.textarea} value={text} onChange={handleChange}></CodeMirrorComponent>
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
            onClick={handleOpenSettingsModal}
          >
            Export To HTML
          </Button>
        </div>
      </div>
      <Modal isOpen={openSettingsModal}>
        <ExportConfig
          htmlTemplate={text}
          onExportToHTML={handleOnExportToHTML}
          onHTMLSettingSelectionChanged={onHTMLSettingSelectionChanged}
          cancelExport={handleCloseSettingsModal}
        />
      </Modal>
      <Modal isOpen={error}>
        <AlertMessage onClick={handleCloseErrorModal} />
      </Modal>
      <Footer />
    </div>
  );
};
