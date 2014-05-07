=========
UID.js
=========

![](https://travis-ci.org/uupaa/UID.js.png)

Unique ID.

# Document

- [UID.js wiki](https://github.com/uupaa/UID.js/wiki/UID)
- [Development](https://github.com/uupaa/WebModule/wiki/Development)
- [WebModule](https://github.com/uupaa/WebModule) ([Slide](http://uupaa.github.io/Slide/slide/WebModule/index.html))


# How to use

```js
<script src="lib/UID.js">
<script>
// for Browser
console.log( UID() );
</script>
```

```js
// for WebWorkers
importScripts("lib/UID.js");
console.log( UID() );
```

```js
// for Node.js
var UID = require("lib/UID.js");
console.log( UID() );
```
