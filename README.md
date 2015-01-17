# pathfilter

###Install

`$ npm install pathfilter`


###byExt(ext, path(s))

```javascript
var pFilter = require('pathfilter');

var ext = 'js';
var path = '/path/to/abc.js';
console.log(pFilter.byExt(ext,path));
// /path/to/abc.js

ext = 'js';
path = ['/path/to/abc.js','/path/to/def.js','/path/to/ghi.css','/path/to/jkl.exe'];
console.log(pFilter.byExt(ext,path));
// /path/to/abc.js,/path/to/def.js

ext = ['js','css'];
console.log(pFilter.byExt(ext,path));
// /path/to/abc.js,/path/to/def.js,/path/to/ghi.css
```
