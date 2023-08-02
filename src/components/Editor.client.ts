import * as monaco from 'monaco-editor'

var editor = monaco.editor.create(document.getElementById('code-editor'), {
    value: ['function x() {', '\tconsole.log("Hello world!");', '}'].join('\n'),
    language: 'javascript'
});