import { EditorView } from 'codemirror';

export const codeMirrorTheme = EditorView.theme({
  '&': {
    fontSize: '14px',
    display: 'flex',
    flexGrow: '1',
    width: '100%',
    maxHeight: '50vh',
  },

  '.cm-scroller': { overflow: 'auto' },
  '.cm content, .cm-gutters, .cm-gutterElement,': {
    backgroundColor: '#152128',
    color: '#AAB0B1',
    textAlign: 'start',
    border: 'none',
  },
});
