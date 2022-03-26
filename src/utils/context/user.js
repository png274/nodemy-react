import React from 'react';

const userContext = React.createContext({
  username: 'User name',
  isLogin: false,
  token: '',
  listCharacter: []
});

export default userContext;