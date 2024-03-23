// server
const {ApolloServer,gql} = require('apollo-server');
// const {ApolloServerPluginLaningPageLocalDefault} = require('apollo-server-core');
const users = require('../pages/mocks/users.json');

// type User = {
//     user: String,
//     password: String,
//     userProperties: [String]

// };
// type Query = {
//     getUser(user: String, password: String): User
// }

const typeDefs = gql`
    type User {
        user: String,
        password: String,
        userProperties: [String]
    }

    type Query {
        getUser(user: String,password: String): User
    }
`;

const resolvers = {
    Query: {
        getUser: (obj,params) => {
            return users.find((user)=> user.user === params.user && user.password === params.password);
        }
    }
}

const {ApolloServerPluginLandingPageLocalDefault} = require('apollo-server-core');
const server = new ApolloServer({
    typeDefs, //GraphQL Schema
    resolvers, //difinition of actions that trigger by query call from schema
    csrfPrevention: true,
    cache: 'bounded',
    plugins: [
        ApolloServerPluginLandingPageLocalDefault({embed: true})
    ]
});

server.listen().then((url)=> {
    console.log(`Server ready at ${url}`)
});






