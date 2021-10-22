import { createStore } from 'redux';
import reducer from './reduser.js'


const store = createStore(reducer);

export default store;
