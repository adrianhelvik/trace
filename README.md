# @adrianhelvik/trace

## Installing
```bash
npm install --save @adrianhelvik/trace
yarn add @adrianhelvik/trace
```

## Example usage
```javascript
import trace from '@adrianhelvik/trace'

const source =
`hello there
how do you do?
I'm fine`

const index = 16

const message = 'Hello world'

console.log(trace(source, index, message))

```

This prints:

```
2 | how do you do?
        ^ [2:5] Hello world
```

## Licence: MIT
See LICENCE.md
