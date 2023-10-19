import type { CodegenConfig } from '@graphql-codegen/cli';

// Setting GraphQL End Point
export const GRAPHQL_END_POINT =
  (process.env.REACT_APP_API || 'http://213.136.83.74:3030') + `/graphql`;

const config: CodegenConfig = {
  schema: GRAPHQL_END_POINT,
  documents: './graphql/**/*.ts',
  generates: {
    './graphql/generates.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-query',
      ],
      config: {
        withHooks: true,
        fetcher: 'graphql-request',
        exposeQueryKeys: true,
        exposeFetcher: true,
        legacyMode: false,
      },
    },
  },

  /* watch: true, */
};
export default config;
