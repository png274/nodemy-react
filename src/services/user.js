import axios from 'axios';
const url = 'https://todo-nodemy.herokuapp.com/user'
// Cache
let data = null;

export const getCharacter = () => {
  if (data) {
    return data;
  }
  return fetch("https://swapi.dev/api/people").then(resp => resp.json()).then((dat) => {
    data = dat;
    return dat
  });
}


export const login = (payload) => {
  return axios.post(url + '/login', payload).then(resp => resp.data);
}
/**
 *  https://randomuser.me/api/?results=50
 * Query string

  key=value&key01=value01&key02=value02
 */