var html_editor = CodeMirror.fromTextArea(document.getElementById("html"), {
          lineNumbers: true,
          mode: "text/html",
          htmlMode:true,
          theme:"3024-night",
          matchBrackets:true,
          autoCloseTags: true,
          extraKeys:{"Ctrl-Space": "autocomplete"},
          lint:true,
          gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter", "CodeMirror-lint-markers"]
    }),
    css_editor = CodeMirror.fromTextArea(document.getElementById("css"), {
          lineNumbers: true,
          mode: "css",
          theme:"3024-night",
          matchBrackets:true,
          autoCloseBrackets: true,
          extraKeys:{"Ctrl-Space": "autocomplete"},
          lint:true,
          gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter", "CodeMirror-lint-markers"]
        }),
    js_editor = CodeMirror.fromTextArea(document.getElementById("js"), {
          lineNumbers: true,
          mode: "javascript",
          theme:"3024-night",
          matchBrackets:true,
          autoCloseBrackets: true,
          extraKeys:{"Ctrl-Space": "autocomplete"},
          lint:true,
          gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter", "CodeMirror-lint-markers"]
    });
 
var editors = [html_editor, css_editor, js_editor];

var base_tpl =
    "<!doctype html>\n" +
    "<html>\n\t" +
    "<head>\n\t\t" +
    "<meta charset=\"utf-8\">\n\t\t" +
    "<title>Test</title>\n\n\t\t\n\t" +
    "</head>\n\t" +
    "<body>\n\t\n\t" +
    "</body>\n" +
    "</html>";
 
var prepareSource = function() {
    var html = html_editor.getValue(),
        css = css_editor.getValue(),
        jsdata=js_editor.getValue(),
        src = '';
    // HTML
    src = base_tpl.replace('</body>', html + '</body>');
    // CSS
    css = '<style>' + css + '</style>';
    src = src.replace('</head>', css + '</head>');
    jsdata="<script>"+jsdata+"</script>";
    src = src.replace('</body>', jsdata + '</body>');
    return src;
};

function render() {
    var source = prepareSource();
    var iframe = document.querySelector('iframe');
    var iframe_doc = iframe.contentDocument;
 
    iframe_doc.open();
    iframe_doc.write(source);
    iframe_doc.close();
};


 html_editor.on("change",render);
 js_editor.on("change",render);
 css_editor.on("change",render);


