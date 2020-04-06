import { Router } from 'express';
import BranchController from '../controllers/BranchController';

const router = Router();

/**
 * Define all branch related endpoints/routes i.e all endpoints starting with "http://localhost:3000/branch"
 * */

router.get('/', BranchController.getTableTypesForEachBranch);

export default router;