import { GraphQLObjectType } from 'graphql';
import getAllApps from './getAllApps';
import getAppByUUID from './getAppByUUID';

export default new GraphQLObjectType({
  name: 'queries',
  description: 'Demo API Queries',
  fields: {
    getAllApps,
    getAppByUUID
  }
});
