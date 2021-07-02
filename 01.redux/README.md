## 🧾 리덕스 폴더 구조

기존에 한 파일(index.js)에 작업했던 코드 중에

### 🎈 리듀서

```
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
      };
    default:
      return prevState;
  }
};
```

이 부분은 reducer라는 파일에다가 넣는다. 왜냐하면 코드들이 난무하게 길어지다보면 가독성도 떨어지고 복잡하기 때문에 파일들을 하나씩 분리해주는 것이 바람직하다. 그리고 이렇게 코드들을 쪼개서 파일에다 관리할 수 있는 것은 리듀서가 바로 `순수함수`이기 때문에 가능한 일이다.

<br>

### 🎈 액션

```
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
```

액션도 이런식으로 action.js 를 만들어서 관리해주면 된다.
module.export 위에 내용들은 전부 통합해서 액션 크리에이터라고 칭하고 return 안에 들어있는 내용물들은 객체라고 칭한다.

### 폴더 구조

리듀서와 액션은 작업을 하다보면 점점 많아질 수도 있는 부분이다. 그래서 이것들도 코드줄이 길어지는 것을 방지하기 위해서 리듀서와 액션의 별도로 디렉토리를 만들어서 관리해 주는 것이 작업하기에 훨씬 좋다.

그러므로 action들은 `actions`라는 폴더를 만들어 관리하면 되고, reducer는 `reducers`라는 폴더를 만들어 관리해주면 된다. 그리고 대표적인 애들은 index.js로 해준다.

### 액션쪼개기

```
//내가 기존 state를 어떻게 바꾸고싶다. 이것만 생각해서 하면 쉽다.
//로그인하면 데이터를 불러와줘야하고, 로그아웃일 경우에는 데이터가 필요없다.

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
```

여기서 액션들을 보았을 때, `login & logout` 그리고 `addPost` 는 애초에 봤을 때 결이 다르다는 것을 느낄 수 있다. 그러면 미래를 대비해서 `login & logout`는 `user.js` 파일을 만들어서 관리하고 `addPost`는 `post.js` 파일을 만들어서 코드들을 관리해주면 된다.

분리하는 기준은 `데이터`중심이다. 리덕스 코드를 살펴보면

```
const initialState = {
  user: null,
  posts: [],
};
```

이렇게 이니셜 state 초기값을 지정해 두는데 여기서 추가로 확장 시킨다면 임의로 봤을 때

```
const initialState = {
  user: null,
  isLoggingIn: true,
  posts: [],
  comments:[],
  favorites:[],
  history:[],
  likes:[],
  followers:[],
};
```

이렇게 수많은 데이터들이 나올 수 있다. 그러면 여기서 user라는 액션따로, posts라는 액션따로 그외에 comments, favorites 등등 첫 번째 댑스에 있는 것들로 액션들을 관리해주면 된다. `isLoggingIn`은 로그인 중인지 아닌지 여부 체크하는 것인데 이것은 나중에 user랑 묶어주면 좋을 것 같다. 그러니 `isLoggingIn`은 별도로 액션을 분리하지 않아도 된다. 왜냐하면 user에 종속되는 것이기 때문이다. 이 구조를 잘못 잡으면 그 아래에 속하는 액션과 리듀서가 모두 엉켜버리기 때문에 이 구조를 가장 잘 잡아줘야 한다.

```
const initialState = {
    user: {
        isLoggingIn: false,
        data: null,
    },
    👉 user는 위에처럼 해주면된다. data는 두 번째 속성이 되는 것이다.

    posts: [],
    comments:[],
    favorites:[],
    history:[],
    likes:[],
    followers:[],
};

```

그리고 덩치가 커질 것 같은 것들은 [] 이렇게 배열로 분리해준다.

### 리듀서 쪼개기
