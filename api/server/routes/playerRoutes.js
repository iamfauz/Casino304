import { Router } from 'express';
import PlayerController from '../controllers/PlayerController';

const router = Router();

/**
 * Define all player related endpoints/routes i.e all endpoints starting with "http://localhost:3000/players"
 * */


router.get('/', EmployeeController.getAllPlayers);

// Body of request should include email and password
router.get('/login', PlayerController.loginByPlayer);

router.delete('/:id', PlayerController.deletePlayerById);

export default router;