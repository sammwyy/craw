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
  text: "....", // String
  h1: [], // Array
  h2: []. // Array
  h3: [], // Array
  h4: [], // Array
  h5: [], // Array
  h6: [], // Array
  words: [] // Array
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
  scripts: [ // Array
    {
      integrity: "...", // String
      src: "...", // String
      async: ... // Boolean
    }
  ],

  styles: [ // Array
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
```

### result.getLinks()
Get a list of hyperlinks from the website.  
<ins>Output:</ins>
```javascript
[ // Array
  {
    url: "...", // String
    anchor: "...", // String
    rel: [ ... ] // Array of Strings
  }
]
```

### result.getMedia()
Get a list of multimedia elements from the website. (Like images, audios and videos)  
<ins>Output:</ins>
```javascript
{
  audios: [ // Array
    {
      src: "...", // String
      type: "..." // String
    }
  ],
  images: [ // Array
    {
      src: "...", // String
      alt: "...", // String
      loading: "..." // String
    }
  ],
  videos: [ ... ] // Array of strings
}
```

### result.getMeta()
Get a list of metadata tags from the website.  
<ins>Output:</ins>
```javascript
{
  author: "...", // String
  viewport: "...", // String
  robots: "...", // String
  description: "...", // String
  keywords: [], // Array of strings
  image: "...", // String (Favicon)
  charset: "...", // String
  ... any other metadata tag like OG or Twitter ...
}
```

### result.getTitle()
Get the title of the website.  
<ins>Output:</ins>
```javascript
"..." // String	
```

### result.toJSON()
Run all functions and add the results of each one in the same object.
