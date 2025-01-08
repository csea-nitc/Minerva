module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'), // Allow Strapi to be accessible from outside
  port: env.int('PORT', 1337), // HTTP port
  url: env('URL', 'http://20.193.153.110:1337'), // HTTP URL
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  settings: {
    cors: {
      origin: '*', // Allow all origins, modify this if you want to restrict specific domains
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed HTTP methods
      allowedHeaders: ['Content-Type', 'Authorization', 'Accept'], // Headers allowed in requests
      credentials: true, // Allow credentials (cookies, authorization headers, etc.)
    },
    https: {
      enabled: true,
      key: '/etc/ssl/private/strapi.key', // Path to your SSL private key
      cert: '/etc/ssl/certs/strapi.crt', // Path to your SSL certificate
    },
  },
});
module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  settings: {
    cors: {
      origin: '*', // Allow all origins, modify this if you want to restrict specific domains
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed HTTP methods
      allowedHeaders: ['Content-Type', 'Authorization', 'Accept'], // Headers allowed in requests
      credentials: true, // Allow credentials (cookies, authorization headers, etc.)
    },
  },
});

