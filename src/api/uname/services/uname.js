'use strict';

/**
 * uname service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::uname.uname');
