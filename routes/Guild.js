const router = require( 'express' ).Router();
const guildController = require( '../controllers/Guild' );

router.get( '/', guildController.byId );

router.post( '/create', guildController.create );

router.put( '/update', guildController.update );

module.exports = router;