const { createStore } = require("redux");
const reducer = (prevState, action) => {
  //불변성은 히스토리 기능과 추적가능하게 하기위해

  switch (
    action.type //❤action.type 얘와
  ) {
    //액션이 많아지면 case들이 점점 많아진다.
    case "CHANGE_COMP_A":
      return {
        ...prevState,
        compA: action.data, //❤action.data 얘는
      };
    case "CHANGE_COMP_B":
      return {
        ...prevState,
        compB: action.data,
      };
    case "CHANGE_COMP_C":
      return {
        ...prevState,
        compC: action.data,
      };
  }
};

const initialState = {
  compA: "a",
  compB: 12,
  compC: null,
};

const nextState = {
  ...initialState,
  compA: action.data,
};

const store = createStore(reducer, initialState);

console.log(store.getState());

//액션 = 액션은 그냥 객체다
const changeCompA = (data) => {
  //❤ 이것입니다.
  return {
    type: "CHANGE_COMP_A",
    data,
  };
};

store.dispatch(changeCompA("b"));

console.log();
