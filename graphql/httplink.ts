import {
  ApolloClient,
  createHttpLink,
  GraphQLRequest,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { getAccessToken } from '@/redux/user/user-helper';

const httpLink = createHttpLink({
  uri: 'http://213.136.83.74:3030/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = getAccessToken();
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

function isRefreshRequest(operation: GraphQLRequest) {
  return operation.operationName === 'checkRefreshToken';
}
// Returns accesstoken if opoeration is not a refresh token request
// eslint-disable-next-line no-unused-vars
function returnTokenDependingOnOperation(operation: GraphQLRequest) {
  if (isRefreshRequest(operation))
    return localStorage.getItem('refreshToken') || '';
  else return localStorage.getItem('accessToken') || '';
}
/* const errorLink = onError(
  ({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors) {
      for (let err of graphQLErrors) {
        switch (err.extensions.code) {
          case 'UNAUTHENTICATED':
            // ignore 401 error for a refresh request
            if (operation.operationName === 'refreshToken') return;

            const observable = new Observable<FetchResult<Record<string, any>>>(
              observer => {
                // used an annonymous function for using an async function
                (async () => {
                  try {
                    const accessToken = await refreshToken();

                    if (!accessToken) {
                      throw new GraphQLError('Empty AccessToken');
                    }

                    // Retry the failed request
                    const subscriber = {
                      next: observer.next.bind(observer),
                      error: observer.error.bind(observer),
                      complete: observer.complete.bind(observer),
                    };

                    forward(operation).subscribe(subscriber);
                  } catch (err) {
                    observer.error(err);
                  }
                })();
              }
            );

            return observable;
        }
      }
    }

    if (networkError) console.log(`[Network error]: ${networkError}`);
  }
); */

/* const refreshToken = async () => {
  try {
    const refreshResolverResponse = await client.mutate<{
      refreshToken: AccessToken;
    }>({
      mutation: REFRESH_TOKEN,
    });

    const accessToken = refreshResolverResponse.data?.refreshToken.accessToken;
    localStorage.setItem('accessToken', accessToken || '');
    return accessToken;
  } catch (err) {
    localStorage.clear();
    throw err;
  }
}; */
export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
