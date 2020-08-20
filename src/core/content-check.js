exports.checkBody= (body) => {
    let h1 = queryOnlyInners(body, "h1");
    let h2 = queryOnlyInners(body, "h2");
    let h3 = queryOnlyInners(body, "h3");
    let h4 = queryOnlyInners(body, "h4");
    let h5 = queryOnlyInners(body, "h5");
    let h6 = queryOnlyInners(body, "h6");
    
    let reR = new RegExp('\\r', "gi");
    let reN = new RegExp('\\n', "gi");
    let words = body.text.replace(reR, " ").replace(reN, " ");
    while (words.includes("  ")) {
        words = words.replace("  ", " ");
    }

    words = words.replace("<!DOCTYPE html> ", "")


    return { text: words, h1, h2, h3, h4, h5, h6, words: words.split(" ") }
}

function queryOnlyInners (body, query) {
    let DOMObjects = body.querySelectorAll(query);
    let InnerObjects = [];

    for (let obj of DOMObjects) {
        InnerObjects.push(obj.innerHTML);
    }

    return InnerObjects;
}