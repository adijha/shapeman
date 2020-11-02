import {PEOPLE_ACTION} from '../../actions/peopleAction';

const peopleReducer = (state = [], action) => {
  switch (action.type) {
    case `${PEOPLE_ACTION.GET}_FULFILLED`:
      // console.log('fff');
      // console.log(action.payload)
      return action.payload;
    default:
      return state;
  }
};

export default peopleReducer;
