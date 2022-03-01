const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, '/src/images');
    },
    filename: function(req, file, callback) {
        callback(null, file.fieldname);
    }
});