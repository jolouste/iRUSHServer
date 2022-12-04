const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const resetTokenSchema = mongoose.Schema({
	userId: {
		type: Schema.Types.ObjectId,
		ref: "user",
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

const ResetToken = mongoose.model("resettoken", resetTokenSchema);

module.exports = ResetToken;
