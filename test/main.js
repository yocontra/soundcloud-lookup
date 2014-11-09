'use strict';

var should = require('should');
var lookup = require('../');

require('mocha');

var key = 'a3e059563d7fd3372b49b37f00a00bcf';

describe('soundcloud-lookup', function() {
  it('should look up a url', function(done) {
    var url = 'https://soundcloud.com/smallenginerepair/serve-yourself-1';
    lookup(url, key, function(err, res){
      should.not.exist(err);
      should.exist(res);
      res.kind.should.equal('track');
      res.id.should.equal(120422553);
      res.created_at.should.equal('2013/11/16 15:26:07 +0000');
      res.user_id.should.equal(92481);
      res.duration.should.equal(242673);
      res.commentable.should.equal(true);
      res.sharing.should.equal('public');
      res.tag_list.should.equal('Americana New 2014 Rock Grunge Guitar cello small engine repair single ilabel "new release" "small engine repair" "27th Jan" "new single"');
      res.permalink.should.equal('serve-yourself-1');
      res.streamable.should.equal(true);
      res.embeddable_by.should.equal('all');
      res.downloadable.should.equal(false);
      res.purchase_url.should.equal('https://itunes.apple.com/gb/album/serve-yourself/id779424884');
      res.genre.should.equal('Alternative');
      res.title.should.equal('Serve Yourself');
      res.description.should.equal('\'Serve Yourself\' is the lead single from the debut album, \'Serve Yourself\' by Small Engine Repair.  The album will be released through iLabel records on the 27th Jan 2014.  Pre-order now on iTunes.');
      res.label_name.should.equal('iLabel');
      res.track_type.should.equal('recording');
      res.video_url.should.equal('http://www.youtube.com/watch?v=wDjc4wTfpi0');
      res.release_year.should.equal(2014);
      res.release_month.should.equal(1);
      res.release_day.should.equal(27);
      res.original_format.should.equal('mp3');
      res.license.should.equal('all-rights-reserved');
      res.uri.should.equal('https://api.soundcloud.com/tracks/120422553');
      should.exist(res.user);
      res.user.id.should.equal(92481);
      res.user.kind.should.equal('user');
      res.user.permalink.should.equal('smallenginerepair');
      res.user.username.should.equal('Small Engine Repair');
      res.user.uri.should.equal('https://api.soundcloud.com/users/92481');
      res.user.permalink_url.should.equal('http://soundcloud.com/smallenginerepair');
      should.exist(res.user.avatar_url);
      res.permalink_url.should.equal('http://soundcloud.com/smallenginerepair/serve-yourself-1');
      should.exist(res.artwork_url);
      should.exist(res.waveform_url);
      res.stream_url.should.equal('https://api.soundcloud.com/tracks/120422553/stream?client_id=a3e059563d7fd3372b49b37f00a00bcf');
      res.attachments_uri.should.equal('https://api.soundcloud.com/tracks/120422553/attachments?client_id=a3e059563d7fd3372b49b37f00a00bcf');
      done();
    });
  });

  it('should fail on a stinker url', function(done) {
    var url = 'http://lkjhlkjh';
    lookup(url, key, function(err, res){
      should.exist(err);
      should.not.exist(res);
      done();
    });
  });

  it('should fail on invalid api key', function(done) {
    var url = 'https://soundcloud.com/smallenginerepair/serve-yourself-1';
    lookup(url, '123', function(err, res){
      should.exist(err);
      should.not.exist(res);
      done();
    });
  });
});
