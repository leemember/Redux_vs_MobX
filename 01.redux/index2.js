const { createStore } = require("redux");
const reducer = require("./reducer");
const { logIn, logOut, addPost } = require("./action");

const initialState = {
  user: null,
  posts: [],
};

const store = createStore(reducer, initialState);
store.subscribe(() => {
  console.log("changed");
});

console.log("1st", store.getState());

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
