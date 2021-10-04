const AdmZip = require('adm-zip');
var fs = require('fs');
var uploadDir = fs.readdirSync(__dirname + "/uploads");
function getzip(req, res) {
    const zip = new AdmZip();
    for (var i = 0; i < uploadDir.length; i++) {
        zip.addLocalFile(__dirname + "/uploads/" + uploadDir[i]);
    }
    // Define zip file name
    const downloadName = `${Date.now()}.zip`;

    const data = zip.toBuffer();

    // save file zip in root directory
    // zip.writeZip(__dirname + "/" + downloadName);

    // code to download zip file

    res.set('Content-Type', 'application/octet-stream');
    res.set('Content-Disposition', `attachment; filename=${downloadName}`);
    res.set('Content-Length', data.length);
    res.send(data);


}
module.exports = {
    getzip,

};