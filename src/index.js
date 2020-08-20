const crawler = require("./utils/web-crawler");
const metacheck = require("./core/meta-check");
const contentcheck = require("./core/content-check");
const linkcheck = require("./core/link-check");
const mediacheck = require("./core/media-check");
const importcheck = require("./core/import-check");
const framecheck = require("./core/frames-check");

class Craw {
    constructor(body) {
        this.body = body;
    }

    toJSON () {
        return {
            "title": this.getTitle(),
            "meta": this.getMeta(),
            "content": this.getContent(),
            "links": this.getLinks(),
            "frames": this.getFrames(),
            "imports": this.getImports(),
            "media": this.getMedia()
        }
    }

    getTitle () {
        return metacheck.checkTitle(this.body);
    }

    getMeta () {
        return metacheck.checkMeta(this.body);
    }

    getContent () {
        return contentcheck.checkBody(this.body);
    }

    getLinks () {
        return linkcheck.checkLinks(this.body);
    }

    getFrames () {
        return framecheck.checkFrames(this.body);
    }

    getImports () {
        return {
            scripts: importcheck.checkScripts(this.body),
            styles: importcheck.checkStyles(this.body),
            favicon: importcheck.checkFavicon(this.body)
        }
    }

    getMedia () {
        return {
            audios: mediacheck.checkAudio(this.body),
            images: mediacheck.checkImages(this.body),
            videos: mediacheck.checkVideo(this.body)
        }
    }
}

module.exports = (url) => {
    return new Promise(async (resolve) => {
        const response = await crawler.GET(url);
        const body = crawler.PARSE(response.data);
        const result = new Craw(body);

        resolve(result);
    });
}

/*
exports.run = async (url) => {
    const response = await craw.GET(url);
    const body = craw.PARSE(response.data);
    
    const result = {};

    result.title = metacheck.checkTitle(body);
    result.meta = metacheck.checkMeta(body);
    result.content = contentcheck.checkBody(body);
    result.links = linkcheck.checkLinks(body);
    result.frames = framecheck.checkFrames(body);
    result.imports = {
        scripts: importcheck.checkScripts(body),
        styles: importcheck.checkStyles(body),
        favicon: importcheck.checkFavicon(body)
    }
    result.media = {
        audios: mediacheck.checkAudio(body),
        images: mediacheck.checkImages(body),
        videos: mediacheck.checkVideo(body)
    }

    return result;
}*/