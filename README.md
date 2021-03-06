# ๐ Redux vs Mobx

## Redux

> https://ko.redux.js.org/introduction/getting-started/

### ๋ฆฌ๋์ค์ ์ข์์ 

- ๋จ๋ฐฉํฅ์ด๋ค
- store ์์ ์๋ ๊ฐ์ฒด๋ค์ state๋ผ ๋ถ๋ฅธ๋ค.
- action์ dispatch ์ํค๋ฉด์ state๋ฅผ ๋ฐ๊ฟ์ค๋ค. (๋ฆฌ์ฌ์ดํด)
- dispatch ํ  ๋๋ง๋ค history๊ฐ ๋จ์์ ์๋ฌ๋ฅผ ์ฐพ์๋ด๊ธฐ๊ฐ ์ฝ๋ค.
- action๋ค์ ๋ฏธ๋ฆฌ๋ฏธ๋ฆฌ ๋ง๋ค์ด๋์ผ ์ข๋ค
- ๋ถ๋ณ์ฑ์ ์งํค๋ฉด์ ์์ํด์ผ ํ๋ค.

### Reducer

- ์๋ก์ด ๊ฐ์ฒด๋ฅผ ๋ง๋ ๋ค.
- dispatch์ reducer ์ฌ์ด์ ๋ผ๋ ๊ฒ์ด ๋ฏธ๋ค์จ์ด(middleware)๋ค.

### ๋ฆฌ๋์ค ์ฌ์ฉํ๊ธฐ ์ ํฉํ ์ด์ 

- ๊ณ์ํด์ ๋ฐ๋๋ ์๋นํ ์์ ๋ฐ์ดํฐ๊ฐ ์๋ค
- ์ํ๋ฅผ ์ํ ๋จ ํ๋์ ๊ทผ์์ด ํ์ํ๋ค
- ์ต์์ ์ปดํฌ๋ํธ๊ฐ ๋ชจ๋  ์ํ๋ฅผ ๊ฐ์ง๊ณ  ์๋ ๊ฒ์ ๋ ์ด์ ์ ์ ํ์ง ์๋ค

```
switch (
    action.type //โคaction.type ์์
  ) {
    //์ก์์ด ๋ง์์ง๋ฉด case๋ค์ด ์ ์  ๋ง์์ง๋ค.
    case "CHANGE_COMP_A":
      return {
        compA: action.data, //โคaction.data ์๋
        compB: 12,
        compC: null,
      };
    case "CHANGE_COMP_B":
      return {
        compA: "a",
        compB: action.data,
        compC: null,
      };
  }
};
```

์ฌ๊ธฐ์ ๋ปํ๋ type๊ณผ data๋

```

//์ก์ = ์ก์์ ๊ทธ๋ฅ ๊ฐ์ฒด๋ค
const changeCompA = (data) => {
  //โค ์ด๊ฒ์๋๋ค.
  return {
    type: "CHANGE_COMP_A",
    data,
  };
};

store.dispatch(changeCompA("b"));
```

์ด๊ฒ์ ์๋ฏธํ๋ค.

<br>

```
const initialState = {
  compA: "a",
  compB: 12,
  compC: null,
};

const nextState = {
  compA: action.data,
  compB: 12,
  compC: null,
};
```

์ค๋ณต๋ง ์ ๊ฑฐํ๋ฉด ๋์์ธํจํด์ ๋ฐ๋ก ๊ณต๋ถํ  ํ์๊ฐ ์๋ค. ์ง๊ธ ์ฌ๊ธฐ์
์ค๋ณต ์ ๊ฑฐํ๋ ๊ฐ์ฅ ์ฌ์ด๋ฐฉ๋ฒ์ ๋ฐ๋ก ์คํ๋ ๋ ๋ฐฉ์์ด๋ค.

```
const initialState = {
  compA: "a",
  compB: 12,
  compC: null,
};

const nextState = {
  ...initialState,
  compA: action.data,
};
```

์๋ก์ด ๊ฐ์ฒด๋ ์ ์งํ๋ฉด์ ๋ฐ๊พธ๊ณ ์ถ์ ๊ฒ๋ง ์ - ๐ฆ

```
const reducer = (prevState, action) => {
  switch (
    action.type //โคaction.type ์์
  ) {
    //์ก์์ด ๋ง์์ง๋ฉด case๋ค์ด ์ ์  ๋ง์์ง๋ค.
    case "CHANGE_COMP_A":
      return {
        ...prevState,
        compA: action.data, //โคaction.data ์๋
      };
    case "CHANGE_COMP_B":
      return {
        ...prevState,
        compB: action.data,
      };
    case "CHANGE_COMP_C":
      return {
        ...prevState,
        compC: action.data,
      };
  }
};

```

์ ์ก์๋ค๋ ์ค๋ณต๋๋ ๋ถ๋ถ์ ...์คํ๋ ๋๋ฅผ ์ฌ์ฉํ์ฌ prevState ๋งค๊ฐ๋ณ์๋ก ๋ฟ๋ ค์คฌ๋ค.

---

## Mobx

> ์ฐธ๊ณ ์๋ฃ <br> https://medium.com/@jsh901220/mobx-%EC%B2%98%EC%9D%8C-%EC%8B%9C%EC%9E%91%ED%95%B4%EB%B3%B4%EA%B8%B0-a768f4aaa73e <br> https://ko.mobx.js.org/README.html
