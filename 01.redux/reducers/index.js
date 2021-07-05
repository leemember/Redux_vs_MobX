const { combineReducers } = require("redux");
const userReducer = require("./user");
const postReducer = require("./post");
// require가 익숙하지 않을텐데 사실상 이게 정통이다.

module.exports = combineReducers({
  user: userReducer,
  posts: postReducer,
});

/*
앞에 user와 posts는 리덕스에 이 객체 이름을 따라가면 된다.
const initialState = {
  💨user: null,
  💨posts: [],
};
*/
