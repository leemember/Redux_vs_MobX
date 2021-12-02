# MOBX (상태관리)

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

## 📍 observable 이란?

- 객체 state를 observable로 감싸는 것이다.

```
const state = observable({
  compA: "a",
  compB: 12,
  compC: null,
});
```

## 📍runInAction 이란 ?

- 이 밑에 3개가 하나의 액션으로 묶이게 된다.
  runInAction을 2번 실행하면 autorun도 2번 실행된다.

runInAction(() => {
state.compA = "B";
state.compB = "C";
state.compC = "D";
});

## 📍autorun 이란 ?

- 값이 변경 될 때마다 변경 된 것을 감지해주는 역할 ! observable의 MOBX state가 변경될 때마다 autorun 콜백 함수가 실행된다.

```
autorun(() => {
  console.log("Changed");
});
```
