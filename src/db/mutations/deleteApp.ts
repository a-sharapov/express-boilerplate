import { GraphQLFieldConfig, GraphQLString } from 'graphql';
import { AppType, IResolverArgumetns } from '../types';
import DB from '..';

const deleteApp: GraphQLFieldConfig<any, any, IResolverArgumetns> = {
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
};

export default deleteApp;
