import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';
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

export type AdminEventFilter = {
  address?: InputMaybe<Scalars['String']>;
  eventId?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  organizer?: InputMaybe<Scalars['String']>;
};

export type AdminEventOrderBy = {
  /** Timestamp of deadline for selling tickets. */
  DeadlineForSell?: InputMaybe<Sort>;
  /** Timestamp of event eding. */
  EndTime?: InputMaybe<Sort>;
  /** Timestamp of event starting. */
  StartTime?: InputMaybe<Sort>;
  /** Timestamp of selling tickets. */
  TimeForSell?: InputMaybe<Sort>;
  /** Timestamp of event creation */
  createdTime?: InputMaybe<Sort>;
  /** Timestamp of event submition */
  submitedTime?: InputMaybe<Sort>;
};

export type ConnectMsgType = {
  __typename?: 'ConnectMsgType';
  message: Scalars['String'];
  nonce: Scalars['String'];
};

export type EventFilter = {
  address?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  organizer?: InputMaybe<Scalars['String']>;
};

export type EventOrderBy = {
  /** Timestamp of deadline for selling tickets. */
  DeadlineForSell?: InputMaybe<Sort>;
  /** Timestamp of event eding. */
  EndTime?: InputMaybe<Sort>;
  /** Timestamp of event starting. */
  StartTime?: InputMaybe<Sort>;
  /** Timestamp of selling tickets. */
  TimeForSell?: InputMaybe<Sort>;
  /** Timestamp of event creation */
  createdTime?: InputMaybe<Sort>;
};

export type EventPagination = {
  __typename?: 'EventPagination';
  currentPage: Scalars['Int'];
  hasNext: Scalars['Boolean'];
  hasPrevious: Scalars['Boolean'];
  items: Array<TkfEventType>;
  pages: Scalars['Int'];
  size: Scalars['Int'];
  total: Scalars['Int'];
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
  check: Scalars['String'];
  connectOwnerWallet: JwtType;
  connectWallet: JwtType;
  createBuyTickets: TransactionDataAbi;
  createEvent: Scalars['String'];
  refreshAccessToken: JwtAccessTokenType;
  rejectEvent: Scalars['String'];
  searchConnectMsg: ConnectMsgType;
  sendEmailVerification: Scalars['String'];
  submitNewEvent: Scalars['String'];
  submitSignedTransaction: Scalars['String'];
  verifyEmail: Scalars['String'];
};


export type MutationCheckArgs = {
  msg: Scalars['String'];
};


export type MutationConnectOwnerWalletArgs = {
  address: Scalars['String'];
  signature: Scalars['String'];
};


export type MutationConnectWalletArgs = {
  address: Scalars['String'];
  signature: Scalars['String'];
};


export type MutationCreateBuyTicketsArgs = {
  amounts: Array<Scalars['Int']>;
  buyer: Scalars['String'];
  eventAddress: Scalars['String'];
  tiers: Array<Scalars['Int']>;
};


export type MutationCreateEventArgs = {
  eventId: Scalars['Int'];
};


export type MutationRefreshAccessTokenArgs = {
  address: Scalars['String'];
};


export type MutationRejectEventArgs = {
  eventId: Scalars['Int'];
};


export type MutationSearchConnectMsgArgs = {
  address: Scalars['String'];
};


export type MutationSendEmailVerificationArgs = {
  address: Scalars['String'];
  email: Scalars['String'];
};


export type MutationSubmitNewEventArgs = {
  DeadlineForSell: Scalars['Float'];
  EndTime: Scalars['Float'];
  StartTime: Scalars['Float'];
  TimeForSell: Scalars['Float'];
  description: Scalars['String'];
  image: Scalars['String'];
  location: Scalars['String'];
  name: Scalars['String'];
  organizer: Scalars['String'];
  tickets: Array<NewTicketType>;
  uri: Scalars['String'];
};


export type MutationSubmitSignedTransactionArgs = {
  rawTransaction: Scalars['String'];
};


export type MutationVerifyEmailArgs = {
  code: Scalars['String'];
  email: Scalars['String'];
};

export type NewTicketType = {
  amount: Scalars['Int'];
  /** Ticket image from ipfs. */
  asset: Scalars['String'];
  description: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Float'];
  tier: Scalars['Int'];
  /** ticket uri from ipfs. */
  uri: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  checkAccessToken: Scalars['Boolean'];
  checkRefreshToken: Scalars['Boolean'];
  getHello: Scalars['String'];
  searchAccountByAddress: TkfAccount;
  searchEvents: EventPagination;
  searchEventsNotApprove: EventPagination;
  searchTickets: Array<TkfTicketType>;
};


export type QuerySearchAccountByAddressArgs = {
  address: Scalars['String'];
};


