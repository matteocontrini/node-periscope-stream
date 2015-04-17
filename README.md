# node-periscope-stream
Get details about a Periscope live

## Install
```js
npm install node-periscope-stream
```

## Use
```js
var periscope = require('node-periscope-stream');
periscope('https://www.periscope.tv/w/[example]', function(err, details) {
  if (err) {
    console.log(err);
    return;
  }
});
```
