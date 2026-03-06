export const typeDefs = `#graphql
    type Test {
        id: ID!
        test: String
    }

    type Query {
        test: [Test]
    }

    type Mutation {
        addTest(test: String): Test
        updateTest(id: ID!, test: String): Test
        deleteTest(id: ID!): Test
    }
`;
