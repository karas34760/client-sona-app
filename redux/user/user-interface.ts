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
  access_token: string;
  refresh_token: string;
}
