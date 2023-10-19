import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useQuery, useMutation, UseQueryOptions, UseMutationOptions } from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables extends { [key: string]: any }>(client: GraphQLClient, query: string, variables?: TVariables, requestHeaders?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request({
    document: query,
    variables,
    requestHeaders
  });
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type ConnectMsgType = {
  __typename?: 'ConnectMsgType';
  message: Scalars['String'];
  nonce: Scalars['String'];
};

export type JwtAccessTokenType = {
  __typename?: 'JWTAccessTokenType';
  accessToken: Scalars['String'];
};

export type JwtType = {
  __typename?: 'JWTType';
  accessToken: Scalars['String'];
  refreshToken: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  connectWallet: JwtType;
  refreshAccessToken: JwtAccessTokenType;
  searchConnectMsg: ConnectMsgType;
  sendEmailVerification: Scalars['String'];
};


export type MutationConnectWalletArgs = {
  address: Scalars['String'];
  signature: Scalars['String'];
};


export type MutationSearchConnectMsgArgs = {
  address: Scalars['String'];
};


export type MutationSendEmailVerificationArgs = {
  address: Scalars['String'];
  email: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  checkAccessToken: Scalars['Boolean'];
  checkRefreshToken: Scalars['Boolean'];
  getHello: Scalars['String'];
  searchAccountByAddress: TkfAccount;
};


export type QuerySearchAccountByAddressArgs = {
  address: Scalars['String'];
};

export type TkfAccount = {
  __typename?: 'TKFAccount';
  address: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  firstActive?: Maybe<Scalars['Float']>;
  isBanned: Scalars['Boolean'];
  isOrganizer: Scalars['Boolean'];
  verifiedAt?: Maybe<Scalars['Float']>;
};

export type GetHelloQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHelloQuery = { __typename?: 'Query', getHello: string };

export type SearchConnectMsgMutationVariables = Exact<{
  address: Scalars['String'];
}>;


export type SearchConnectMsgMutation = { __typename?: 'Mutation', searchConnectMsg: { __typename?: 'ConnectMsgType', message: string, nonce: string } };


export const GetHelloDocument = `
    query GetHello {
  getHello
}
    `;
export const useGetHelloQuery = <
      TData = GetHelloQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetHelloQueryVariables,
      options?: UseQueryOptions<GetHelloQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetHelloQuery, TError, TData>(
      variables === undefined ? ['GetHello'] : ['GetHello', variables],
      fetcher<GetHelloQuery, GetHelloQueryVariables>(client, GetHelloDocument, variables, headers),
      options
    );

useGetHelloQuery.getKey = (variables?: GetHelloQueryVariables) => variables === undefined ? ['GetHello'] : ['GetHello', variables];
;

useGetHelloQuery.fetcher = (client: GraphQLClient, variables?: GetHelloQueryVariables, headers?: RequestInit['headers']) => fetcher<GetHelloQuery, GetHelloQueryVariables>(client, GetHelloDocument, variables, headers);
export const SearchConnectMsgDocument = `
    mutation SearchConnectMsg($address: String!) {
  searchConnectMsg(address: $address) {
    message
    nonce
  }
}
    `;
export const useSearchConnectMsgMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<SearchConnectMsgMutation, TError, SearchConnectMsgMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<SearchConnectMsgMutation, TError, SearchConnectMsgMutationVariables, TContext>(
      ['SearchConnectMsg'],
      (variables?: SearchConnectMsgMutationVariables) => fetcher<SearchConnectMsgMutation, SearchConnectMsgMutationVariables>(client, SearchConnectMsgDocument, variables, headers)(),
      options
    );
useSearchConnectMsgMutation.fetcher = (client: GraphQLClient, variables: SearchConnectMsgMutationVariables, headers?: RequestInit['headers']) => fetcher<SearchConnectMsgMutation, SearchConnectMsgMutationVariables>(client, SearchConnectMsgDocument, variables, headers);