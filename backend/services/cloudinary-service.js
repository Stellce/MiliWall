const ReadableStream = require('stream').Readable;
const cloudinary = require('cloudinary').v2;

exports.uploadImage = async (file, url) => {
  let streamUpload = (file) => {
    return new Promise((resolve, reject) => {
      const handleUpload = (error, result) => result ? resolve(result) : reject(error);
      const stream = cloudinary.uploader.upload_stream({upload_preset: 'miliwall', folder: 'miliwall'}, handleUpload);
      ReadableStream.from(file.buffer).pipe(stream);        
    });
  };
  
  let result = await streamUpload(file).catch(err => console.error(err));
  return result.secure_url;
};
