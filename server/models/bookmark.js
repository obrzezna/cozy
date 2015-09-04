americano = require('americano');
cozydb = require('cozydb');
// The americano plugin wraps the "db.define" JugglingDB function in a simpler "getModel" call
module.exports = Bookmark = americano.getModel('files', {

//files
/*  "path": String,
    "name": String,
    "docType": String,
    "mime": String,
    "creationDate": String,
    "lastModification": String,
    "class": String,
    "size": Number,
    "binary": Object,
    "checksum": String,
    "modificationHistory": Object,
    "clearance": cozydb.NoSchema,
    "tags": [String],
    "uploading": Boolean
*/
// bookmarks
    "id": String,
    "title": String,
    "url": { "type": String, "default": ""}


});

// You can easily define here some helpers or method for bookmarksBookmark.all = function(callback) {
Bookmark.all = function(callback) {
    Bookmark.request("all", {}, function(err, bookmarks) {
       callback(null, bookmarks);
    });
};
