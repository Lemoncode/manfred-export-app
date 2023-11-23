import React from 'react';
import {
  TemplateCV,
  ColorTheme,
  Language,
  ExportHTMLSettings,
  createDefaultExportHTMLSettings,
} from '@lemoncode/manfred2html';
import { Button, CustomSelect } from '@/common-app/components';
import { CustomSelectColor } from '../customSelectColor/customSelectColor.component';
import * as classes from './export-config.styles';
interface Props {
  htmlTemplate: string;
  cancelExport: () => void;
  onExportToHTML: (exportHTMLSettings: ExportHTMLSettings) => void;
  onHTMLSettingSelectionChanged: (text: string, exportHTMLSettings: ExportHTMLSettings) => string;
}

const DOWNLOAD_MESSAGE_TIMEOUT = 2500;
const DESING_OPTIONS: TemplateCV[] = ['Sith Elegance', 'Galactic CleanTech', 'Monochrome Force'];
const LANGUAGE_OPTIONS: Language[] = ['es', 'en'];

export const ExportConfig: React.FC<Props> = props => {
  const { onExportToHTML, cancelExport, htmlTemplate, onHTMLSettingSelectionChanged } = props;
  const [exportHTMLSettings, setExportHTMLSettings] = React.useState<ExportHTMLSettings>(
    createDefaultExportHTMLSettings()
  );
  const [isDownloadInProgress, setIsDownloadInProgress] = React.useState<boolean>(false);

  const [htmlPreview, setHtmlPreview] = React.useState<string>(
    onHTMLSettingSelectionChanged(htmlTemplate, exportHTMLSettings)
  );

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setExportHTMLSettings({ ...exportHTMLSettings, colorTheme: event.target.value as ColorTheme });
    onHTMLSettingSelectionChanged(htmlTemplate, {
      ...exportHTMLSettings,
      colorTheme: event.target.value as ColorTheme,
    });
  };

  const handleTemplateChange = (templateCV: string) => {
    setExportHTMLSettings({ ...exportHTMLSettings, template: templateCV as TemplateCV });
    onHTMLSettingSelectionChanged(htmlTemplate, {
      ...exportHTMLSettings,
      template: templateCV as TemplateCV,
    });
  };

  const handleLanguageChange = (language: string) => {
    setExportHTMLSettings({ ...exportHTMLSettings, language: language as Language });
    onHTMLSettingSelectionChanged(htmlTemplate, {
      ...exportHTMLSettings,
      language: language as Language,
    });
  };
  const handleExportConfigSelection = () => {
    setIsDownloadInProgress(true);
    onExportToHTML(exportHTMLSettings);

    setTimeout(() => {
      cancelExport();
    }, DOWNLOAD_MESSAGE_TIMEOUT);
  };

  React.useEffect(() => {
    setHtmlPreview(onHTMLSettingSelectionChanged(htmlTemplate, exportHTMLSettings));
  }, [exportHTMLSettings]);

  return (
    <div className={classes.content}>
      <p className={classes.title}>PERSONALIZA A TU GUSTO</p>
      <div className={classes.optionsContainer}>
        <div className={classes.optionsContent}>
          <div className={classes.selectContainer}>
            <CustomSelect listOptions={DESING_OPTIONS} onSelectedOption={handleTemplateChange} label={'Diseño'} />
            {/* Uncomment when we have all label translations */}
            {/* <CustomSelect
              listOptions={LANGUAGE_OPTIONS}
              onSelectedOption={handleLanguageChange}
              label={'Idioma cabeceras'}
            /> */}
          </div>
          <div className={classes.selectColorContainer}>
            <CustomSelectColor label={'Colores'} onChange={handleColorChange} />
          </div>
        </div>
        <div className={classes.prevContainer}>
          <p className={`${classes.title}`}>Previsualización</p>
          <iframe id="iframeCV" className={classes.iframeCV} srcDoc={htmlPreview}></iframe>
        </div>
      </div>
      <div className={classes.buttonContainer}>
        <Button
          onClick={handleExportConfigSelection}
          showIcon={false}
          className={classes.buttonStyle}
          disabled={isDownloadInProgress}
        >
          DESCARGAR
        </Button>
        <Button onClick={cancelExport} showIcon={false} className={classes.buttonStyle} disabled={isDownloadInProgress}>
          CANCELAR
        </Button>
      </div>
      {isDownloadInProgress && (
        <div className={classes.downloadMessage}>Descarga completada. Revisa tu carpeta de descargas</div>
      )}
    </div>
  );
};
