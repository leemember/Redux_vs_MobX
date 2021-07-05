const { createStore, applyMiddleware } = require("redux");
const reducer = require("./reducers");
const { addPost } = require("./actions/post");
const { logIn, logOut } = require("./actions/user");

const initialState = {
  user: {
    isLoggingIn: true,
    data: null,
  },
  posts: [],
  comments: [],
  favorites: [],
  history: [],
  likes: [],
  followers: [],
};

//처음보는 애니까 firstMiddleware로 지정했다.
//그리고 3단 고차함수가 생긴다. (store) => (next) => (action)
//매개변수가 각각 하나씩 3개나 들어간다. 처음 보면 당황할텐데
/*
fucntion firstMiddlewrae(store) {

  return function (next) {

    return function (action) {

    }
  }
}

이렇게 함수들이 중첩된 것이라고 보면 된다.
*/
const firstMiddleware = (store) => (dispatch) => (action) => {
  console.log("액션 로깅", action); //2.기능 추가가 된거다.
  //디스패치 하기 전에는 여기다가 기능을 넣는다
  dispatch(action); // 1.기본 기능 전에
  //디스패치 한 후에다가는 여기다가 기능을 넣는다
  console.log("액션 끝");
};

// const enhancer = compose(applyMiddleware(), devtool);
//여기서 사용한 compose는 combineReducer와 같은 합성해주는 역할을 한다.
//만약 devtools랑 여러가지를 같이 사용할 때 compose를 사용하면 좋다.
//하지만 우리는 devtools를 사용하지 않을 것이기 때문에
const enhancer = applyMiddleware(firstMiddleware);
//이렇게 까지만 해주어도 된다. 그리고 미들웨어는 디스패치와 리듀서 사이에 있는 것을 뜻한다.

const store = createStore(reducer, initialState, enhancer);
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
