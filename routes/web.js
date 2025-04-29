const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employeeController");

// Index - Show all employees
router.get("/", employeeController.index);

// New - Show form to add new employee
router.get("/new", employeeController.new);

// Create - Add new employee to database
router.post("/", employeeController.create);

// Edit - Show form to edit employee
router.get("/:id/edit", employeeController.edit);

// Update - Update employee in database
router.put("/:id", employeeController.update);

// Delete - Remove employee from database
router.delete("/:id", employeeController.delete);

module.exports = router;
