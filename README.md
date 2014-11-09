# soundcloud-lookup [![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Support us][gittip-image]][gittip-url] [![Build Status][travis-image]][travis-url] [![Coveralls Status][coveralls-image]][coveralls-url]


## Information

<table>
<tr>
<td>Package</td>
<td>soundcloud-lookup</td>
</tr>
<tr>
<td>Description</td>
<td>Simply look up info about a URL on soundcloud</td>
</tr>
<tr>
<td>Node Version</td>
<td>>= 0.4</td>
</tr>
<tr>
<td>Browser Version</td>
<td>IE6+</td>
</tr>
</table>

## Usage

## Install

```
npm install soundcloud-lookup --save
```

## Example

```js
var lookup = require('soundcloud-lookup');
var key = 'your soundcloud api key';

// works on songs and videos or whatever, but here is a song as a sample
lookup('https://soundcloud.com/smallenginerepair/serve-yourself-1', key, function(err, song){
  /*
    song =
    {
      kind: 'track',
      id: 120422553,
      created_at: '2013/11/16 15:26:07 +0000',
      user_id: 92481,
      duration: 242673,
      commentable: true,
      state: 'finished',
      original_content_size: 5818768,
      last_modified: '2014/10/10 19:37:07 +0000',
      sharing: 'public',
      tag_list: 'Americana New 2014 Rock Grunge Guitar cello small engine repair single ilabel "new release" "small engine repair" "27th Jan" "new single"',
      permalink: 'serve-yourself-1',
      streamable: true,
      embeddable_by: 'all',
      downloadable: false,
      purchase_url: 'https://itunes.apple.com/gb/album/serve-yourself/id779424884',
      label_id: null,
      purchase_title: null,
      genre: 'Alternative',
      title: 'Serve Yourself',
      description: '\'Serve Yourself\' is the lead single from the debut album, \'Serve Yourself\' by Small Engine Repair.  The album will be released through iLabel records on the 27th Jan 2014.  Pre-order now on iTunes.',
      label_name: 'iLabel',
      release: '',
      track_type: 'recording',
      key_signature: '',
      isrc: '',
      video_url: 'http://www.youtube.com/watch?v=wDjc4wTfpi0',
      bpm: null,
      release_year: 2014,
      release_month: 1,
      release_day: 27,
      original_format: 'mp3',
      license: 'all-rights-reserved',
      uri: 'https://api.soundcloud.com/tracks/120422553',
      user: {
        id: 92481,
        kind: 'user',
        permalink: 'smallenginerepair',
        username: 'Small Engine Repair',
        last_modified: '2014/01/15 20:55:53 +0000',
        uri: 'https://api.soundcloud.com/users/92481',
        permalink_url: 'http://soundcloud.com/smallenginerepair',
        avatar_url: 'https://i1.sndcdn.com/avatars-000060473884-t3kgtn-large.jpg'
      },
      permalink_url: 'http://soundcloud.com/smallenginerepair/serve-yourself-1',
      artwork_url: 'https://i1.sndcdn.com/artworks-000062914786-jz7eos-large.jpg',
      waveform_url: 'https://w1.sndcdn.com/1UiLD1NUwF9o_m.png',
      stream_url: 'https://api.soundcloud.com/tracks/120422553/stream?client_id=a3e059563d7fd3372b49b37f00a00bcf',
      playback_count: 112201,
      download_count: 0,
      favoritings_count: 2381,
      comment_count: 179,
      likes_count: 2381,
      reposts_count: 842,
      attachments_uri: 'https://api.soundcloud.com/tracks/120422553/attachments?client_id=a3e059563d7fd3372b49b37f00a00bcf',
      policy: 'ALLOW'
    }
  */
});
```

## LICENSE

(MIT License)

Copyright (c) 2014 Fractal <contact@wearefractal.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.




[gittip-url]: https://www.gittip.com/WeAreFractal/
[gittip-image]: http://img.shields.io/gittip/WeAreFractal.svg

[downloads-image]: http://img.shields.io/npm/dm/soundcloud-lookup.svg
[npm-url]: https://npmjs.org/package/soundcloud-lookup
[npm-image]: http://img.shields.io/npm/v/soundcloud-lookup.svg

[travis-url]: https://travis-ci.org/wearefractal/soundcloud-lookup
[travis-image]: https://travis-ci.org/wearefractal/soundcloud-lookup.png?branch=master

[coveralls-url]: https://coveralls.io/r/wearefractal/soundcloud-lookup
[coveralls-image]: https://coveralls.io/repos/wearefractal/soundcloud-lookup/badge.png

[depstat-url]: https://david-dm.org/wearefractal/soundcloud-lookup
[depstat-image]: https://david-dm.org/wearefractal/soundcloud-lookup.png

[david-url]: https://david-dm.org/wearefractal/soundcloud-lookup
[david-image]: https://david-dm.org/wearefractal/soundcloud-lookup.png?theme=shields.io
