const Employee = require('../models/employeeModel');

exports.getAllEmployees = async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
};

exports.getEmployeeById = async (req, res) => {
  const employee = await Employee.findById(req.params.id);
  res.json(employee);
};

exports.addEmployee = async (req, res) => {
  const newEmployee = new Employee(req.body);
  await newEmployee.save();
  res.status(201).json(newEmployee);
};

exports.updateEmployee = async (req, res) => {
  const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedEmployee);
};

exports.deleteEmployee = async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.json({ message: 'Employee deleted' });
};

exports.searchEmployee = async (req, res) => {
  const { department, position } = req.query;
  const criteria = {};
  if (department) criteria.department = department;
  if (position) criteria.position = position;
  const employees = await Employee.find(criteria);
  res.json(employees);
};

