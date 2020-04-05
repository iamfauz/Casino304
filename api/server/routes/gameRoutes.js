import { Router } from 'express';
import GameController from '../controllers/GameController';

const router = Router();

/**
 * Define all game related endpoints/routes i.e all endpoints starting with "http://localhost:3000/players"
 * */


router.get('/', GameController.getAllGames);
router.patch('/:id', GameController.getGameByID);
router.get('/date', GameController.getAllGamesByDate);
router.get('/player', GameController.getAllGamesByPlayer);

export default router;