import { GraphQLString } from 'graphql';
import { AppType } from '../types';
import DB from '..';

const createApp = {
  type: AppType,
  args: {
    name: { type: GraphQLString },
    description: { type: GraphQLString }
  },
  resolve(parent, { name, description }) {
    return DB()
      .insert({ name, description })
      .into('app')
      .returning('*')
      .then((rows) => rows[0]);
  }
};

export default createApp;
