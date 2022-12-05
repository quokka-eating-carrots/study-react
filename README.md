# study-react

## webpack과 babel 설치하기
```
$ npm i -D webpack-cli
$ npm i -D webpack-dev-server
$ npm i -D babel-loader
$ npm i -D @babel/core @babel/preset-env @babel/preset-react
$ npm i -D html-webpack-plugin
```

## `webpack.config.js` 기본적인 템플릿
```javascript
module.exports = {
  mode: '',
  entry: '',
  output: {

  },
  module: {

  },
  plugins: [

  ]
}
```

## @jsx
[JSX](https://ko.reactjs.org/docs/introducing-jsx.html)

`babel/preset-react`를 통해서 markup 구조를 읽어 들일 수 있다.
[babel Try it out](https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=Q&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.20.6&externalPlugins=&assumptions=%7B%7D) 사이트를 통해서 babel이 변역한 내용을 보여 준다. 아래 내용을 확인해 보자.

```javascript
const vdom2 = /* html */ 
<p>
  <h1>React 만들기</h1>
  <ul>
    <li style="color: red">첫 번째 아이템</li>
    <li style="color: green">두 번째 아이템</li>
    <li style="color: blue">세 번째 아이템</li>
  </ul>
</p>
```

```javascript
"use strict";

const vdom2 =
/*#__PURE__*/
/* html */
React.createElement("p", null, /*#__PURE__*/React.createElement("h1", null, "React \uB9CC\uB4E4\uAE30"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", {
  style: "color: red"
}, "\uCCAB \uBC88\uC9F8 \uC544\uC774\uD15C"), /*#__PURE__*/React.createElement("li", {
  style: "color: green"
}, "\uB450 \uBC88\uC9F8 \uC544\uC774\uD15C"), /*#__PURE__*/React.createElement("li", {
  style: "color: blue"
}, "\uC138 \uBC88\uC9F8 \uC544\uC774\uD15C")));
```

여기서 보면 `React.createElement` 함수의 인자로 태그, props, children을 받는 것을 볼 수 있다.

js 코드 상단에 `/* @jsx createElement */` 라고 입력을 해 주면 기존에 `React.createElement` 였던 것이 앞에 `React.`는 사라진 것을 볼 수 있다. 

## 함수 컴포넌트
jsx 문법의 태그에 이름이 대문자로 시작되면 문자열로 취급하지 않고 자바스크립트 값으로 취급한다. 그 값은 무조건 함수여야 한다.