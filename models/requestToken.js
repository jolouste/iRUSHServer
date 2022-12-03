const mongoose = require("mongoose");
const RequestTokenSchema = mongoose.Schema({
	clientId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "client",
		required: true,
	},
	token: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: new Date(Date.now()),
		expires: 1800,
	},
});

const RequestToken = mongoose.model("requesttoken", RequestTokenSchema);

module.exports = RequestToken;