# Notes

Will move this folder to different Repo

<!-- toc -->

## Resources

-[newline course](https://www.newline.co/courses/newline-guide-to-building-a-company-component-library)

### Others

- [Vid-1](https://www.youtube.com/watch?v=qSkHRVLcj6U)
- [Vid-2](https://www.youtube.com/watch?v=7Gbk4h2AYVE)

## Setup

### Storybook

Use `storybook-cli`

```bash
# inititialise
npx sb init
```

> Need to have react-dom and react as dev dependencies as well to test storybook in addition to peer dependencies

> Also requires a `README.md` file, case matters

### Prettier

Code Style and Formatting

```bash
yarn add --dev prettier
```

### ESlint

ESLint for formatting and code quality check

Need `eslint + plugins` for react, TS and conflict resolution with prettier

`eslint-config-prettier` - makes sure ESLint & Prettier don't conflict

```bash
yarn add --dev eslint eslint-config-prettier eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

## Intro

1. Following [Atomic Design Principles](https://bradfrost.com/blog/post/atomic-web-design/)

## Shared Component

1. Identify component boundaries and components themselves

2. We will learn the Shared Component Pattern
