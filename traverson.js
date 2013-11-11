'use strict';

var minilog = require('minilog')
var mediaTypes = require('./lib/media_types')
var WalkerBuilder = require('./lib/walker_builder')

// activate this line to enable logging
// require('minilog').enable();

module.exports = {
  json: {
    from: function(uri) {
      return {
        newRequest: function() {
          return new WalkerBuilder(mediaTypes.JSON, uri)
        }
      }
    }
  },
  jsonHal: {
    from: function(uri) {
      return {
        newRequest: function() {
          return new WalkerBuilder(mediaTypes.JSON_HAL, uri)
        }
      }
    }
  }
}
