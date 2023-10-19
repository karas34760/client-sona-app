import { gql } from 'graphql-request';

const getHello = gql`
  query GetHello {
    getHello
  }
`;

const ConnectWallet = gql`
  mutation ConnectWallet($address: String!, $signature: String!) {
    connectWallet(address: $address, signature: $signature)
  }
`;
