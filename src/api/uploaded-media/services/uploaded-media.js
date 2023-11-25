'use strict';

/**
 * uploaded-media service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::uploaded-media.uploaded-media');
