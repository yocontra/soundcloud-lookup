'use strict';

var request = require('browser-jsonp');

function soundcloud(url, key, cb){
  request({
    url: 'http://api.soundcloud.com/resolve.json',
    data: {
      client_id: key,
      url: url
    },
    error: cb,
    success: function(data) {
      if (data.stream_url) {
        data.stream_url += '?client_id=' + key;
      }
      if (data.attachments_uri) {
        data.attachments_uri += '?client_id=' + key;
      }
      cb(null, data);
    }
  });
}

module.exports = soundcloud;