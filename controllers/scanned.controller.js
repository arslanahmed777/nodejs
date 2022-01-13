var formidable = require('formidable');
var util = require('util');

var fs = require('fs');
async function upload_Scanned(req, res) {
    console.log(req.form);
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        console.log(util.inspect({
            fields: fields,
            files: files
        }));

        fs.readFile(files.RemoteFile.path, function (err, data) {
            // save file from temp dir to new dir
            var newPath = __dirname + "/uploaded/" + files.RemoteFile.name;
            fs.writeFile(newPath, data, function (err) {
                if (err) throw err;
                console.log('file saved');
                res.end();
            });
        });
    });
    console.log('file saved');
    res.send("All is well")

}

module.exports = {
    upload_Scanned,
};
