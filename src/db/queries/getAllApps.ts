import { GraphQLList } from 'graphql';
import { AppType } from '../types';
import DB from '..';

const getAllApps = {
  type: new GraphQLList(AppType),
  resolve(parent, args) {
    return DB().select().from('app');
  }
};

export default getAllApps;
