/* eslint-disable no-unused-vars */
import { gql } from '@apollo/client';
export const CHECK_ACCESS_TOKEN = gql`
  query CheckAccessToken {
    checkAccessToken
  }
`;

export const REFRESH_ACCESS_TOKEN = gql`
  mutation refreshAccessToken($address: String!) {
    refreshAccessToken(address: $address) {
      accessToken
    }
  }
`;
export const SEARCH_CONNECT_MSG = gql`
  mutation SearchConnectMsg($address: String!) {
    searchConnectMsg(address: $address) {
      message
      nonce
    }
  }
`;

export const CONNECT_WALLET = gql`
  mutation ConnectWallet($address: String!, $signature: String!) {
    connectWallet(address: $address, signature: $signature) {
      accessToken
      refreshToken
    }
  }
`;
export const CONNECT_OWNER_WALLET = gql`
  mutation ConnectOwnerWallet($address: String!, $signature: String!) {
    connectOwnerWallet(address: $address, signature: $signature) {
      accessToken
      refreshToken
    }
  }
`;
