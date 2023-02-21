'use strict';

/**
 * soundkit service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::soundkit.soundkit');
