const guildModel = require( '../db/models/index' ).guild;
const guild = {
	byId: async function( req, res ) {
		const find = req.body;
		console.log( find );
		const doc = await guildModel.findOne( find );
		res.send( 
			doc 
		);
	},
	create: async function( req, res ){
		const model = new guildModel(
			{
				_id: req.body._id,
				botName: req.body.botName,
				welcomeChannel: req.body.welcomeChannel,
				welcomeMessage: req.body.welcomeMessage,
			}
		);
		const exists = await guildModel.exists( {
			Profile: req.body.Profile, 
		} );
		if( exists ){
			res.send(
				`Guild model already exists for <#${req.body._id}>` 
			);
		}else{
			model.save().then( function ( err ) {
				if ( err ) res.send( err );
				res.send( 'added to db' );
			} );
		}
	},
	update: function( req, res ){
		const update = {
			_id: req.body._id,
			botName: req.body.botName,
			welcomeMessage: req.body.welcomeMessage,
		};
    
		const opts = {
			returnNewDocument: true, 
		};
		const filter = {
			_id: req.body._id, 
		};
    
		guildModel.findOneAndReplace( 
			filter,
			update, 
			opts, 
			function( err, element ){
				res.send( err || element );
			
			} );
	},
    
};

module.exports = guild;