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
		expireAfterSeconds: 1800,
		default: Date.now(),
	},
});

const RequestToken = mongoose.model("requesttoken", RequestTokenSchema);

module.exports = RequestToken;
