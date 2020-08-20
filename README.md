# CRAW
a website-crawler library for nodejs

## Documentation
Documentation of the library in a summarized and precise way.  

### Usage
```javascript
const craw = require('craw');

async function start () {
  const result = await craw("https://2lstudios.dev/");
  console.log(result.toJSON());
}

start();
```

### result.getContent()
Get the content of the website as headers, paragraphs, paragraphs and all the text in general.  
<ins>Output:<ins>
```javascript
{
  "text": "....",
  "h1": [],
  "h2": [].
  "h3": [],
  "h4": [],
  "h5": [],
  "h6": [],
  "words": []
}
```
  
  
