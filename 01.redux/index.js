const { createStore } = require("redux");
const reducer = () => {};
const initialState = {
  compA: "a",
  compB: 12,
  compC: null,
};

const store = createStore(reducer, initialState);

console.log(store.getState());

//액션 = 액션은 그냥 객체다
const changeCompA = (data) => {
  return {
    type: "CHANGE_COMP_A",
    data,
  };
};

store.dispatch(changeCompA("b"));
