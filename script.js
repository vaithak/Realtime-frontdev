var html_editor = document.querySelector('#html'),
    css_editor = document.querySelector('#css'),
    js_editor = document.querySelector('#js');
 
var editors = [html_editor, css_editor, js_editor];
 
editors.forEach(function(editor, i, arr) {
    editor.addEventListener('keyup', function() {
        render();
    });
});

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
    var html = html_editor.value,
        css = css_editor.value,
        js=js_editor.value,
        src = '';
    // HTML
    src = base_tpl.replace('</body>', html + '</body>');
    // CSS
    css = '<style>' + css + '</style>';
    src = src.replace('</head>', css + '</head>');
    js = js.replace('</body>', js + '</body>');
    return src;
};

var render = function() {
    var source = prepareSource();
    var iframe = document.querySelector('iframe');
    var iframe_doc = iframe.contentDocument;
 
    iframe_doc.open();
    iframe_doc.write(source);
    iframe_doc.close();
};