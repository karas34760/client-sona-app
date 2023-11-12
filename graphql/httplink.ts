import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  FetchResult,
  GraphQLRequest,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { Observable } from '@apollo/client/utilities';
import { GraphQLError } from 'graphql';
import Cookies from 'js-cookie';

import { REFRESH_ACCESS_TOKEN } from './query';

import {
  EnumTokens,
  getAccessToken,
  getItemFromLocal,
  getRefreshToken,
  removeFromStorage,
} from '@/redux/user/user-helper';
const httpLink = createHttpLink({
  uri: (process.env.REACT_APP_API || 'http://213.136.83.74:3030') + `/graphql`,
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
  return operation.operationName === 'refreshAccessToken';
}

// eslint-disable-next-line no-unused-vars
function returnTokenDependingOnOperation(operation: GraphQLRequest) {
  if (isRefreshRequest(operation)) return getRefreshToken();
  else return getAccessToken();
}
const errorLink = onError(
  ({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors) {
      for (let err of graphQLErrors) {
        switch (err.extensions.code) {
          case 'UNAUTHENTICATED':
            // ignore 401 error for a refresh request
            if (operation.operationName === 'refreshAccessToken') return;

            const observable = new Observable<FetchResult<Record<string, any>>>(
              observer => {
                // used an annonymous function for using an async function
                (async () => {
                  try {
                    // eslint-disable-next-line no-use-before-define
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
);

const refreshToken = async () => {
  try {
    const currentUser = getItemFromLocal('user');
    // eslint-disable-next-line no-use-before-define
    const refreshResolverResponse = await client.mutate<{
      accessToken: string;
    }>({
      mutation: REFRESH_ACCESS_TOKEN,
      variables: {
        address: currentUser,
      },
    });

    const accessToken = refreshResolverResponse.data?.accessToken;
    if (accessToken) {
      Cookies.set(EnumTokens.ACCESSTOKEN, accessToken);
      return accessToken;
    } else {
      removeFromStorage();
      return;
    }
  } catch (err) {
    removeFromStorage();
    throw err;
  }
};

// Setting cache and header link
export const client = new ApolloClient({
  link: ApolloLink.from([errorLink, authLink, httpLink]),
  cache: new InMemoryCache(),
});
