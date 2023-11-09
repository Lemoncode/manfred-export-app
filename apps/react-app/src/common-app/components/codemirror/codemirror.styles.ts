import { theme } from '@/core';
import { EditorView } from 'codemirror';

export const codeMirrorTheme = EditorView.theme({
  '&': {
    fontSize: '14px',
    flexDirection: 'column',
    display: 'flex',
    flexGrow: '1',
    maxHeight: '40vh',
    height: '100%',
    width: '100%',
  },
  '.cm-scroller': { overflow: 'auto' },
  '.cm-gutterElement': { display: 'none' },
  '.cm content, .cm-gutters,': {
    minHeight: '100%',
    backgroundColor: '#152128',
    color: theme.palette.light[500],
    textAlign: 'start',
    border: 'none',
  },
  '.cm-line > span': {
    color: theme.palette.primary[500],
  },
});
