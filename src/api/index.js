import axios from 'axios';

const getPeopleList = async () => {
  try {
    const response = axios.get('https://swapi.dev/api/people');
    console.log(response);
    return response;
  } catch (error) {
    console.log('There is and error');
  }
};

export default getPeopleList;
