import { GraphQLClient } from 'graphql-request';

import { GRAPHQL_END_POINT } from 'codegen';

const client = new GraphQLClient(GRAPHQL_END_POINT, {
  mode: 'cors',
  timeout: 60_000,
});

export default client;
