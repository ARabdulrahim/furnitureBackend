import multer from 'multer';
import { cloudinary } from './cloudinary.js';
import {CloudinaryStorage} from 'multer-storage-cloudinary';

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'furniture_shoap',
      allowedFormats: ["jpg", "png", "jpeg", "gif", "webp"],
    },
  });

  const upload= multer({ storage: storage });
  export{upload};
  