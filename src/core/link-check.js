exports.checkLinks = (body) => {
    let links = body.querySelectorAll("[href]");
    let out = [];

    for (let link of links) {
        let url = link.getAttribute("href");
        let rel = (link.getAttribute("rel") || "").split(" ");
        let anchor = link.text;

        if (!rel.includes("stylesheet")) {
            out.push({
                url, anchor, rel
            })
        }
    }

    return out;
}