# 🍿 MOBX (상태관리)

> `📍 MOBX 특징` <br />immer가 기본적으로 적용되어있다. <br />리덕스와 다르게 추가되는 부분은 observable이다. <br /> https://mobx.js.org/README.html

 <br />

👇 이러한 state를 observable 이라는 객체가 감싸고 있다.
그럼 state를 편하게 바꿀 때마다 observable이 observer 한테
'야 나 지금 바꼈어' 라고 알려준다.

```
{
  name : 'zero',
  age: 26,
  married : false
}
```

그리고 `MOBX`는 이러한 state가 있으면 이를 바꾸는 `액션`이 있다. 그럼 액션이 적용된다.
리듀서, 디스패치 이런 과정 없다. 액션은 함수일 필요도 없다. **그냥 객체를 바꾸기만 하면 된다.** 👏

 <br />

### 🗣 예제

```
state.name = 'nero'
```

이게 바로 액션이다. 그럼 알아서 리액트에 화면이 바뀐다.

 <br />

## 📍 observable 이란?

- 객체 state를 observable로 감싸는 것이다.

```
const state = observable({
  compA: "a",
  compB: 12,
  compC: null,
});
```

 <br />

## 📍runInAction 이란 ?

- 이 밑에 3개가 하나의 액션으로 묶이게 된다.
  runInAction을 2번 실행하면 autorun도 2번 실행된다.

runInAction(() => {
state.compA = "B";
state.compB = "C";
state.compC = "D";
});

 <br />

## 📍autorun 이란 ?

- 값이 변경 될 때마다 변경 된 것을 감지해주는 역할 ! observable의 MOBX state가 변경될 때마다 autorun 콜백 함수가 실행된다.

```
autorun(() => {
  console.log("Changed");
});
```

 <br />

리액트에서는 `store.subscribe`를 `react-redux`를 내장하고 있는 것처럼 mobx에서는 `observer`를 내장하고 있다.

 <br />

## 📍action 이란 ?

- runInAction와 유사관계가 있다. runInAction 같은 경우 바로 실행되지만 action은 함수처럼 만들어서 따로 사용하고 싶을 때 사용한다.

```
const change = action(() => {
  state.compA = "안녕하세요";
  state.compB = 30;
  state.compC = "반갑습니다";
});

change();
```

 <br />

## 📍reaction 이란 ?

- 첫 번째 함수에서 리턴하는 값이 바뀌었을 때 실행된다. 두 번째 함수에서 실행된다. 두 번째 함수에서는 첫 번째 인수에는 출력하고 싶은 텍스트를 작성하고, 두 번째 인수는 바뀐 값의 state 값을 넣어주면 된다.

```
reaction(
  () => {
    return state.compB;
  },
  () => {
    console.log("reaction", state.compB);
  }
);
```
