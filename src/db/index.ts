import knex from 'knex';
import configs from 'knexfile';
import schema from './schema';

const config = configs[process.env.NODE_ENV || 'development'];
export default knex(config);

export { schema };
