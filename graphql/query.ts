/* eslint-disable no-unused-vars */
import { gql } from '@apollo/client';
export const CHECK_ACCESS_TOKEN = gql`
  query CheckAccessToken {
    checkAccessToken
  }
`;

export const REFRESH_ACCESS_TOKEN = gql`
  mutation refreshAccessToken($address: String!) {
    refreshAccessToken(address: $address) {
      accessToken
    }
  }
`;
export const SEARCH_CONNECT_MSG = gql`
  mutation SearchConnectMsg($address: String!) {
    searchConnectMsg(address: $address) {
      message
      nonce
    }
  }
`;

export const CONNECT_WALLET = gql`
  mutation ConnectWallet($address: String!, $signature: String!) {
    connectWallet(address: $address, signature: $signature) {
      accessToken
      refreshToken
    }
  }
`;

export const SUBMIT_NEW_EVENT = gql`
  mutation SubmitNewEvent(
    $organizer: String!
    $name: String!
    $description: String!
    $image: String!
    $location: String!
    $uri: String!
    $tickets: [NewTicketType!]!
    $timeForSell: Float!
    $deadlineForSell: Float!
    $startTime: Float!
    $endTime: Float!
    $mortageTx: String!
  ) {
    submitNewEvent(
      organizer: $organizer
      name: $name
      description: $description
      image: $image
      location: $location
      uri: $uri
      tickets: $tickets
      TimeForSell: $timeForSell
      DeadlineForSell: $deadlineForSell
      StartTime: $startTime
      EndTime: $endTime
      mortageTx: $mortageTx
    )
  }
`;

export const SEARCH_EVENTS = gql`
  query SearchEvents(
    $page: Int
    $size: Int
    $filter: EventFilter
    $orderBy: EventOrderBy
  ) {
    searchEvents(page: $page, size: $size, filter: $filter, orderBy: $orderBy) {
      currentPage
      hasNext
      hasPrevious
      pages
      size
      total
      items {
        eventId
        address
        organizer
        name
        description
        image
        location
        uri
        tickets
        TimeForSell
        DeadlineForSell
        StartTime
        EndTime
        submitedTime
        createdTime
        createdTx
      }
    }
  }
`;

export const SEARCH_ACCOUNT_BY_ADDRESS = gql`
  query SearchAccountByAddress($address: String!) {
    searchAccountByAddress(address: $address) {
      address
      email
      isOrganizer
      isBanned
      firstActive
      verifiedAt
    }
  }
`;

export const SEARCH_TICKETS = gql`
  query SearchTickets($eventId: Int, $eventAddress: String, $tier: Float) {
    searchTickets(eventId: $eventId, eventAddress: $eventAddress, tier: $tier) {
      eventId
      eventAddress
      tier
      amount
      remaining
      price
      name
      description
      asset
      uri
    }
  }
`;

export const SEND_EMAIL_VERIFY = gql`
  mutation SendEmailVerification($email: String!) {
    sendEmailVerification(email: $email)
  }
`;

export const VEIRYF_EMAIL = gql`
  mutation VerifyEmail($email: String!, $code: String!) {
    verifyEmail(email: $email, code: $code)
  }
`;
export const UPDATE_PROFILE = gql`
  mutation UpdateProfile($args: UpdateProfileInput!) {
    updateProfile(args: $args) {
      address
      username
      bio
      website
      social {
        key
        value
      }
      avatar
      background
    }
  }
`;
