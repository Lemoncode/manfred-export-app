import React from 'react';
import { ExportHTMLSettings } from '@lemoncode/manfred2html';
import { theme } from '@/core/theme';
import { Button } from '@/common-app/components';
import * as classes from './export-config.styles';
import { useUserChoiceContext } from '@/core/user-choice';
interface Props {
  htmlTemplate: string;
  cancelExport: () => void;
  onExportToHTML: (exportHTMLSettings: ExportHTMLSettings) => void;
  onHTMLSettingSelectionChanged: (text: string, exportHTMLSettings: ExportHTMLSettings) => string;
}

const DOWNLOAD_MESSAGE_TIMEOUT = 2500;

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
      <div className={classes.optionsContainer}>
        <p className={classes.title}>SELECCIONA TU TEMA FAVORITO</p>
        <fieldset className={classes.colorFieldset}>
          <input
            type="radio"
            id={theme.palette.primary[600]}
            name="color"
            value={theme.palette.primary[600]}
            className={classes.inputRadioButton(theme.palette.primary[600])}
            onChange={handleColorChange}
            defaultChecked
          />
          <input
            type="radio"
            id={theme.palette.secondary[600]}
            name="color"
            value={theme.palette.secondary[600]}
            className={classes.inputRadioButton(theme.palette.secondary[600])}
            onChange={handleColorChange}
          />
          <input
            type="radio"
            id={theme.palette.success[600]}
            name="color"
            value={theme.palette.success[600]}
            className={classes.inputRadioButton(theme.palette.success[600])}
            onChange={handleColorChange}
          />
          <input
            type="radio"
            id={theme.palette.warning[600]}
            name="color"
            value={theme.palette.warning[600]}
            className={classes.inputRadioButton(theme.palette.warning[600])}
            onChange={handleColorChange}
          />
          <input
            type="radio"
            id={theme.palette.error[600]}
            name="color"
            value={theme.palette.error[600]}
            className={classes.inputRadioButton(theme.palette.error[600])}
            onChange={handleColorChange}
          />
          <input
            type="radio"
            id={theme.palette.dark[600]}
            name="color"
            value={theme.palette.dark[600]}
            className={classes.inputRadioButton(theme.palette.dark[600])}
            onChange={handleColorChange}
          />
        </fieldset>
        <p className={`${classes.title}`}>Ejemplo de previsualización</p>
        <iframe id="iframeCV" className={classes.iframeCV} srcDoc={htmlPreview}></iframe>
        <div className={classes.buttonContainer}>
          <Button
            onClick={handleExportConfigSelection}
            showIcon={false}
            className={classes.buttonStyle}
            disabled={isDownloadInProgress}
          >
            DESCARGAR
          </Button>
          <Button
            onClick={cancelExport}
            showIcon={false}
            className={classes.buttonStyle}
            disabled={isDownloadInProgress}
          >
            CANCELAR
          </Button>
        </div>
        {isDownloadInProgress && (
          <div className={classes.downloadMessage}>Descarga completada. Revisa tu carpeta de descargas</div>
        )}
      </div>
    </div>
  );
};
