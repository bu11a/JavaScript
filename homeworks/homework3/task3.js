let students = [
    {
        name: "Никита",
        age: 15
    },
    {
        name: "Артём",
        age: 16
    },
    {
        name: "Данил",
        age: 15
    }
];

localStorage.setItem("students", JSON.stringify(students));

function showStudents() {
    const savedStudents = localStorage.getItem("students");

    if (savedStudents) {
        students = JSON.parse(savedStudents);
    }

    const studentsList = document.getElementById("studentsList");

    studentsList.innerHTML = "";

    students.forEach(function(student, index) {
        studentsList.innerHTML +=
            "<p>" +
            (index + 1) + ". " +
            student.name +
            ", " +
            student.age +
            " лет" +
            "</p>";
    });
}

showStudents();

document.getElementById("addButton").onclick = function() {

    students.push({
        name: "Новый студент",
        age: 15
    });

    localStorage.setItem("students", JSON.stringify(students));

    showStudents();
};

document.getElementById("clearButton").onclick = function() {

    localStorage.removeItem("students");

    students = [];

    showStudents();
};