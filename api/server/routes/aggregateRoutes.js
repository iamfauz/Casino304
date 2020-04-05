import { Router } from 'express';
import GamePlayController from '../controllers/GamePlayController';
import GameController from '../controllers/GameController';

const router = Router();

router.get('/total_rake_by_date', GameController.getTotalRakeByDate);
router.get('/total_games', GamePlayController.countGamesByPlayer);

export default router;