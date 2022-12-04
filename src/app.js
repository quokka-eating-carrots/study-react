import { createDom, render } from './react.js'
const vdom = {
  tag: 'p',
  props: {},
  children: [
    {
      tag: 'h1',
      props: {},
      children: [
        "React 만들기"
      ],
    },
    {
      tag: 'ul',
      props: {},
      children: [
        {
          tag: 'li',
          props: {
            style: "color: red"
          },
          children: ["첫 번째"]
        },
        {
          tag: 'li',
          props: {
            style: "color: orange"
          },
          children: ["두 번째"]
        },
        {
          tag: 'li',
          props: {
            style: "color: yellow"
          },
          children: ["세 번째"]
        }
      ]
    }
  ],
}

render(vdom, document.querySelector('#root'))