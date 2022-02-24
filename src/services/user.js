export const getCharacter =() => {
  return fetch("https://swapi.dev/api/people").then(resp => resp.json());
}