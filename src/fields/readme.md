# Input

This is an `Accessible Compound Component`, since it is made of 2 components

The Wrapper is the `Field`, which holds the `label+input`

## General

- The unique id shared by both Label and Input when wrapped by Field, allows screenreaders to correctly read the labels
- If Lable or Input is not wrapped by Field, then id is undefined

## Things to Investigate Furthur

- Why is it not necessary to do a JSX children pass through for the label tag `return <label ref={ref} htmlFor={id} {...props}>{children}</label>`. But we had to do it for the `<button>`
  - <details>I think rendering children is probaly native behvior, maybe can skip it in button too?</details>
