const user = {
    name: "Никита",
    age: 15,
    city: "Алматы"
};

const userJSON = JSON.stringify(user);

localStorage.setItem("user", userJSON);

const savedUser = localStorage.getItem("user");

const parsedUser = JSON.parse(savedUser);

document.getElementById("result").innerHTML =
    "Имя: " + parsedUser.name + "<br>" +
    "Город: " + parsedUser.city;