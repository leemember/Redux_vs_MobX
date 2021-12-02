const { observable, autorun, runInAction, reaction, action } = require("mobx");

// 📍 중앙에서 관리해주는 state
const state = observable({
  compA: "a",
  compB: 12,
  compC: null,
});

// 📍autorun 이란 ? ( 변경 될 때마다 변경 된 것을 감지해주는 역할 )
// observable의 몹액스 state가 변경될 때마다 autorun 콜백함수가 실행된다.
autorun(() => {
  console.log("Changed");
});

// mobx는 상태를 변경할 때 이처럼 정말 간단하게 변경이 가능하다.
// 기존에 compA: "a"를 b로 바꾸고 싶다면 아래와 같이 작성해주면 된다.
// ⭐️ state.객체 = 바꿀값; ⭐️
// 그럼 이거 하나 하나가 전부 액션이 되는 것이다.

// runInAction과 autorun은 감지기 역할이라면
// autorun은 바뀌기만 하면 바로 실행된다.

// 📍 reaction은 ?
// 첫 번째 함수에서 리턴하는 값이 바뀌었을 때만 실행된다.

reaction(
  () => {
    return state.compB;
  },
  () => {
    console.log("reaction", state.compB);
  }
);

// 📍 action은 runInAction과 유사 관계가 있다.
// runInAction 같은 경우 바로 실행된다.
// action은 함수처럼 만들어서 따로 사용하고 싶을 때 사용한다.
const change = action(() => {
  state.compA = "안녕하세요";
  state.compB = 30;
  state.compC = "반갑습니다";
});

change();

// 📍runInAction 이란 ?
// 이 밑에 3개가 하나의 액션으로 묶이게 된다.
// runInAction을 2번 실행하면 autorun도 2번 실행된다.

runInAction(() => {
  state.compA = "B";
  state.compB = 25;
  state.compC = "J";
});

/*
🧡 리덕스와 MOBX와 비교해보자면

const store = createStore(reducer, initialState);

이렇게 리덕스에서는 store를 만들어줬다.
리덕스는 리듀서가 필수이기 때문에 리듀서를 연결하기 위해서 store를 만든 것이다.
하지만 MOBX 에서는 observable로 감싸기만 하면 된다.
*/
