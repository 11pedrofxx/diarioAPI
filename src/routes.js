import UserController from './controller/userController.js'
import DiarioController from './controller/diarioController.js'

export function addRoutes(api) {

    api.use(UserController);
    api.use(DiarioController);

}

