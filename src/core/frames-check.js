exports.checkFrames = (body) => {
    const iframes = body.querySelectorAll("iframe");

    const out = [];

    for (let iframe of iframes) {
        let src = iframe.getAttribute("src");
        let srcdoc = iframe.getAttribute("srcdoc");
        let title = iframe.getAttribute("title");

        out.push({
            src, title, srcdoc
        })
    }

    return out;
}