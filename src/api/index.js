import axios from 'axios';

const getPeopleList = async () => {
  try {
    const response = await axios.get('https://swapi.dev/api/people');
    // console.log('......................................................................',response.data.results,'....................................');
    return response.data.results;
  } catch (error) {
    console.log('There is and error');
  }
};

export default getPeopleList;
