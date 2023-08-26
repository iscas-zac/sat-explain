import { create_code_editor, create_run_button } from "./snippet.ts";
import * as pl from 'tau-prolog';

const result = document.getElementById("result");
create_run_button((src) => {
  var session = pl.create();
  result.innerHTML = "<p></p>";
	session.consult(src, {error: function(err) { console.log(err); }});
	session.query(document.getElementById("query").textContent, {error: function(err) { console.log(err); }});
	session.answers(function(ans) {
    if (pl.type.is_substitution(ans)) {
      result.innerHTML += pl.format_answer(ans);
      result.innerHTML += "<p>---</p>";
    }
  }, 1000);
})