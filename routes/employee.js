var mongoose = require('mongoose');
var Employee = mongoose.model('Employee');

exports.getAllEmployees = function(req, res) {
	Employee.find(function(err, employees) {
		res.json(employees);
		console.log(employees);
	});
};
exports.createEmployee = function(req, res) {
	Employee.create(req.body, function (err, post) {
		 res.json("Inserted successfully");
	});
};

exports.getEmployee = function(req, res) {
	Employee.findById(req.params.id, function (err, post) {
	   res.json(post);
    });
};

exports.delteEmployee = function(req, res) {
	Employee.findByIdAndRemove(req.params.id,function (err, post) {
	   res.json("Deleted successfully");
	});
};

exports.updateEmployee = function(req, res) {
	Employee.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
	    if (err) return next(err);
	    res.json("Updated successfully");
	});
};



