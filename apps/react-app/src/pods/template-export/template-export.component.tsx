import { Button, Footer, Header, Navbar } from '@/common-app/components';
import * as classes from './template-export.styles';

import React from 'react';
import { Textarea } from '@/common-app/components/textarea';

interface Props {
  onExport: () => void;
}

export const TemplateExport: React.FC<Props> = props => {
  const { onExport } = props;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onExport();
  };

  return (
    <div className={classes.root}>
      <Navbar />
      <div className={classes.container}>
        <Header />
        <form onSubmit={handleSubmit}>
          <Textarea />
          <Button className={classes.buttonClass} showIcon={false}>
            Export
          </Button>
        </form>
      </div>
      <Footer />
    </div>
  );
};
