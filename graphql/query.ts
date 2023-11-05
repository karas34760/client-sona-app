/* eslint-disable no-unused-vars */
import { gql } from 'graphql-request';

const SearchConnectMsg = gql`
  mutation SearchConnectMsg($address: String!) {
    searchConnectMsg(address: $address) {
      message
      nonce
    }
  }
`;
