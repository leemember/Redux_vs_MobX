//❤ 개념설명
const { createStore } = require("redux");

const reducer = (prevState, action) => {
  // 리듀서의 역할 : 새로운 state 만들어주기
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
    default:
      // default는 오타 났을 때 문제가 일어난다.
      return prevState;
  }
};

const initialState = {
  compA: "a",
  compB: 12,
  compC: null,
};

// const nextState = {
//   ...initialState,
//   compA: action.data,
// };

const store = createStore(reducer, initialState);
store.subscribe(() => {
  // react-redux 안에 들어있다.
  console.log("change"); // 화면 바꿔주는 코드
});

console.log("1st", store.getState());

// //액션 = 액션은 그냥 객체다
const changeCompA = (data) => {
  //❤ 이것입니다.
  return {
    type: "CHANGE_COMP_A",
    data,
  };
};

store.dispatch(changeCompA("b"));

// console.log();
