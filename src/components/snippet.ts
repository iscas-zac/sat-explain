import * as monaco from 'monaco-editor'

export function create_code_editor() {
    var editor_element = document.getElementById('code-editor')!;
    var editor = monaco.editor.create(editor_element, {
        value: editor_element.dataset.default,
        language: editor_element.dataset.language
    });
}

var editor_element = document.getElementById('code-editor')!;
var editor = monaco.editor.create(editor_element, {
    value: editor_element.dataset.default,
    language: editor_element.dataset.language
});

export function create_run_button(callback: Function) {
    var btn = document.createElement("button");
    btn.id = "run-code";
    btn.innerHTML = "Run Code";
    btn.style = "padding: 5px;";
    var header = document.getElementById("button-place");
    header!.appendChild(btn);

    document.getElementById("run-code")!.addEventListener("click", function() {
        callback(editor.getValue());
    });
}