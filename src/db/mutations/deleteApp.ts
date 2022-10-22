import { GraphQLString } from 'graphql';
import { AppType } from '../types';
import DB from '..';

const deleteApp = {
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
