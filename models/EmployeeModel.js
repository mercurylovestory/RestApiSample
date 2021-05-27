var mongoose = require("mongoose");

var EmployeeSchema = new mongoose.Schema({
	empId: {type: Number},
	firstName: {type: String},
	lastName: {type: String},
	midName: {type: String},
	emailId: {type: String},
	password: {type: String},
	positionId: {type: Number},
	depId: {type: Number},
	birthDate: {type: Date},
	age: {type: Number},
	sex: {type: Number},
	address: {type: String},
	SIN: {type: Number},
	resume: {type: String},
	employedDate: {type: Date},
	supervisorId: {type: Number},
	isConfirmed: {type: Boolean, default: 0},
	confirmOTP: {type: String},
	otpTries: {type: Number, default: 0},
	status: {type: Boolean, default: 1}
});

// Virtual for user's full name
// EmployeeSchema
// 	.virtual("fullName")
// 	.get(function () {
// 		return this.firstName + " " + this.lastName;
// 	});


module.exports = mongoose.model('Employee', EmployeeSchema, 'employee');