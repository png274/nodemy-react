import axios from "axios";

const url = 'http://localhost:3000';

export const getTask = () => {
  const token = localStorage.getItem('authToken');
  return axios.get(url + '/tasks', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(resp => resp.data);
}

/**
 2 loai api public API va private API
 public: starwar api, jsonholder api.
 private: co 1 co che de bao mat
 * 
 */