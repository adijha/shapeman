
import peopleReducer from './peopleReducer';
import {combineReducers} from 'redux';

const allReducer = combineReducers({
  people: peopleReducer,
});

export default allReducer;
