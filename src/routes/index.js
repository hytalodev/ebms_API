/**
 * Module to load all the application routes.
 * @module routes
 */

const donorRoutes = require('./donor.route');
const authRoutes = require('./auth.route');
const histBloodroutes = require('./histBlood.route');
const estBlood = require("./estBlood.route");
const schedulingRoutes = require('./scheduling.route');
const localityRoute = require('./locality.route');
const stockValidityRoutes = require('./validity.route');

/**
 * Loads all route groups into the given Express app instance.
 *
 * @function loadRoutes
 * @memberof module:routes
 * @param {Object} app - The Express application instance.
 *
 * @description
 * Registers the following route groups:
 * - `/donors` → handles donor-related endpoints.
 * - `/admins` → handles admin authentication and management endpoints.
 * - `/histBlood` → handles blood historical endpoints.
 * - `/estBlood` → handles blood stock endpoits.
 * - `/scheduling` → handles scheduling endpoints.

 */
function loadRoutes(app) {
  app.use('/donors', donorRoutes);
  app.use('/auth', authRoutes);
  app.use('/histBlood', histBloodroutes);
  app.use('/estBlood', estBlood);
  app.use('/agendamentos', schedulingRoutes);
  app.use('/locality', localityRoute);
  app.use('/validity', stockValidityRoutes);
};

module.exports = { loadRoutes };
