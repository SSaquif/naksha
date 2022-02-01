# 🚧 Naksha 🚧

[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)

[![NPM](https://nodei.co/npm/@ssaquif/naksha.png?mini=true)](https://www.npmjs.com/package/@ssaquif/naksha)

[`Storybook WebSite`](https://ssaquif.github.io/naksha)

[`Github Repo`](https://github.com/SSaquif/naksha)

🚧 Naksha is a `Work In Progress` 🚧

Naksha is a `React Component Library` following [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) Principles, created as a hobby project.

It is my first venture into component libraries. A way for me to explore React Typescript, Design Systems, Web Accessibility among other things.

## Installation

```bash
# npm
npm i @ssaquif/naksha
# yarn
yarn add @ssaquif/naksha
```

## Usage

```js
import { Field, Button } from '@ssaquif/naksha';

function App() {
  return (
    <div className="App">
      <Field>
        <Field.Label>Name</Field.Label>
        <Field.Input />
        <Button>Click</Button>
      </Field>
    </div>
  );
}
```
