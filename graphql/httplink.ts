import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  fromPromise,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import Cookies from 'js-cookie';

import { REFRESH_ACCESS_TOKEN } from './query';

import {
  EnumTokens,
  getAccessToken,
  getRefreshToken,
  removeFromStorage,
} from '@/redux/user/user-helper';
const httpLink = createHttpLink({
  uri: (process.env.REACT_API || 'https://api.karas.store') + `/graphql`,
});

const authLink = setContext(async (request, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = getAccessToken();
  if (request.operationName === 'refreshAccessToken') {
    const refreshToken = getRefreshToken();
    if (refreshToken) {
      return {
        headers: {
          ...headers,
          authorization: `Bearer ${refreshToken}`,
        },
      };
    } else {
      return { headers };
    }
  }
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
const refreshToken = async () => {
  try {
    // eslint-disable-next-line no-use-before-define
    return client
      .mutate({
        mutation: REFRESH_ACCESS_TOKEN,
      })
      .then(res => {
        const accessToken = res.data.refreshAccessToken.accessToken;
        Cookies.set(EnumTokens.ACCESSTOKEN, accessToken);
        return accessToken;
      });
  } catch (err) {
    removeFromStorage();

    throw err;
  }
};
const errorLink = onError(({ graphQLErrors, operation, forward }) => {
  if (graphQLErrors) {
    for (let err of graphQLErrors) {
      switch (err.extensions.code) {
        case 'UNAUTHENTICATED':
          return fromPromise(
            refreshToken().catch(error => {
              console.log('Ertro', error);
              return;
            })
          )
            .filter(value => Boolean(value))
            .flatMap(accessToken => {
              const oldHeaders = operation.getContext().headers;
              // modify the operation context with a new token
              operation.setContext({
                headers: {
                  ...oldHeaders,
                  authorization: `Bearer ${accessToken}`,
                },
              });

              return forward(operation);
            });
      }
    }
  }
});

// Setting cache and header link
export const client = new ApolloClient({
  link: ApolloLink.from([errorLink, authLink, httpLink]),
  cache: new InMemoryCache(),
});
