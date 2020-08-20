process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

const craw = require("./index.js");

async function main () {
    let result = await craw("https://2lstudios.dev");
    console.log(result.toJSON());
}

main();