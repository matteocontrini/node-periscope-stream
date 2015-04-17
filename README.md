# node-periscope-stream
Get details about a Periscope live

```js
npm install node-periscope-stream
```

```js
var periscope = require('node-periscope-stream');
var details = periscope('https://www.periscope.tv/w/[example]');
if (details) {
  console.log(details['hls_url']);
}
```
