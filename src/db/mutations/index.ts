import { GraphQLObjectType } from 'graphql';
import createApp from './createApp';
import deleteApp from './deleteApp';
import updateApp from './updateApp';

export default new GraphQLObjectType({
  name: 'mutations',
  description: 'Demo API Mutations',
  fields: {
    createApp,
    updateApp,
    deleteApp
  }
});
