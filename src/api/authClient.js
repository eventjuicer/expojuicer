import {
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_CHECK,
  AUTH_ERROR,
  AUTH_GET_PERMISSIONS
} from 'react-admin';
import { fetchUtils } from 'react-admin';

import {
  validateToken,
  clearUserData,
  refreshUserData,
  getToken,
  checkAccessFor
} from '../helpers';

export default (type, params) => {
  /*

err AUTH_CHECK {resource: "visitors", route: "list"}
err AUTH_GET_PERMISSIONS {record: undefined, resource: undefined}
err AUTH_LOGOUT undefined

AUTH_ERROR Error: Unauthorized
    at new HttpError (HttpError.js:64)
    at fetch.js:63
    at <anonymous>

    console.log(type, params);


*/


  if (type === AUTH_ERROR) {
    const { status } = params;

    if (status === 401 || status === 403) {
      clearUserData();
      return Promise.reject('AUTH_ERROR error');
    }
    return Promise.resolve();
  }

  if (type === AUTH_CHECK) {
    //const { resource, route } = params;
   // refreshUserData();
    return getToken() ? Promise.resolve() : Promise.reject();
  }

  if (type === AUTH_GET_PERMISSIONS) {
    return checkAccessFor("/?noperms");
  }

  if (type === AUTH_LOGIN) {
    
    clearUserData();

    const { token } = params;

    if (token !== undefined && validateToken(token)) {
      return refreshUserData(token);
    } else {
      const options = {
        headers: new Headers({
          Accept: 'application/json',
          'x-token': `${token}`
        })
      };

      options.method = 'POST';
      options.body = JSON.stringify(params);

      return fetchUtils
        .fetchJson(
          `${process.env.REACT_APP_API_ENDPOINT}/authenticate`,
          options
        )
        .then(({ json }) => {
          console.log(json);
          //storeUserData(token, response);
          //localStorage.setItem('token', token);
          //return Promise.resolve();
          return Promise.reject('auth.checkEmail');
        });
    }
  }

  if (type === AUTH_LOGOUT) {
    clearUserData();
    return Promise.resolve();
  }

  return Promise.reject('Unknown authClient method');
};
