// Storage configuration for uploading images to '/public/images/...' folder
const multer = require('multer');


const storageConfig = multer.diskStorage({
  destination: (req, file, callback) => {
    if(file.fieldname == 'animeIMG') {
      callback(null, 'public/images/AnimeImages');
    } else if(file.fieldname == 'AnimePoster') {
      callback(null, 'public/images/AnimePosters');
    } else if(file.fieldname == 'userAvatar') {
      callback(null, 'public/images/usersAvatars');
    }
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  }
})


module.exports = storageConfig;