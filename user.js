var Student = (function () {
    function Student(fname, mname, lname) {
        this.fname = fname;
        this.mname = mname;
        this.lname = lname;
        this.fullName = fname + " " + mname + " " + lname;
    }
    return Student;
}());
function greet(person) {
    return person.fname + "" + person.lname;
}
var user = new Student("Prakhar", "Gupta", "Porwal");
document.body.innerHTML = greet(user);
//# sourceMappingURL=user.js.map