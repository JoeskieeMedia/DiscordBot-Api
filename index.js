const config = require( './configs/config' );
require( './db/index' );
const app = require( 'express' )();
const volleyball = require( 'volleyball' );
const logger = require( './configs/pino' );
const bodyParser = require( 'body-parser' );
const expRoute = require( './routes/Exp' );
const guildRoute = require( './routes/Guild' );
// Middlewares
app.use( volleyball );
app.use( bodyParser.json() );

// Routes

app.use( '/api/exp', expRoute );
app.use( '/api/guild', guildRoute );
 
const server = app.listen( config.Port, config.Host, () =>
	logger.info(
		`Your server has started here: http://${
			server.address().address
		}:${
			server.address().port
		}`
	)
);