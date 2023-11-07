import React from 'react';

import { EditorState } from '@codemirror/state';
import { json } from '@codemirror/lang-json';
import { basicSetup } from 'codemirror';
import { EditorView, ViewUpdate, placeholder } from '@codemirror/view';

import { codeMirrorTheme } from './codemirror.styles';

interface Props {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export const CodeMirrorComponent: React.FC<Props> = props => {
  const { value, onChange, className } = props;

  const [view, setView] = React.useState<EditorView | null>(null);

  const codeRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (codeRef.current) {
      let editorState = EditorState.create({
        doc: value,
        extensions: [
          basicSetup,
          json(),
          EditorView.lineWrapping,
          EditorView.updateListener.of((u: ViewUpdate) => onChange(u.state.doc.toString())),
          placeholder('Pega aquí tu JSON en formato MAC'),
          codeMirrorTheme,
        ],
      });

      setView(
        new EditorView({
          state: editorState,
          parent: codeRef.current,
        })
      );

      return () => {
        view?.destroy();
      };
    } else {
      throw new Error('Se ha producido un error con el EditorJSON');
    }
  }, []);

  React.useEffect(() => {
    if (view) {
      let transaction = view.state.update({
        changes: {
          from: 0,
          to: view.state.doc.length,
          insert: value,
        },
      });
      if (value !== view.state.doc.toString()) {
        view.dispatch(transaction);
      }
    }
  }, [value]);

  return <div className={className} ref={codeRef} />;
};
