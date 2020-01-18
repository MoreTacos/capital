import axios from 'axios';
const capital = axios.create({
  baseURL: 'https://restcountries.eu/rest/v2/all'
});
// TEST
export default capital;
