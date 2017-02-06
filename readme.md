[![npm](https://img.shields.io/npm/dt/express.svg?style=flat-square)](https://www.npmjs.com/package/childnode-remove)

# ChildNode.remove()

## Installation

### NPM

```bash
npm install childnode-remove
```

### Manual download

The package is also available as a UMD module (compatible with AMD, CommonJS and exposing a global variable `ChildNodeRemove`) in `dist/childnode-remove.js` and `dist/childnode-remove.min.js`.

## Usage

**CommonJS**:

```javascript
require('childnode-remove').polyfill();
```

**Global**:

```html
<script src="<directory>/childnode-remove.min.js"></script>
<script>
  window.ChildNodeRemove.polyfill();
</script>
```

## License

The MIT License (MIT)

Copyright (c) 2017 Jap Mul

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
