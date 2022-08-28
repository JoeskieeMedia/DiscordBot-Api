const expModel = require( '../db/models/index' ).exp;
const exp = {
	byId: async function( req, res ) {
		const find = req.body.id;
		const doc = await expModel.findOne( {
			id: find, 
		} );
		res.send( doc );
        
	},
	create: async function( req, res ){
		const model = new expModel( {
			guildId: req.body.guildId,
			id: req.body.id,
			level: req.body.level,
			xp: req.body.xp,
		}
		);
		
		model.save().then( function ( err ) {
			if ( err ) res.send( err );
			res.send( 'added to db' );
		} );
		
	},
	update: function( req, res ){
		const update = {
			guildId: req.body.guildId,
			id: req.body.id,
			level: req.body.level,
			xp: req.body.xp,
		};
        
		const opts = {
			new: true,
			upsert: true,
		};

		const filter = {
			guildId: req.body.guildId,
			id: req.body.id, 

		};
		
		expModel.findOneAndUpdate( 
			filter, update, opts, function( err, element ){
				res.send( err || element );
			} 
		);
	},
    
};

module.exports = exp;