UID.js
=========

Unique ID.

# Document

https://github.com/uupaa/UID.js/wiki/UID

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

# for Developers

1. Install development dependency tools

    ```sh
    $ brew install closure-compiler
    $ brew install node
    $ npm install -g plato
    ```

2. Clone Repository and Install

    ```sh
    $ git clone git@github.com:uupaa/UID.js.git
    $ cd UID.js
    $ npm install
    ```

3. Build and Minify

    `$ npm run build`

4. Test

    `$ npm run test`

5. Lint

    `$ npm run lint`


