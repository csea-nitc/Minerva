'use strict';

/**
 * adhoc service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::adhoc.adhoc');
