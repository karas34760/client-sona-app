/* eslint-disable no-unused-vars */
export interface IUser {
  address: string;
  /*   email: string;
   */
}

export interface IInitialState {
  user: string | null;
  isLoading: boolean;
}

export interface ITokens {
  accessToken: string;
  refreshToken: string;
}

export interface IAccessToken {
  accessToken: string;
}
