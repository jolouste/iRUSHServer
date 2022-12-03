const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "./uploads");
	},
	filename: function (req, file, cb) {
		let ext = path.extname(file.originalname);
		cb(null, file.fieldname + "-" + Date.now() + ext);
	},
});

const upload = multer({
	storage: storage,
	fileFilter: function (req, file, cb) {
		if (
			file.mimetype === "application/pdf" ||
			file.mimetype === "text/csv" ||
			file.mimetype === "image/png" ||
			file.mimetype === "image/jpeg" ||
			file.mimetype === "image/jpg" ||
			file.mimetype === "application/vnd.ms-excel" ||
			file.mimetype ===
				"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
		) {
			cb(null, true);
			console.log("File uploaded successfully. File type: " + file.mimetype);
		} else {
			cb("File Type is not supported.", false);
		}
	},
	limits: {
		fileSize: 1024 * 1024 * 10,
	},
});

module.exports = upload;
