import { GraphQLFieldConfig, GraphQLList } from 'graphql';
import { AppType, IResolverArgumetns } from '../types';
import DB from '..';

const getAllApps: GraphQLFieldConfig<any, any, IResolverArgumetns> = {
  type: new GraphQLList(AppType),
  resolve() {
    return DB().select().from('app');
  }
};

export default getAllApps;
