/* eslint-disable no-unused-vars */
import { gql } from '@apollo/client';
export const CHECK_ACCESS_TOKEN = gql`
  query CheckAccessToken {
    checkAccessToken
  }
`;

export const REFRESH_ACCESS_TOKEN = gql`
  mutation RefreshAccessToken {
    refreshAccessToken {
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
    $category: [String!]!
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
      category: $category
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
        category
        location
        uri
        tickets
        TimeForSell
        DeadlineForSell
        StartTime
        EndTime
        submitedTime
        createdTime
        mortageTx
        createdTx
        isLocked
        isWithdrawable
        withdrawableAmount
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
      profile {
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
  }
`;

export const SEARCH_TICKETS = gql`
  query SearchTickets($eventId: Int, $eventAddress: String, $tier: Int) {
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
export const SUBMIT_TRANSACTION = gql`
  mutation SubmitTransaction(
    $blockHash: String!
    $blockNumber: Int!
    $transactionHash: String!
    $from: String!
  ) {
    submitTransaction(
      blockHash: $blockHash
      blockNumber: $blockNumber
      transactionHash: $transactionHash
      from: $from
    )
  }
`;
export const SUBMIT_SIGNATURE = gql`
  mutation SubmitSignature($filter: SubmitSignatureArgsInput!) {
    submitSignature(filter: $filter) {
      eventAddress
      tier
      amount
      price
      startTime
      deadline
      signature
      signer
      status
    }
  }
`;

export const SEARCH_PROFILE = gql`
  query SearchAddressProfile {
    searchAddressProfile {
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

export const SEARCH_EVENTS_NOT_APPROVE = gql`
  query SearchEventsNotApprove(
    $page: Int
    $size: Int
    $filter: AdminEventFilter
    $orderBy: AdminEventOrderBy
  ) {
    searchEventsNotApprove(
      page: $page
      size: $size
      filter: $filter
      orderBy: $orderBy
    ) {
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
export const SEARCH_REJECT_EVENT = gql`
  query SearchRejectedEvent(
    $page: Int
    $size: Int
    $filter: AdminEventFilter
    $orderBy: AdminEventOrderBy
  ) {
    searchRejectedEvent(
      page: $page
      size: $size
      filter: $filter
      orderBy: $orderBy
    ) {
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
        category
        location
        uri
        tickets
        TimeForSell
        DeadlineForSell
        StartTime
        EndTime
        submitedTime
        createdTime
        mortageTx
        createdTx
      }
    }
  }
`;
export const SEARCH_EVENT_METADATA = gql`
  query SearchEventMetadata($filter: EventMetadataFilter!) {
    searchEventMetadata(filter: $filter) {
      name
      description
      location
      image
      organizer
      singers {
        name
        age
        image
        sex
      }
      tickets {
        tier
        amount
        remaining
        price
        name
        description
        asset
      }
      category
      timeForSell
      deadlineForSell
      startTime
      endTime
      license
    }
  }
`;

export const SEARCH_EVENTS_NOT_APPROVE_BY_USER = gql`
  query SearchEventNotApproveByUser(
    $page: Int
    $size: Int
    $filter: UserEventFilter
    $orderBy: AdminEventOrderBy
  ) {
    searchEventNotApproveByUser(
      page: $page
      size: $size
      filter: $filter
      orderBy: $orderBy
    ) {
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
        category
        location
        uri
        tickets
        TimeForSell
        DeadlineForSell
        StartTime
        EndTime
        submitedTime
        createdTime
        mortageTx
        createdTx
        isLocked
        isRejected
      }
    }
  }
`;

export const SEARCH_TICKET_ON_SALE = gql`
  query SearchTicketsOnSales(
    $page: Int
    $size: Int
    $filter: TicketsOnSalesFilter
    $orderBy: TicketsOnSalesOrderBy
  ) {
    searchTicketsOnSales(
      page: $page
      size: $size
      filter: $filter
      orderBy: $orderBy
    ) {
      currentPage
      hasNext
      hasPrevious
      pages
      size
      total
      items {
        eventAddress
        tier
        amount
        price
        seller
        name
        description
        asset
        signature
        startTime
        deadline
      }
    }
  }
`;

export const SEARCH_ORGANIZER_PROFILE = gql`
  query SearchOrganizerProfile($address: String!) {
    searchOrganizerProfile(address: $address) {
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

export const SEARCH_TICKET_OF_USER = gql`
  query SearchTicketsOfUser(
    $page: Int
    $size: Int
    $filter: TicketPaginationFilter
  ) {
    searchTicketsOfUser(page: $page, size: $size, filter: $filter) {
      currentPage
      hasNext
      hasPrevious
      pages
      size
      total
      items {
        eventId
        eventAddress
        tier
        amount
        price
        name
        description
        asset
        uri
        isExpired
      }
    }
  }
`;

export const SEARCH_LISTING_TICKET_MESSAGE = gql`
  query SearchListingTicketsMessage(
    $eventAddress: String!
    $tier: Int!
    $amount: Int!
    $price: Int!
    $period: PERIOD!
  ) {
    searchListingTicketsMessage(
      eventAddress: $eventAddress
      tier: $tier
      amount: $amount
      price: $price
      period: $period
    ) {
      eventAddress
      tier
      amount
      price
      startTime
      deadline
      message
    }
  }
`;

export const SEARCH_AVAILABLE_WRAP_USD = gql`
  query Query {
    searchAvailableWrapUSD
  }
`;
export const UPDATE_FAVORITE_EVENTS = gql`
  mutation UpdateFavoriteEvent(
    $eventAddress: String!
    $status: FavoriteStatusType!
  ) {
    updateFavoriteEvent(eventAddress: $eventAddress, status: $status)
  }
`;
export const SEARCH_FAVORITE_EVENTS = gql`
  query SearchFavoritedEvents(
    $page: Int
    $size: Int
    $filter: FavoriteEventFilterType
  ) {
    searchFavoritedEvents(page: $page, size: $size, filter: $filter) {
      currentPage
      hasNext
      hasPrevious
      pages
      size
      total
      items {
        eventAddress
        userAddress
        timestamp
      }
    }
  }
`;
