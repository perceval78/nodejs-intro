/*
 * service.js: Defines the web service for the Pinpoint module. 
 *
 * (C) 2011 Charlie Robbins
 * MIT LICENSE
 *
 */

var journey = require('journey');

/**
 * Creates the RESTful router for the pinpoint web service
 */
exports.createRouter = function () {
  var router = new (journey.Router)({
    strict: false,
    strictUrls: false,
    api: 'basic'
  });
  
  router.path(/\/bookmarks/, function () {
    //
    // LIST: GET to /bookmarks lists all bookmarks
    //
    this.get().bind(function (res) {
      res.send(501, {}, { action: 'list' });
    });
    
    //
    // SHOW: GET to /bookmarks/:id shows the details of a specific bookmark 
    //
    this.get(/\/([\w|\d|\-|\_]+)/).bind(function (res, id) {
      res.send(501, {}, { action: 'show' });
    });
    
    //
    // CREATE: POST to /bookmarks creates a new bookmark
    //
    this.post().bind(function (res, bookmark) {
      res.send(501, {}, { action: 'create' });
    });
    
    //
    // UPDATE: PUT to /bookmarks updates an existing bookmark
    //
    this.put(/\/([\w|\d|\-|\_]+)/).bind(function (res, bookmark) {
      res.send(501, {}, { action: 'update' });
    });
    
    //
    // DELETE: DELETE to /bookmarks/:id deletes a specific bookmark
    //
    this.del(/\/([\w|\d|\-|\_]+)/).bind(function (res, id) {
      res.send(501, {}, { action: 'delete' });
    });
  });
  
  return router;
};