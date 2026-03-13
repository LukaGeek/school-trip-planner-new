import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query Users {
    user {
      id
      name
      email
      password
    }
  }
`;

export const GET_GOOGLE_USER = gql`
  query GoogleUsers {
    googleUser {
      id
      token_id
      name
      email
      image
    }
  }
`;

export const GET_FACEBOOK_USER = gql`
  query FacebookUsers {
    facebookUser {
      id
      token_id
      name
      email
      image
    }
  }
`;

export const GET_WHITELISTED_USER = gql`
  query WhitelistedUsers {
    whitelistedUser {
      id
      name
      email
    }
  }
`;

export const GET_TRANSPORT_DRIVER = gql`
  query TransportDrivers {
    transportDriver {
      id
      name
      email
      password
    }
  }
`;

export const GET_DESTINATIONS = gql`
  query GetDestinations {
    destinations {
      id
      name
      slug
      price
      description
      image
    }
  }
`;

export const GET_TRIP_REQUESTS = gql`
  query GetTripRequest {
    tripRequests {
      id
      students
      parents
      teachers
      destination
      menu
      total
      createdAt
    }
  }
`;
