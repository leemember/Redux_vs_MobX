# 🎈 Redux vs Mobx

## Redux 
> https://ko.redux.js.org/introduction/getting-started/

리덕스의 좋은점
- 단방향이다
- store 안에 있는 객체들을 state라 부른다.
- action을 dispatch 시키면서 state를 바꿔준다. (리사이클)
- dispatch 할 때마다 history가 남아서 에러를 찾아내기가 쉽다.
- action들을 미리미리 만들어놔야 좋다
- 불변성을 지키면서 작업해야 한다.

Reducer
- 새로운 객체를 만든다.
- dispatch와 reducer 사이에 끼는 것이 미들웨어(middleware)다.
-
