const fs = require('fs');
const https = require('https');

exports.download = async (url, filePath) => new Promise((resolve, reject) => {
  const file = fs.createWriteStream(`${filePath}-tmp`);
  const fileInfo = {};

  const request = https.get(url, (response) => {
    if (response.statusCode !== 200) {
      reject(new Error(`Failed to get '${url}' (${response.statusCode})`));
      return;
    }

    fileInfo.mime = response.headers['content-type'];
    fileInfo.size = parseInt(response.headers['content-length'], 10);

    response.pipe(file);
  });

  file.on('finish', () => {
    if (!fs.existsSync(`${filePath}-tmp`)) return;
    fs.copyFile(`${filePath}-tmp`, filePath, (err) => {
      if (err) throw err;
      fs.unlink(`${filePath}-tmp`, (e) => {
        if (e) throw e;
        resolve(fileInfo);
      });
    });
  });

  request.on('error', (err) => {
    if (!fs.existsSync(`${filePath}-tmp`)) return;
    fs.unlink(`${filePath}-tmp`, () => reject(err));
  });

  file.on('error', (err) => {
    if (!fs.existsSync(`${filePath}-tmp`)) return;
    fs.unlink(`${filePath}-tmp`, () => reject(err));
  });

  request.end();
});
