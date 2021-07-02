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

module.export = {
  logIn,
  logOut,
  addPost,
};
