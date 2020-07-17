const { resolve } = require('path');
const { createWriteStream, unlinkSync } = require('fs');
const { sync } = require('mkdirp');
const { generate } = require('shortid');
const uploads = require('../models/uploadModel');
const path = require("path");

const storeDB = async (file) => {
    const { id, filename, mimetype, path } = file;
    try {
        let file = new uploads({ id, filename, mimetype, path });
        return await file.save();

    } catch (err) {
        return err
    }
}

const storeFS = async ({ stream, filename, folder }) => {
    const id = generate()
    const path = `files/${folder}/${id}-${filename}`
    return new Promise((resolve, reject) =>
        stream.on('error', error => {
            if (stream.truncated) unlinkSync(path)
            reject(error)
        })
          //  local database
            .pipe(createWriteStream(path))
            //gcp database
            // .pipe(filesBucket.file(path).createWriteStream({
            //     resumable: false,
            //     gzip: true
            // }))
            .on('error', error => reject(error))
            .on('finish', () => resolve({ id, path }))
    )
}
const fileUpload = {
    upload: async function (file, folder) {
        const uploadDir = resolve(__dirname, `../files/${folder}`)

        // Ensure upload directory exists.
        sync(uploadDir)
        const { createReadStream, filename, mimetype } = await file
        const stream = createReadStream()
        const { id, path } = await storeFS({ stream, filename, folder })
        return storeDB({ id, filename, mimetype, path })
    }
}
module.exports = fileUpload 