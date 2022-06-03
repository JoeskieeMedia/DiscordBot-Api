const router = require( 'express' ).Router();
const expController = require( '../controllers/Exp' );

router.get( '/', expController.byId );

router.post( '/create', expController.create );

router.put( '/update', expController.update );

module.exports = router;