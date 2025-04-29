
const Employee = require("../models/Employee");

// Show all employees
exports.index = async (req, res) => {
  try {
    const employees = await Employee.find().sort({ hireDate: -1 });
    res.render("employees/index", { employees });
  } catch (err) {
    res.status(500).send("Error retrieving employees");
  }
};

// Show form to create new employee
exports.new = (req, res) => {
  res.render("employees/new");
};

// Create new employee
exports.create = async (req, res) => {
  const { name, position, department } = req.body;
  try {
    await Employee.create({ name, position, department });
    res.redirect("/employees");
  } catch (err) {
    res.status(400).send("Error creating employee");
  }
};

// Show form to edit an employee
exports.edit = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    res.render("employees/edit", { employee });
  } catch (err) {
    res.status(404).send("Employee not found");
  }
};

// Update employee
exports.update = async (req, res) => {
  const { name, position, department } = req.body;
  try {
    await Employee.findByIdAndUpdate(req.params.id, {
      name,
      position,
      department,
    });
    res.redirect("/employees");
  } catch (err) {
    res.status(400).send("Error updating employee");
  }
};

// Delete employee
exports.delete = async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);
    res.redirect("/employees");
  } catch (err) {
    res.status(400).send("Error deleting employee");
  }
};
