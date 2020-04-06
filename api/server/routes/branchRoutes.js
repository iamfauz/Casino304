import { Router } from 'express';
import BranchController from '../controllers/BranchController';

const router = Router();

/**
 * Define all branch related endpoints/routes i.e all endpoints starting with "http://localhost:3000/branches"
 * */

router.get('/', BranchController.getTableTypesForEachBranch);

router.get('/branchnames', BranchController.getAllBranchNames);

export default router;