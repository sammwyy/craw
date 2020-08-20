exports.checkImages = (body) => {
    let imgs = body.querySelectorAll("img");
    let out = [];

    for (let img of imgs) {
        let src = img.getAttribute("src");
        let alt = img.getAttribute("alt");
        let loading = img.getAttribute("loading");

        out.push({
            src, alt, loading
        })
    }

    return out;
}

exports.checkAudio = (body) => {
    let audios = body.querySelectorAll("audio");
    let out = [];

    for (let audio of audios) {
        let src = audio.getAttribute("src");
        let type = audio.getAttribute("type");

        out.push({
            src, type
        })
    }

    return out;
}

exports.checkVideo = (body) => {
    let videos = body.querySelectorAll("video");
    let out = [];

    for (let video of videos) {
        let src = video.getAttribute("src");
        out.push(src);
    }

    return out;
}