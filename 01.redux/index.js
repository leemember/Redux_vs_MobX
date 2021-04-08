const { createStore } = require('redux');
const reducer = () => {};
const initialState = {
  compA:'a',
  compB:12,
  compC:null,
}

const store = createStore(reducer);

console.log(store.getState());
