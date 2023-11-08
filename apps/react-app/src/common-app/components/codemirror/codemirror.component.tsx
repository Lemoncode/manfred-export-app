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
  const codeRef = React.useRef<HTMLDivElement>(null);
  const editorView = React.useRef<EditorView>();
  React.useEffect(() => {
    if (codeRef.current) {
      editorView.current = new EditorView({
        state: EditorState.create({
          doc: value,
          extensions: [
            basicSetup,
            json(),
            EditorView.lineWrapping,
            EditorView.updateListener.of((u: ViewUpdate) => onChange(u.state.doc.toString())),
            placeholder('Pega aquí tu JSON en formato MAC'),
            codeMirrorTheme,
          ],
        }),
        parent: codeRef.current,
      });
    }

    return () => editorView.current?.destroy();
  });

  return <div className={className} ref={codeRef} />;
};
