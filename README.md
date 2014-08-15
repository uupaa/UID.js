# UID.js [![Build Status](https://travis-ci.org/uupaa/UID.js.png)](http://travis-ci.org/uupaa/UID.js)

[![npm](https://nodei.co/npm/uupaa.uid.js.png?downloads=true&stars=true)](https://nodei.co/npm/uupaa.uid.js/)

Make Unique ID.

## Document

- [UID.js wiki](https://github.com/uupaa/UID.js/wiki/UID)
- [Development](https://github.com/uupaa/WebModule/wiki/Development)
- [WebModule](https://github.com/uupaa/WebModule)
    - [Slide](http://uupaa.github.io/Slide/slide/WebModule/index.html)
    - [Development](https://github.com/uupaa/WebModule/wiki/Development)

## How to use

### Browser

```js
<script src="lib/UID.js"></script>
<script>
console.log( UID() );
</script>
```

### WebWorkers

```js
importScripts("lib/UID.js");
console.log( UID() );
```

### Node.js

```js
var UID = require("lib/UID.js");
console.log( UID() );
```
