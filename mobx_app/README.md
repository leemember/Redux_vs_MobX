# ๐ฅณ MOBX Project

> Mobx๋ก ํ๋ก์ ํธ ์คํํด๋ณด์

### ์ค์นํด์ผ ๋  ํจํค์ง

```
$npm i mobx ๐ ์ํ๊ด๋ฆฌ
$npm i mobx-react ๐  Mobx ๋ react๋ฅผ ์ฐ๊ฒฐํด์ค๋ค. observer๋ฅผ ํฌํจํ๊ณ  ์๋ค. observer์ด ๋ฐ๋ ๋๋ง๋ค ์ปดํฌ๋ํธ๋ฅผ ๋ฆฌ๋ ๋๋ง ํด์ฃผ๋ ๊ฒ์ด mobx-react๋ค.
$npm i @babel/plugin-proposal-class-properties
$npm i @babel/plugin-proposal-decorators ๐  decorators๋ฅผ ์ฌ์ฉํ๊ธฐ ์ํด์
```

#### ๐ [webpack.config.js]

```
plugins: [
            "react-refresh/babel",
            ["@babel/plugin-proposal-decorators", { legacy: true }],
            ["@babel/plugin-proposal-class-properties", { loose: true }],
          ],
```

- ์ babel ์ต์ ๋ ๊ฐ์ง๋ฅผ ์ถ๊ฐํด์ผ ์๋ฌ๊ฐ ์๋๋ค.

<br />

#### ๐ [index.js]

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

- Redux ๊ฐ์ ๊ฒฝ์ฐ react๋ ์ฐ๊ฒฐํ  ๋ `Provider`๋ก ๋ฌถ์ด์ค๋ค. Mobx๋ ๋๊ฐ์ด `Provider`๋ก ๋ฌถ์ด์ค๋ ๋๋๋ฐ ๊ตณ์ด **์ํด๋ ๋๋ค๋ ์  !** ์ด์ฒ๋ผ Mobx๋ ๋ฆฌ๋์ค์ ๋นํด ์์ ๋ก์์ด ์ฅ์ ์ด๋ค.

### ๋ฐ์ฝ๋ ์ดํฐ ์ฌ์ฉ๋ฒ

- ์ผ๋ฐ ๊ฐ์ฒด ๋ฆฌํฐ๋ด์ผ ๊ฒฝ์ฐ ๋ฐ์ฝ๋ ์ดํฐ๋ฅผ ์ฌ์ฉํ  ์ ์๋ค.

๐ ์ด๋ฐ ๊ฒฝ์ฐ๊ฐ ์ผ๋ฐ ๊ฐ์ฒด ๋ฆฌํฐ๋ด์ด๋ค. ์ด๋ด ๋๋ `@observable` ์ด๋ ๊ฒ ์ฌ์ฉํ๋ ๊ฒ๋ณด๋ค, observable ๋ก ๊ฐ์ธ์ฃผ๋ ๊ฒ์ด ์ข๋ค.

```
const userStore = ๐observable({
  isLoggingIn: false,
  data: null,

  // ์ก์์ด ์คํ๋๋ ๋ถ๋ถ
  logIn(data) {
    this.isLoggingIn = true;
    setTimeout(() => {
      this.data = data;
      this.isLoggingIn = false;
      postStore.data.push(1);
    }, 2000);
  },

  // ์ก์์ด ์คํ๋๋ ๋ถ๋ถ
  logOut() {
    this.data = null;
  },
});
```

๋๋

```
const postStore = ๐observable({
  data: [],
  addPost(data) {
    this.data.push(data);
  },
});
```
