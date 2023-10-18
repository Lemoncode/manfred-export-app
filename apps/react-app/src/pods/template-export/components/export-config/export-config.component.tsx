import React from 'react';
import { ExportHTMLSettings } from '@lemoncode/manfred2html';
import { theme } from '@/core/theme';
import { Button, CustomSelect } from '@/common-app/components';
import { useUserChoiceContext } from '@/core/user-choice';
import { CustomSelectColor } from '../customSelectColor/customSelectColor.component';
import * as classes from './export-config.styles';
interface Props {
  htmlTemplate: string;
  cancelExport: () => void;
  onExportToHTML: (exportHTMLSettings: ExportHTMLSettings) => void;
  onHTMLSettingSelectionChanged: (text: string, exportHTMLSettings: ExportHTMLSettings) => string;
}

const DOWNLOAD_MESSAGE_TIMEOUT = 2500;
const OPTIONSDESING = ['Item 1', 'Item 2', 'Item 3'];
const OPTIONSlANGUAGE = ['Item 1', 'Item 2', 'Item 3'];

export const ExportConfig: React.FC<Props> = props => {
  const { onExportToHTML, cancelExport, htmlTemplate, onHTMLSettingSelectionChanged } = props;
  const { userChoice } = useUserChoiceContext();
  const [exportHTMLSettings, setExportHTMLSettings] = React.useState<ExportHTMLSettings>({
    primaryColor: theme.palette.primary[600],
  });
  const [isDownloadInProgress, setIsDownloadInProgress] = React.useState<boolean>(false);

  const [htmlPreview, setHtmlPreview] = React.useState<string>(
    onHTMLSettingSelectionChanged(htmlTemplate, exportHTMLSettings)
  );

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setExportHTMLSettings({ primaryColor: event.target.value });
    onHTMLSettingSelectionChanged(htmlTemplate, { primaryColor: event.target.value });
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
            <CustomSelect listOptions={OPTIONSDESING} label={'Diseño'} />
            <CustomSelect listOptions={OPTIONSlANGUAGE} label={'Idioma cabeceras'} />
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
