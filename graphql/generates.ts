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

export type Mutation = {
  __typename?: 'Mutation';
  connectWallet: Scalars['String'];
  sendEmailVerification: Scalars['String'];
};


export type MutationConnectWalletArgs = {
  address: Scalars['String'];
  signature: Scalars['String'];
};


export type MutationSendEmailVerificationArgs = {
  email: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  checkJWT: Scalars['Boolean'];
  getHello: Scalars['String'];
};

export type GetHelloQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHelloQuery = { __typename?: 'Query', getHello: string };

export type ConnectWalletMutationVariables = Exact<{
  address: Scalars['String'];
  signature: Scalars['String'];
}>;


export type ConnectWalletMutation = { __typename?: 'Mutation', connectWallet: string };


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
export const ConnectWalletDocument = `
    mutation ConnectWallet($address: String!, $signature: String!) {
  connectWallet(address: $address, signature: $signature)
}
    `;
export const useConnectWalletMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<ConnectWalletMutation, TError, ConnectWalletMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<ConnectWalletMutation, TError, ConnectWalletMutationVariables, TContext>(
      ['ConnectWallet'],
      (variables?: ConnectWalletMutationVariables) => fetcher<ConnectWalletMutation, ConnectWalletMutationVariables>(client, ConnectWalletDocument, variables, headers)(),
      options
    );
useConnectWalletMutation.fetcher = (client: GraphQLClient, variables: ConnectWalletMutationVariables, headers?: RequestInit['headers']) => fetcher<ConnectWalletMutation, ConnectWalletMutationVariables>(client, ConnectWalletDocument, variables, headers);