const graphQL = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLInt } = graphQL;

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt }
  }
});
