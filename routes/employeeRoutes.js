const express = require('express');
const {
  getAllEmployees,
  getEmployeeById,
  addEmployee,
  updateEmployee,
  deleteEmployee,
  searchEmployee,
} = require('../controllers/employeeController');

const router = express.Router();

router.post('/', addEmployee);
router.get('/', getAllEmployees);
router.get('/:id', getEmployeeById);
router.put('/:id', updateEmployee);
router.delete('/:id', deleteEmployee);
router.get('/search', searchEmployee);

module.exports = router;
