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
<ins>Output:</ins>
```javascript
{
  "text": "....", // String
  "h1": [], // Array
  "h2": []. // Array
  "h3": [], // Array
  "h4": [], // Array
  "h5": [], // Array
  "h6": [], // Array
  "words": [] // Array
}
```

### result.getFrames()
Get a list with iframes from the website.  
<ins>Output:</ins>
  ```javascript
  [...]  // Array
```

### result.getImports()
Get a list of imports from the website. (like css, favicon and js)  
<ins>Output:</ins>
```javascript
{
  "scripts": [ // Array
    {
      integrity: "...", // String
      src: "...", // String
      async: ... // Boolean
    }
  ],

  "styles": [ // Array
    {
      integrity: "...", // String
      href: "...", // String
      rel: "..." // String
    }
  ],
  
  favicon: {
    type: "...", // String
    href: "..." // String 
  }
}
``	
