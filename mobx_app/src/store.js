const { observable } = require("mobx");

// ๐ userStore
// ๊ฐ์ฒด๋ฅผ observable๋ก ๊ฐ์ธ์คฌ๋ค
const userStore = observable({
  isLoggingIn: false,
  data: null,

  // ์ก์์ด ์คํ๋๋ ๋ถ๋ถ

  /**
 ๋ก๊ทธ์ธ ๋ฒํผ ๋๋ฅด๊ณ  ๋์ 2์ด ๋ค์ ๋ก๊ทธ์ธ ๋๋ค.
 ์ด ๋ถ๋ถ์ด ๋ฆฌ๋์ค์ ๋นํด์ ํธํ ์ ์ด๋ค.
 ๋ฆฌ๋์ค์ ์ก์์์๋ ์ ์ ์ ๋ธ๋ฆฐ ์ก์์ ์ ์  ์ชฝ ์คํ ์ด๋ง ๋ณ๊ฒฝ์ด ๊ฐ๋ฅํ๋๋ฐ,
 ๋ชน์์ค๋ ์ ์  ์คํ ์ด์ ๋ธ๋ฆฐ ์ก์๋ ํฌ์คํธ ์คํ ์ด ์ก์๋ ๋์์ ๋ณ๊ฒฝ์ด ๊ฐ๋ฅํ๋ค.
*/

  logIn(data) {
    this.isLoggingIn = true;
    setTimeout(() => {
      this.data = data;
      this.isLoggingIn = false;
      // ์ด๋ ๊ฒ postStore ๋ฐ์ดํฐ๋ ๋์์ ๋ณ๊ฒฝ์ด ๊ฐ๋ฅ
      postStore.data.push(1);
    }, 2000);
  },

  // ์ก์์ด ์คํ๋๋ ๋ถ๋ถ
  // ์ฌ์ฉ์ ๋ฐ์ดํฐ๋ฅผ ๋น์ด๋ค.
  logOut() {
    this.data = null;
  },
});

// ๐ postStore
const postStore = observable({
  data: [],
  addPost(data) {
    this.data.push(data);
  },
});

// ์์ ๊ฐ์ฒด๋ค์ export๋ก ๋ด๋ณด๋ด์ค๋ค.
export { userStore, postStore };
