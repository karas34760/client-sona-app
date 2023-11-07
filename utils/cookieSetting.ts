/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import Cookies from 'js-cookie';

// Get Access Token
export const getAccessToken = () => {
  const accessToken = Cookies.get(EnumTokens.ACCESSTOKEN);
  return accessToken || null;
};

/// Get user from local if exist
export const getUserFromStorage = () => {
  return JSON.parse(localStorage.getItem('user') || '{}');
};

/* export const saveTokensStorage = (data: ITokens) => {
  Cookies.set(EnumTokens.ACCESSTOKEN, data.token);
  Cookies.set(EnumTokens.REFRESHTOKEN, data.refresh_token);
}; */

export const removeFromStorage = () => {
  Cookies.remove(EnumTokens.ACCESSTOKEN);
  Cookies.remove(EnumTokens.REFRESHTOKEN);
  localStorage.removeItem('user');
};

// Save Data User
/* export const saveUserToStorage = (data: ITokens) => {
  localStorage.setItem('user', JSON.stringify(data));
};
 */
export enum EnumTokens {
  ACCESSTOKEN = 'access_token',
  REFRESHTOKEN = 'refresh_token',
}
