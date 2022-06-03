const {
	model,
	Schema, 
} = require( 'mongoose' );

const reqString = {
	required: true,
	type: String,
};
const reqObj = {
	required: true,
	type: Object,
	
};

const GuildSchema = new Schema(
	{
		_id: reqString,
		botName: reqString,
		welcomeChannel: reqString,
		welcomeMessage: reqObj,

	},
	{
		unique: false,
		versionKey: false,
	}
);
const GuildModel = model( 'Guild', GuildSchema );
module.exports = GuildModel;
