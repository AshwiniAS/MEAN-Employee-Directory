var mongoose = require( 'mongoose' );

var dbURI = 'mongodb://localhost/employeedb';


//var dbURI = 'mongodb://your_username:your_password@ds043615.mongolab.com:43615/employeedirectory';


mongoose.connect(dbURI);


mongoose.connect(dbURI, function(err) {
	if (err) {
		console.log('connection error', err);
	} else {
		console.log('connection successful');
	}
});


var employeeSchema = new mongoose.Schema({
	Name : String,
	Email: String,
	Date_of_birth: Date,
	Department: String,
	Gender: String,
	Age: ({ $subtract: [ new Date(), "$Date_of_birth" ] })/(365*24*60*60*1000) 
});
mongoose.model("Employee",employeeSchema);
