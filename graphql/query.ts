/* eslint-disable no-unused-vars */
import { gql } from 'graphql-request';

const getHello = gql`
  query GetHello {
    getHello
  }
`;

const SearchConnectMsg = gql`
  mutation SearchConnectMsg($address: String!) {
    searchConnectMsg(address: $address) {
      message
      nonce
    }
  }
`;
