import React from 'react';
import ReactDOM from 'react-dom';
import App from './componants/App';
import axios from 'axios';
import './App.scss';
const val = axios.create({
  baseURL: 'https://restcountries.eu/rest/v2/all'
});

ReactDOM.render(<App />, document.querySelector('#root'));
