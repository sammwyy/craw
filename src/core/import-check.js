exports.checkStyles = (body) => {
    let styles = body.querySelectorAll("link");
    let out = [];

    for (let style of styles) {
        let rel = style.getAttribute("rel");
        let integrity = style.getAttribute("integrity");
        let href = style.getAttribute("href");

        if (rel == "stylesheet") {
            out.push({
                rel, integrity, href
            })
        }
    }

    return out;
}

exports.checkFavicon = (body) => {
    let links = body.querySelectorAll("link");

    for (let link of links) {
        let rel = link.getAttribute("rel");
        if (rel.split(" ").includes("icon")) {
            return {
                type: link.getAttribute("type"),
                href: link.getAttribute("href")
            }
        }
    }
}

exports.checkScripts = (body) => {
    let scripts = body.querySelectorAll("script");
    let out = [];

    for (let script of scripts) {
        let integrity = script.getAttribute("integrity");
        let src = script.getAttribute("src");
        let async = script.getAttribute("async") == true || script.hasAttribute("async") || false;

        if (src != null) {
            out.push({
                integrity, src, async
            })
        }
    }

    return out;
}