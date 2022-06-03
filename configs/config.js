require( 'dotenv' ).config();


const config = {
	Host: process.env.HOST,
	MongoDb: `${process.env.URI}`,
	Port: process.env.PORT,
};

module.exports = config;