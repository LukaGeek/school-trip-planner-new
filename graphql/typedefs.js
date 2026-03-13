export const typeDefs = `#graphql
    type User {
        id: ID!
        name: String
        email: String
        password: String
    }

    type GoogleUser {
        id: ID!
        token_id: String
        name: String
        email: String
        password: String
    }

    type FacebookUser {
        id: ID!
        token_id: String
        name: String
        email: String
        password: String
    }

    type WhitelistedUser {
        id: ID!
        name: String
        email: String
    }

    type TransportDriver {
        id: ID!
        name: String
        email: String
        password: String
    }

    type TripRequest {
        id: ID!
        students: Int
        parents: Int
        teachers: Int
        destination: String
        menu: String
        total: Int
        createdAt: String
    }

    type Query {
        user:                [User]
        googleUser:          [GoogleUser]
        facebookUser:        [FacebookUser]
        whitelistedUser:     [WhitelistedUser]
        transportDriver:     [TransportDriver]
        tripRequests:        [TripRequest]
    }

    type Mutation {
        """ User """
        addUser(name: String, email: String, password: String): User
        updateUser(id: ID!, name: String, email: String, password: String): User
        deleteUser(id: ID!): User
        """ Google User """
        addGoogleUser(name: String, token_id: String, email: String): GoogleUser
        updateGoogleUser(id: ID!, name: String, token_id: String, email: String): GoogleUser
        deleteGoogleUser(id: ID!): GoogleUser
        """ Facebook User """
        addFacebookUser(name: String, token_id: String, email: String): FacebookUser
        updateFacebookUser(id: ID!, name: String, token_id: String, email: String): FacebookUser
        deleteFacebookUser(id: ID!): FacebookUser
        """ Whitelisted User """
        addWhitelistedUser(name: String, email: String): WhitelistedUser
        updateWhitelistedUser(id: ID!, name: String, email: String): WhitelistedUser
        deleteWhitelistedUser(id: ID!): WhitelistedUser
        """ Transport Driver """
        addTransportDriver(name: String, email: String, password: String): TransportDriver
        updateTransportDriver(id: ID!, name: String, email: String, password: String): TransportDriver
        deleteTransportDriver(id: ID!): TransportDriver
        """ Trip Request """
        createTripRequest(students: Int, parents: Int, teachers: Int, destination: String,  menu: String,  total: Int): TripRequest
    }
`;
