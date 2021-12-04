# 🥳 MOBX Project

> Mobx로 프로젝트 실행해보자

### 설치해야 될 패키지

```
$npm i mobx 👉 상태관리
$npm i mobx-react 👉  Mobx 랑 react를 연결해준다. observer를 포함하고 있다. observer이 바뀔 때마다 컴포넌트를 리렌더링 해주는 것이 mobx-react다.
$npm i @babel/plugin-proposal-class-properties
$npm i @babel/plugin-proposal-decorators 👉  decorators를 사용하기 위해서
```

#### 📂 [webpack.config.js]

```
plugins: [
            "react-refresh/babel",
            ["@babel/plugin-proposal-decorators", { legacy: true }],
            ["@babel/plugin-proposal-class-properties", { loose: true }],
          ],
```

- 위 babel 옵션 두 가지를 추가해야 에러가 안난다.

<br />

#### 📂 [index.js]

```
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { hot } from "react-hot-loader/root";

const Hot = hot(App);

ReactDOM.render(
  <React.StrictMode>
    <Hot />
  </React.StrictMode>,
  document.getElementById("root")
);
```

- Redux 같은 경우 react랑 연결할 때 `Provider`로 묶어준다. Mobx도 똑같이 `Provider`로 묶어줘도 되는데 굳이 **안해도 된다는 점 !** 이처럼 Mobx는 리덕스에 비해 자유로움이 장점이다.

### 데코레이터 사용법

- 일반 객체 리터럴일 경우 데코레이터를 사용할 수 없다.

📍 이런 경우가 일반 객체 리터럴이다. 이럴 떄는 `@observable` 이렇게 사용하는 것보다, observable 로 감싸주는 것이 좋다.

```
const userStore = 📍observable({
  isLoggingIn: false,
  data: null,

  // 액션이 실행되는 부분
  logIn(data) {
    this.isLoggingIn = true;
    setTimeout(() => {
      this.data = data;
      this.isLoggingIn = false;
      postStore.data.push(1);
    }, 2000);
  },

  // 액션이 실행되는 부분
  logOut() {
    this.data = null;
  },
});
```

또는

```
const postStore = 📍observable({
  data: [],
  addPost(data) {
    this.data.push(data);
  },
});
```
