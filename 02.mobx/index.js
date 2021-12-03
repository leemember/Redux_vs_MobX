const { observable, autorun, runInAction, reaction, action } = require("mobx");

const userState = observable({
  isLoggingIn: true,
  data: null,
});

const postState = observable([]);

// 새로운 글 하나 쓰고 싶을 경우 push 해준다.
postState.push({ id: 1, content: "안녕하세요" });

// 사용자 데이터
userState.data = {
  id: 1,
  nickname: "leehyunju",
};

// 👆 액션이 없어서 좋다.
// 하지만 나는 굳이 액션으로 묶어주고 싶다! 하면 runInAction으로 묶어주면된다.

runInAction(() => {
  postState.push({ id: 1, content: "안녕하세요" });

  userState.data = {
    id: 1,
    nickname: "leehyunju",
  };
});
// 이런 식으로 가능하다.
// 리덕스로 게시글을 쓰면서 동시에 로그인도 할 수 있는 액션이 가능할까 ??
// 답은 안된다.
//
//--------------------------

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

//-------------------------------
// 클래스 형식의 몹액스
// 클래스 쓰는 이유 ? new 할려고 사용한다.

// class UserStore {
//   state = observable({
//     name: "leehyunju",
//     age: 26,
//   });

//   @action
//   changeName(value) {
//     this.state.name = value;
//   }
// }

// 새로운 객체들을 new로 찍어내려고 사용한다.
const user1 = new UserStore(); // 한 번만 사용하는 것을 싱글턴이라고 부른다.

// 클래스보다 더 간단한 방식
// 클래스처럼 할 바에는 싱글턴 방식으로 하는 것이 좋다.
// ⭐️객체 리터럴 방식⭐️
const userState = observable({
  name: "leehyunju",
  age: 27,
  changeName(value) {
    this.name = value;
  },
});
