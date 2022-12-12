const mongoose = require("mongoose");
const resetTokenSchema = mongoose.Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "user",
		required: true,
	},
	token: {
		type: String,
		required: true,
		expires: 1800,
	},
	createdAt: {
		type: Date,
		default: Date.now(),
	},
});

const ResetToken = mongoose.model("resettoken", resetTokenSchema);

module.exports = ResetToken;
