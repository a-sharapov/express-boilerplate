import { GraphQLFieldConfig, GraphQLString } from 'graphql';
import { AppType, IResolverArgumetns } from '../types';
import DB from '..';

const getAppByUUID: GraphQLFieldConfig<any, any, IResolverArgumetns> = {
  type: AppType,
  args: { uuid: { type: GraphQLString } },
  resolve(parent, { uuid }) {
    return DB().select().from('app').where(uuid).first();
  }
};

export default getAppByUUID;
