function parsePlantumlCodeBlocks(plantumlServer = "https://www.plantuml.com/plantuml/uml", htmlClass = "language-plantuml") {
    var codeBlocks = document.getElementsByClassName(htmlClass);

    for (var block_i = 0; block_i < codeBlocks.length; block_i++) {
        block_string = codeBlocks[block_i].innerText
        //UTF8
        block_string = unescape(encodeURIComponent(block_string));
        codeBlocks[block_i].innerHTML = "<img src=\"" + plantumlServer + "/img/" + encode64(zip_deflate(block_string, 9)) + "\">";
    }
}

