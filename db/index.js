const mongoose = require( 'mongoose' );
const logger = require( '../configs/pino' );
const config = require( '../configs/config' );


mongoose.connect(
	config.MongoDb,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}
);

const {
	connection: db, 
} = mongoose;

db.on( 'connected', () => {
	logger.info( 'Database connected' );
} );

db.on( 'disconnected', () => {
	logger.info( 'Database disconnected' );
} );

db.on( 'error', ( err ) => {
	logger.error( err );
} );

module.exports = {
	db, 
};
