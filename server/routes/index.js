const router = require ( 'express' ).Router()
const newsController = require ( '../controllers/newsController' )
const eventController = require ( '../controllers/eventController' )
const userController = require ( '../controllers/userController' )
const authentication = require ( '../middlewares/authentication' )

router.get ( '/register', userController.register )
router.post ( '/login', userController.login )
// router.get ( '/news', newsController.getAll )
// router.get ( '/events', eventController.getAll )
// router.get ( '/news/:id', newsController.findOne )
// router.get ( '/events/:id', eventsController.findOne )

router.use ( authentication )
// router.post ( '/news', newsController.create )
// router.post ( '/events', eventController.create )
// router.put ( '/news/:id', newsController.update )
// router.put ( '/events/:id', eventController.update )
// router.delete ( '/news/:id', newsController.destroy )
// router.delete ( '/events/:id', eventController.destroy )
// router.get ( '/suggest', userController.getAll )

module.exports = router