import {PEOPLE_ACTION} from '../../actions/license';

const peopleReducer = (state = [], action) => {
  switch (action.type) {
    case `${PEOPLE_ACTION.GET}_FULFILLED`:
      return action.payload;
    default:
      return state;
  }
};

export default peopleReducer;
