exports.checkTitle = (body) => {
    return body.querySelector("title").innerHTML
}

exports.checkMeta = (body) => {
    let metas = body.querySelectorAll("meta");
    let map = new Map();
    let others = [];

    for (let meta of metas) {
        let name = meta.getAttribute("name");
        let content = meta.getAttribute("content");
        let httpequiv = meta.getAttribute("http-equiv");

        if (name != null) {
            map.set(name, content || httpequiv);
        } else {
            others.push(meta);
        }
    }

    let out = mapToObj(map);
    
    if (out.keywords != null) {
        out.keywords = out.keywords.replace(/\, /gi, ",").split(",");
    }

    for (let other of others) {
        let charset = other.getAttribute("charset");

        if (charset != null) {
            out.charset = charset;
        }
    }

    return out;
}

const mapToObj = m => {
    return Array.from(m).reduce((obj, [key, value]) => {
      obj[key] = value;
      return obj;
    }, {});
  };