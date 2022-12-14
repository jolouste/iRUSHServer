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
		default: Date.now(),
	},
});

RequestTokenSchema.index({ createdAt: 1 }, { expireAfterSeconds: 1800 });
const RequestToken = mongoose.model("requesttoken", RequestTokenSchema);

module.exports = RequestToken;
