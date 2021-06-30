const { createStore } = require("redux");

//리듀서
const reducer = (prevState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...prevState,
        user: action.data,
      };
    case "LOG_OUT":
      return {
        ...prevState,
        user: null,
      };
    case "ADD_POST":
      return {
        ...prevState,
        posts: [...prevState.posts, action.data],
        //이것도 마찬가지로 첫 번째는 기존 데이터를 두 번째는 새로운 데이터
      };
    default:
      return prevState;
  }
};
//위 리듀서랑 밑에 액션은 짝궁이다.
//----------------------------------------------

const initialState = {
  user: null,
  posts: [],
};

// 💫 예제
// const nextState = {
//   ...initialState,
//   posts: [action.data],
// };

// const nextState = {
//   ...initialState,
//   posts: [...initialState.posts, action.data],
//   //새로운 데이터는 action.data로 처리하고
//   //기존에 데이터는 스프레드를 사용한다.
//   // [...initialState.post, action.data]
//   //        기존 데이터       뉴 데이터
// };

const store = createStore(reducer, initialState);
store.subscribe(() => {
  console.log("changed");
});

console.log("1st", store.getState());

//액션
const logIn = (data) => {
  return {
    type: "LOG_IN",
    data,
  };
};

const logOut = () => {
  return {
    type: "LOG_OUT",
  };
};

//내가 기존 state를 어떻게 바꾸고싶다. 이것만 생각해서 하면 쉽다.
//로그인하면 데이터를 불러와줘야하고, 로그아웃일 경우에는 데이터가 필요없다.

const addPost = (data) => {
  return {
    type: "ADD_POST",
    data,
  };
};

//절취선을 기준으로 위에부분은 미리 만들어놔야 되는 부분이고
//----------------------------------------------
// 밑에 부분은 리액트에서 실행하는 것이다.
// 디스패치(액션 발생시켜준다) 스토어 공간

//로그인 했을 때 사용자 데이터 넣어주기
store.dispatch(
  logIn({
    id: 1,
    name: "hyunju",
    admin: true,
  })
);
console.log("2nd", store.getState());

store.dispatch(
  addPost({
    userId: 1,
    id: 1,
    content: "안녕하세요 리덕스",
  })
);
console.log("3nd", store.getState());

store.dispatch(
  addPost({
    userId: 1,
    id: 1,
    content: "두번재 게시글입니다. 리덕스",
  })
);
console.log("4nd", store.getState());

store.dispatch(logOut());
console.log("5nd", store.getState());
