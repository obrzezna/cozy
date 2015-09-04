Bookmark = require('../models/bookmark');
fs = require('fs');

module.exports.list = function(req, res) {
    Bookmark.all(function(err, bookmarks) {
        if(err != null) {
            console.log("An error has occurred -- " + err);
        }
        else {
            data = {"bookmarks": bookmarks}
            res.render('index.jade', data, function(err, html) {
                res.send(200, html);
            });
        }
    });
};

// We define a new route that will handle bookmark creation
module.exports.add = function(req, res) {
    Bookmark.create(req.body, function(err, bookmark) {
        if(err != null) {
            res.send(500, "An error has occurred -- " + err);
        }
        else {
//MACIEK _ TUTAJ PRZY DODAWANIU BOOKMARKA ZALACZAMY BINARKE (test.js) do DANEGO BOOKMARKA - trzeba bedzoe tu zrobic petle ktora wgra wszystkie pliki od Konrada G przyczepiajac je do odpowiednikow bookmarkow pojedynczych dla kazdego pliku

		stream = fs.createReadStream('./test.js')
		bookmark.attachBinary(stream, function(err) {
    		console.log(err);
		});
            res.redirect('back');
        }
    });
};

// We define another route that will handle bookmark deletion
module.exports.delete = function(req, res) {
    Bookmark.find(req.params.id, function(err, bookmark) {
        if(err != null) {
            res.send(500, "Bookmark couldn't be retrieved -- " + err);
        }
        else if(bookmark == null) {
            res.send(404, "Bookmark not found");
        }
        else {
            bookmark.destroy(function(err) {
                if(err != null) {
                    res.send(500, "An error has occurred -- " + err);
                }
                else {
                    res.redirect('back');
                }
            });
        }
    });
};
