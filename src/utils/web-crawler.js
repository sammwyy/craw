const axios = require('axios');
const parser = require('node-html-parser');

exports.GET = (url) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error)
      });
  });
}

exports.PARSE = (string) => {
    return parser.parse(string);
}