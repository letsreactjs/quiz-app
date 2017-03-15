const htmlCode = `
  <code>
    &lt;div class="spans" id="spans"&gt;
      &nbsp;&nbsp;&lt;span class="span" id="span1"&gt;Span 1&lt;/span&gt;
      &nbsp;&nbsp;&lt;div&gt;
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;span class="span" id="span"&gt;Span 2&lt;/span&gt;
      &nbsp;&nbsp;&lt;div&gt;

      &nbsp;&nbsp;&lt;div&gt;
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;span class="span" id="span"&gt;Span 3&lt;/span&gt;
      &nbsp;&nbsp;&lt;div&gt;

      &nbsp;&nbsp;&lt;div&gt;
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;span class="span" id="span3"&gt;Span 4&lt;/span&gt;
      &nbsp;&nbsp;&lt;div&gt;
    &lt;/div&gt;
  </code>
`.replace(/\n/g, "<br/>")
.replace(/"(.*?)"/g, `<span class="code-string">"$1"</span>`);

const q1 = {
  question: "From the above HTML code, which spans have an error?",
  options: ["First and second", "Second and third", "None"],
  answer: "Second and third"
};
const q2 = {
  question: "What is the error?",
  options: ["Same id on two elements", "Tags are not properly closed", "None"],
  answer: "Same id on two elements"
};
const q3 = {
  question: "<code>span:first-child{ color: red; }</code><br/>Which elements will have red text?",
  options:  ["#span1", "#span1 and #span2", "*"],
  answer: "*"
}

const questions = {
  1: q1,
  2: q2,
  3: q3
}
