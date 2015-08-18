var fs = require('fs')
var parseTorrentFile = require('../')
var test = require('tape')

var leavesAnnounceList = fs.readFileSync(__dirname + '/torrents/leaves-empty-announce-list.torrent')

test('parse torrent with empty announce-list', function (t) {
  t.deepEquals(parseTorrentFile(leavesAnnounceList).announce, ['udp://tracker.publicbt.com:80/announce'])
  t.end()
})
