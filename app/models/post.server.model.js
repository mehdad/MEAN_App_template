var PostSchema({
	title: {
		type: String,
		required: true
	},
	content: {
		type: String,
		required: true
	},
	author: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Post',PostSchema);