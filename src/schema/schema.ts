import { GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql';
import DB from './';

export default new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});

const AppType = new GraphQLObjectType({
  name: 'App',
  fields: () => ({
    uuid: {
      type: GraphQLString
    },
    title: {
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    },
    created_at: {
      type: GraphQLString
    },
    updated_at: {
      type: GraphQLString
    }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    app: {
      type: AppType,
      args: { id: { type: GraphQLString } },
      resolve(parent, { id }) {
        return DB().select().from('app').where('uuid', id).first();
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createApp: {
      type: AppType,
      args: {
        title: { type: GraphQLString },
        description: { type: GraphQLString }
      },
      resolve(parent, { title, description }) {
        return DB()
          .insert({ title, description })
          .into('app')
          .returning('*')
          .then((rows) => rows[0]);
      }
    },
    updateApp: {
      type: AppType,
      args: {
        id: { type: GraphQLString },
        title: { type: GraphQLString },
        description: { type: GraphQLString }
      },
      resolve(parent, { id, title, description }) {
        return DB()
          .update({ title, description })
          .into('app')
          .where('uuid', id)
          .returning('*')
          .then((rows) => rows[0]);
      }
    },
    deleteApp: {
      type: AppType,
      args: {
        id: { type: GraphQLString }
      },
      resolve(parent, { id }) {
        return DB()
          .delete()
          .from('app')
          .where('uuid', id)
          .returning('*')
          .then((rows) => rows[0]);
      }
    }
  }
});