export type QuerySearchEventsArgs = {
  filter?: InputMaybe<EventFilter>;
  orderBy?: InputMaybe<EventOrderBy>;
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type QuerySearchEventsNotApproveArgs = {
  filter?: InputMaybe<AdminEventFilter>;
  orderBy?: InputMaybe<AdminEventOrderBy>;
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type QuerySearchTicketsArgs = {
  eventAddress?: InputMaybe<Scalars['String']>;
  eventId?: InputMaybe<Scalars['Int']>;
  tier?: InputMaybe<Scalars['Float']>;
};

export enum Sort {
  Asc = 'asc',
  Desc = 'desc'
}

export type TkfAccount = {
  __typename?: 'TKFAccount';
  address: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  firstActive?: Maybe<Scalars['Float']>;
  isBanned: Scalars['Boolean'];
  isOrganizer: Scalars['Boolean'];
  verifiedAt?: Maybe<Scalars['Float']>;
};

export type TkfEventType = {
  __typename?: 'TKFEventType';
  /** Timestamp of deadline for selling tickets. */
  DeadlineForSell: Scalars['Float'];
  /** Timestamp of event eding. */
  EndTime: Scalars['Float'];
  /** Timestamp of event starting. */
  StartTime: Scalars['Float'];
  /** Timestamp of selling tickets. */
  TimeForSell: Scalars['Float'];
  address?: Maybe<Scalars['String']>;
  /** Timestamp of event creation */
  createdTime?: Maybe<Scalars['Float']>;
  /** Transaction hash of event creation. */
  createdTx?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  eventId: Scalars['Int'];
  /** image uri of event from ipfs */
  image: Scalars['String'];
  /** location of event. */
  location: Scalars['String'];
  name: Scalars['String'];
  organizer: Scalars['String'];
  /** Timestamp of event submition. */
  submitedTime: Scalars['Float'];
  /** All ticket tiers */
  tickets: Array<Scalars['Int']>;
  /** event uri from ipfs */
  uri: Scalars['String'];
};

export type TkfTicketType = {
  __typename?: 'TKFTicketType';
  amount: Scalars['Float'];
  asset: Scalars['String'];
  description: Scalars['String'];
  eventAddress: Scalars['String'];
  eventId: Scalars['Int'];
  name: Scalars['String'];
  price: Scalars['Float'];
  remaining: Scalars['Float'];
  tier: Scalars['Float'];
  uri: Scalars['String'];
};

export type TransactionDataAbi = {
  __typename?: 'TransactionDataABI';
  abi: Scalars['String'];
};

export type SearchConnectMsgMutationVariables = Exact<{
  address: Scalars['String'];
}>;


export type SearchConnectMsgMutation = { __typename?: 'Mutation', searchConnectMsg: { __typename?: 'ConnectMsgType', message: string, nonce: string } };

export type ConnectWalletMutationVariables = Exact<{
  address: Scalars['String'];
  signature: Scalars['String'];
}>;


export type ConnectWalletMutation = { __typename?: 'Mutation', connectWallet: { __typename?: 'JWTType', accessToken: string, refreshToken: string } };

export type ConnectOwnerWalletMutationVariables = Exact<{
  address: Scalars['String'];
  signature: Scalars['String'];
}>;


export type ConnectOwnerWalletMutation = { __typename?: 'Mutation', connectOwnerWallet: { __typename?: 'JWTType', accessToken: string, refreshToken: string } };


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
export const ConnectWalletDocument = `
    mutation ConnectWallet($address: String!, $signature: String!) {
  connectWallet(address: $address, signature: $signature) {
    accessToken
    refreshToken
  }
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
export const ConnectOwnerWalletDocument = `
    mutation ConnectOwnerWallet($address: String!, $signature: String!) {
  connectOwnerWallet(address: $address, signature: $signature) {
    accessToken
    refreshToken
  }
}
    `;
export const useConnectOwnerWalletMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<ConnectOwnerWalletMutation, TError, ConnectOwnerWalletMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<ConnectOwnerWalletMutation, TError, ConnectOwnerWalletMutationVariables, TContext>(
      ['ConnectOwnerWallet'],
      (variables?: ConnectOwnerWalletMutationVariables) => fetcher<ConnectOwnerWalletMutation, ConnectOwnerWalletMutationVariables>(client, ConnectOwnerWalletDocument, variables, headers)(),
      options
    );
useConnectOwnerWalletMutation.fetcher = (client: GraphQLClient, variables: ConnectOwnerWalletMutationVariables, headers?: RequestInit['headers']) => fetcher<ConnectOwnerWalletMutation, ConnectOwnerWalletMutationVariables>(client, ConnectOwnerWalletDocument, variables, headers);