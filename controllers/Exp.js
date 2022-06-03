const expModel = require( '../db/models/index' ).exp;
const exp = {
	byId: async function( req, res ) {
		const find = req.body._id;
		console.log( find );
		const doc = await expModel.findOne( {
			_id: find, 
		} );
		res.send( doc );
        
	},
	create: async function( req, res ){
		const model = new expModel(
			{
				_id: req.body._id,
				guildId: req.body.guildId,
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
			_id: req.body._id,
			guildId: req.body.guildId,
			level: req.body.level,
			xp: req.body.xp,
		};
        
		const opts = {
			returnNewDocument: true, 
		};
		const filter = {
			_id: req.body._id, 
		};
		
		expModel.findOneAndReplace( 
			filter, update, opts, function( err, element 
			)
			{
				
				res.send( err || element );
			
			} 
		);
	},
    
};

module.exports = exp;