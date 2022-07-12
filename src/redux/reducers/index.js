import { combineReducers } from 'redux';
import counterReduser from './counterReducer';
import news from './news';

const reducer = combineReducers({
  counter: counterReduser,
  news,
});

export default reducer;
