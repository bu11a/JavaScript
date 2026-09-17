let students = [
    {
        id: 1,
        name: "Max",
        age: 16,
        isActive: true
    },
    {
        id: 2,
        name: "John",
        age: 17,
        isActive: false
    },
    {
        id: 3,
        name: "Emma",
        age: 16,
        isActive: true
    },
    {
        id: 4,
        name: "Daniel",
        age: 15,
        isActive: false
    }
];

students.push({
    id: 5,
    name: "Michael",
    age: 17,
    isActive: true
});

students.forEach(function(student) {
    console.log(student.name);
});

let activeStudents = students.filter(function(student) {
    return student.isActive === true;
});

console.log(activeStudents);

let student = students.find(function(student) {
    return student.id === 3;
});

console.log(student);