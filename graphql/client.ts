import { GraphQLClient } from 'graphql-request';

import { getAccessToken } from '@/redux/user/user-helper';
import { GRAPHQL_END_POINT } from 'codegen';
const token = getAccessToken();
const client = new GraphQLClient(GRAPHQL_END_POINT, {
  mode: 'cors',
  timeout: 60_000,
  headers: {
    Authorization: token ? `Bearer ${token}` : '',
  },
});

export default client;
