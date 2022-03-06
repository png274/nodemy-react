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


/**
 *  https://randomuser.me/api/?results=50
 * Query string

  key=value&key01=value01&key02=value02
 */