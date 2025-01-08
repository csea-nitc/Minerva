'use strict';

/**
 * adhoc controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::adhoc.adhoc');
