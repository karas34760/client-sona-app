/* eslint-disable no-unused-vars */
import { gql } from 'graphql-request';

export const SearchConnectMsg = gql`
  mutation SearchConnectMsg($address: String!) {
    searchConnectMsg(address: $address) {
      message
      nonce
    }
  }
`;

const ConnectWallet = gql`
  mutation ConnectWallet($address: String!, $signature: String!) {
    connectWallet(address: $address, signature: $signature) {
      accessToken
      refreshToken
    }
  }
`;
const ConnectOwnerWallet = gql`
  mutation ConnectOwnerWallet($address: String!, $signature: String!) {
    connectOwnerWallet(address: $address, signature: $signature) {
      accessToken
      refreshToken
    }
  }
`;
