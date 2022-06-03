const pino = require( 'pino' );

const logger = pino( {
	transport: {
		options: {
			colorize: true,
			ignore: 'pid,hostname',
			translateTime: 'SYS:DDDD mmm dd yyyy  h:MMtt  Z',
		},
		target: 'pino-pretty',
	},
} );

module.exports = logger;
