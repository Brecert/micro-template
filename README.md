# micro-template

A very simple and small templating tool.

Usage:
```ts
import * as template from './replace.ts'

template.replace('Hello {name}!', { name: 'bree' })
// => "Hello bree!"
```