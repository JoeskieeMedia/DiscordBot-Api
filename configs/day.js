const dayjs = require( 'dayjs' );

const date = ( timestamp ) => {
	const format = dayjs( timestamp ).format( 'ddd MM-DD-YY h:mm:ssa' );
	return format;
};
module.exports = date;
