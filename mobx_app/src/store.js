const { observable } = require("mobx");

// 📍 userStore
// 객체를 observable로 감싸줬다
const userStore = observable({
  isLoggingIn: false,
  data: null,

  // 액션이 실행되는 부분

  /**
 로그인 버튼 누르고 나서 2초 뒤에 로그인 된다.
 이 부분이 리덕스에 비해서 편한 점이다.
 리덕스에 액션에서는 유저에 딸린 액션은 유저 쪽 스토어만 변경이 가능했는데,
 몹엑스는 유저 스토어에 딸린 액션도 포스트 스토어 액션도 동시에 변경이 가능하다.
*/

  logIn(data) {
    this.isLoggingIn = true;
    setTimeout(() => {
      this.data = data;
      this.isLoggingIn = false;
      // 이렇게 postStore 데이터도 동시에 변경이 가능
      postStore.data.push(1);
    }, 2000);
  },

  // 액션이 실행되는 부분
  // 사용자 데이터를 비운다.
  logOut() {
    this.data = null;
  },
});

// 📍 postStore
const postStore = observable({
  data: [],
  addPost(data) {
    this.data.push(data);
  },
});

// 위에 객체들을 export로 내보내준다.
export { userStore, postStore };
