export const MOTD = () => {
  console.log('');
  console.log('\x1b[34m%s\x1b[0m', ' ,e e,   Y8b Y8Y 888 88e  888,8,  ,e e,   dP"Y  dP"Y');
  console.log('\x1b[36m%s\x1b[0m', 'd88 88b   Y8b Y  888 888b 888 "  d88 88b C88b  C88b');
  console.log('888   ,  e Y8b   888 888P 888    888   ,  Y88D  Y88D');
  console.log('\x1b[30m%s\x1b[0m', ' "YeeP" d8b Y8b  888 88"  888     "YeeP" d,dP  d,dP');
  console.log('\x1b[30m%s\x1b[0m', '                 888');
  console.log('                 %s                        1.0.0', '\x1b[30m888\x1b[0m');
  console.log('');
  console.log('\x1b[30m%s\x1b[0m', `π It was successfully launched:`);
  console.log('');
  console.log(
    '\x1b[32mβ\x1b[0m',
    'CORS ',
    '\x1b[32mβ\x1b[0m',
    'Log4js ',
    '\x1b[32mβ\x1b[0m',
    'Swagger ',
    '\x1b[32mβ\x1b[0m',
    'Jest ',
    '\x1b[32mβ\x1b[0m',
    'GraphQL '
  );
  console.log('');
  console.log('\x1b[30m%s\x1b[0m', 'βΈ»');
  console.log(
    `And is now available: π %s`,
    `\x1b[33m${process.env.PROTOCOL}://${process.env.HOST}:${process.env.BACKEND_PORT}/api/v1/\x1b[0m`
  );
  console.log('\x1b[30m%s\x1b[0m', 'βΈ»');
  console.log(
    `Health: π %s`,
    `\x1b[33m${process.env.PROTOCOL}://${process.env.HOST}:${process.env.BACKEND_PORT}/api/v1/health\x1b[0m`
  );
  console.log(
    `Docs: π %s`,
    `\x1b[33m${process.env.PROTOCOL}://${process.env.HOST}:${process.env.BACKEND_PORT}/api/v1/docs\x1b[0m`
  );
  process.env.NODE_ENV === 'development' &&
    console.log(
      `GraphiQL: π %s`,
      `\x1b[33m${process.env.PROTOCOL}://${process.env.HOST}:${process.env.BACKEND_PORT}/api/v1/graphql\x1b[0m`
    );
  console.log('');
};
