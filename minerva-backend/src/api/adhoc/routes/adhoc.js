'use strict';

/**
 * adhoc router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::adhoc.adhoc');
