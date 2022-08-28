const {
	model,
	Schema, 
} = require( 'mongoose' );

const reqString = {
	required: true,
	type: String,
};
const reqNumber = {
	default: 1, 
	required: true,
	type: Number,
};


const ExpSchema = new Schema(
	{
		guildId: reqString,
		id: reqString,
		level: reqNumber,
		xp: reqNumber,
        
	},
	{
		unique: false,
		versionKey: false,
	}
);
const ExpModel = model( 'Exp', ExpSchema );
module.exports = ExpModel;