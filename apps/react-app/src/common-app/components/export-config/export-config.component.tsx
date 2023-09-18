import React from 'react';
import { cx }from '@emotion/css';
import{theme} from'@/core/theme';
import { Button } from '@/common-app/components';
import * as classes from './export-config.styles';

interface ConfigSelection {
    color: string;
}

interface Props {
handleExportconfigSelection:() => void;
onClose: () => void;
}

export const ExportConfig: React.FC<Props> = (props) => {
    const { handleExportconfigSelection, onClose } = props;



  return (
    <div className={classes.content}>
 <form onSubmit={handleExportconfigSelection} className={classes.formContainer}>
          <fieldset>
            <legend className={classes.title}>SELECCIONA TU TEMA FAVORITO</legend>
            <input type="radio" id={theme.palette.primary[600]} name="color" value={theme.palette.primary[600]} className={classes.outerCircle} />
            <input type="radio" id={theme.palette.secondary[600]} name="color" value={theme.palette.secondary[600]} className={classes.outerCircle} />
            <input type="radio" id={theme.palette.success[600]} name="color" value={theme.palette.success[600]} className={classes.outerCircle} />
  </fieldset>
<p className={`${classes.title}`}>Ejemplo de previsualización</p>
<iframe id="iframeCV" className={classes.iframeCV}></iframe>
<div className={classes.buttonContainer}>
  <Button type="submit"  showIcon={false} className={classes.buttonStyle}>
    DESCARGAR
  </Button>
  <Button onClick={onClose} showIcon={false} className={classes.buttonStyle}>
    CANCELAR
  </Button>
</div>
</form>
</div>
  );
};
