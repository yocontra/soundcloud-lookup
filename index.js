'use strict';

var request = require('superagent');

function soundcloud(url, key, cb){
  request.get('http://api.soundcloud.com/resolve.json')
    .query({
      client_id: key,
      url: url
    })
    .accept('json')
    .end(function(err, res){
      if (err) {
        return cb(err);
      }

      if (res.status >= 400) {
        return cb(new Error(res.text));
      }

      if (res.body.stream_url) {
        res.body.stream_url += '?client_id=' + key;
      }
      if (res.body.attachments_uri) {
        res.body.attachments_uri += '?client_id=' + key;
      }
      cb(null, res.body);
    });
}

module.exports = soundcloud;