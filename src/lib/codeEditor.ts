// src/lib/codeEditor.ts
// Editor de código embebido (CodeMirror 6) usado por ExerciseCard para que
// cada ejercicio se pueda escribir y ejecutar directamente en la página.
import { EditorView, basicSetup } from 'codemirror';
import { EditorState } from '@codemirror/state';
import { java } from '@codemirror/lang-java';

const editorTheme = EditorView.theme({
  '&': {
    backgroundColor: 'var(--bg)',
    color: 'var(--text)',
    fontSize: '0.9rem',
  },
  '.cm-content': {
    fontFamily: 'var(--font-mono)',
    padding: '12px 0',
    caretColor: 'var(--accent)',
  },
  '.cm-gutters': {
    backgroundColor: 'var(--surface-raised)',
    color: 'var(--muted)',
    border: 'none',
  },
  '.cm-activeLine': { backgroundColor: 'rgba(127, 127, 127, 0.08)' },
  '.cm-activeLineGutter': { backgroundColor: 'rgba(127, 127, 127, 0.08)' },
  '&.cm-focused': { outline: 'none' },
  '.cm-scroller': { overflow: 'auto' },
  '.cm-content, .cm-gutter': { minHeight: '160px' },
});

export function createJavaEditor(parent: HTMLElement, initialDoc: string): EditorView {
  return new EditorView({
    state: EditorState.create({
      doc: initialDoc,
      extensions: [basicSetup, java(), editorTheme],
    }),
    parent,
  });
}

export function getEditorContent(view: EditorView): string {
  return view.state.doc.toString();
}

export function setEditorContent(view: EditorView, content: string): void {
  view.dispatch({
    changes: { from: 0, to: view.state.doc.length, insert: content },
  });
}
