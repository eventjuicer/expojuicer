import { fetchUtils } from 'react-admin';
// import get from 'lodash/get';
import { getToken } from '../helpers';

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }

  const token = getToken();
  options.headers.set('x-token', `${token}`);
  options.headers.set('x-basehost', `${process.env.REACT_APP_BASEHOST}`);
  return fetchUtils.fetchJson(url, options);
};


export default httpClient;

