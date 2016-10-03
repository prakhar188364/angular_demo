class Student{
	fullName : String;
	constructor(public fname, public mname, public lname){
		this.fullName =  fname+" "+mname+" "+lname;
	}
} 

interface Person{
	fname : String;
	lname : String;
}


function greet(person: Person){
	
	return person.fname+ ""+ person.lname;
}

var user = new Student("Prakhar", "Gupta", "Porwal")
document.body.innerHTML = greet(user);