import { Router } from 'express';
import EmployeeController from '../controllers/EmployeeController';

const router = Router();

/**
 * Define all employee related endpoints/routes i.e all endpoints starting with "http://localhost:3000/employee"
 * */

// body of request should include all fields of employee filled with data
router.post('/', EmployeeController.addEmployee);

// Body of request should include all fields of employee, any fields not being updated leave blank
router.patch('/:id', PlayerController.updateEmployeeById);

export default router;