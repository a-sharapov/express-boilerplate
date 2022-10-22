import { GraphQLString } from 'graphql';
import { AppType } from '../types';
import DB from '..';

const getAppByUUID = {
  type: AppType,
  args: { id: { type: GraphQLString } },
  resolve(parent, { id }) {
    return DB().select().from('app').where('uuid', id).first();
  }
};

export default getAppByUUID;
