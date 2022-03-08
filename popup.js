/*
  "content_security_policy": "script-src 'self' https://ajax.googleapis.com; object-src 'self'"

  katex.render(mathField.latex(), element, {
                throwOnError: false
            });
 */

const mathFieldSpan = document.getElementById('math-field');
const latexSpan = document.getElementById('latex');

const MQ = MathQuill.getInterface(2);
const mathField = MQ.MathField(mathFieldSpan, {
    spaceBehavesLikeTab: true,
    handlers: {
        edit: function() {
            latexSpan.textContent = mathField.latex();
        }
    }
});

let rendered = $("#rendered")

$("#render").click(function () {
    rendered.empty()
    const tex = latexSpan.textContent
    const url = "https://chart.apis.google.com/chart?cht=tx&chl=" + encodeURIComponent(tex);// + "&chs=30000";

    const img = '<img src="' + url + '" alt="' + tex + '"/>';
    rendered.append(img);
})