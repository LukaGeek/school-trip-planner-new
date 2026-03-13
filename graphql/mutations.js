import { gql } from "@apollo/client";

/* User signed up with only Email and Password Mutation */

export const ADD_USER = gql`
  mutation AddUser($name: String, $email: String, $password: String) {
    addUser(name: $name, email: $email, password: $password) {
      id
      name
      email
      password
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser(
    $id: ID!
    $name: String
    $email: String
    $password: String
  ) {
    updateUser(id: $id, name: $name, email: $email, password: $password) {
      id
      name
      email
      password
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id) {
      id
      name
      email
      password
    }
  }
`;

/* Facebook User Mutation */

export const ADD_FACEBOOK_USER = gql`
  mutation AddFacebookUser(
    $token_id: String
    $name: String
    $email: String
    $image: String
  ) {
    addFacebookUser(
      token_id: $token_id
      name: $name
      email: $email
      image: $image
    ) {
      id
      token_id
      name
      email
      image
    }
  }
`;

export const UPDATE_FACEBOOK_USER = gql`
  mutation UpdateFacebookUser(
    $id: ID!
    $token_id: String
    $name: String
    $email: String
    $image: String
  ) {
    updateFacebookUser(
      id: $id
      token_id: $token_id
      name: $name
      email: $email
      image: $image
    ) {
      id
      token_id
      name
      email
      image
    }
  }
`;

export const DELETE_FACEBOOK_USER = gql`
  mutation DeleteFacebookUser($id: ID!) {
    deleteFacebookUser(id: $id) {
      id
      token_id
      name
      email
      image
    }
  }
`;

/* Google User Mutation */

export const ADD_GOOGLE_USER = gql`
  mutation AddGoogleUser(
    $token_id: String
    $name: String
    $email: String
    $image: String
  ) {
    addGoogleUser(
      token_id: $token_id
      name: $name
      email: $email
      image: $image
    ) {
      id
      token_id
      name
      email
      image
    }
  }
`;

export const UPDATE_GOOGLE_USER = gql`
  mutation UpdateGoogleUser(
    $id: ID!
    $token_id: String
    $name: String
    $email: String
    $image: String
  ) {
    updateGoogleUser(
      id: $id
      token_id: $token_id
      name: $name
      email: $email
      image: $image
    ) {
      id
      token_id
      name
      email
      image
    }
  }
`;

export const DELETE_GOOGLE_USER = gql`
  mutation DeleteGoogleUser($id: ID!) {
    deleteGoogleUser(id: $id) {
      id
      token_id
      name
      email
      image
    }
  }
`;

/* Whitelisted User Mutation */

export const ADD_WHITELISTED_USER = gql`
  mutation AddWhitelistedUser($name: String, $email: String) {
    addWhitelistedUser(name: $name, email: $email) {
      id
      name
      email
    }
  }
`;

export const UPDATE_WHITELISTED_USER = gql`
  mutation UpdateWhitelistedUser($id: ID!, $name: String, $email: String) {
    updateWhitelistedUser(id: $id, name: $name, email: $email) {
      id
      name
      email
    }
  }
`;

export const DELETE_WHITELISTED_USER = gql`
  mutation DeleteWhitelistedUser($id: ID!) {
    updateWhitelistedUser(id: $id) {
      id
      name
      email
    }
  }
`;

/* Transport Driver */
export const ADD_TRANSPORT_DRIVER = gql`
  mutation AddTransportDriver(
    $name: String
    $email: String
    $password: String
  ) {
    addTransportDriver(name: $name, email: $email, password: $password) {
      id
      name
      email
      password
    }
  }
`;

export const UPDATE_TRANSPORT_DRIVER = gql`
  mutation UpdateTransportDriver(
    $id: ID!
    $name: String
    $email: String
    $password: String
  ) {
    updateTransportDriver(
      id: $id
      name: $name
      email: $email
      password: $password
    ) {
      id
      name
      email
      password
    }
  }
`;

export const DELETE_TRANSPORT_DRIVER = gql`
  mutation DeleteTransportDriver($id: ID!) {
    deleteTransportDriver(id: $id) {
      id
      name
      email
      password
    }
  }
`;

export const CREATE_TRIP_REQUEST = gql`
  mutation CreateTripRequest(
    $students: Int!
    $parents: Int!
    $teachers: Int!
    $destination: String!
    $menu: String!
    $total: Int!
  ) {
    createTripRequest(
      students: $students
      parents: $parents
      teachers: $teachers
      destination: $destination
      menu: $menu
      total: $total
    ) {
      id
      total
    }
  }
`;
