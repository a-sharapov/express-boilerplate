import { GraphQLString } from 'graphql';
import { AppType } from '../types';
import DB from '..';

const updateApp = {
  type: AppType,
  args: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString }
  },
  resolve(parent, { id, name, description }) {
    return DB()
      .update({ name, description })
      .into('app')
      .where('uuid', id)
      .returning('*')
      .then((rows) => rows[0]);
  }
};

export default updateApp;
