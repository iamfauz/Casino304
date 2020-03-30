import { Router } from 'express';
import PlayerController from '../controllers/PlayerController';

const router = Router();

// Define all player related endpoints/routes i.e all endpoints starting with "http://localhost:3000/players"
router.get('/', PlayerController.getAllPlayers);

export default router;