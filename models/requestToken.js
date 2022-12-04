const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const RequestTokenSchema = mongoose.Schema({
	clientId: {
		type: Schema.Types.ObjectId,
		ref: "client",
		required: true,
	},
	token: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now(),
		expires: 1800,
	},
});

const RequestToken = mongoose.model("requesttoken", RequestTokenSchema);

module.exports = RequestToken;
