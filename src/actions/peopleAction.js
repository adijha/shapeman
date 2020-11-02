import Api from '../api';

export const PEOPLE_ACTION = {
  GET: 'GET_PEOPLE',
};

export const getPeople = () => ({
  type: PEOPLE_ACTION.GET,
  payload: Api.getPeopleList(),
});
