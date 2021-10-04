const AdmZip = require("adm-zip");
var fs = require("fs");
const path = require("path");

function getzip(req, res) {
  const zip = new AdmZip();
  const uploadsPath = path.join(__dirname, "..", "uploads");
  var uploadDir = fs.readdirSync(uploadsPath);
  for (var i = 0; i < uploadDir.length; i++) {
    zip.addLocalFile(path.join(__dirname, "..", "uploads", uploadDir[i]));
  }
  // Define zip file name
  const downloadName = `${Date.now()}.zip`;
  const data = zip.toBuffer();

  // save file zip in root directory
  // zip.writeZip(path.join(__dirname, "..", "zipfiles", downloadName));

  res.set("Content-Type", "application/octet-stream");
  res.set("Content-Disposition", `attachment; filename=${downloadName}`);
  res.set("Content-Length", data.length);

  res.send(data);
}
module.exports = {
  getzip,
};
