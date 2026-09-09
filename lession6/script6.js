// const inputTest = document.getElementById("inputTest")
// inputTest.addEventListener("input", function(event){
//     console.log(event)
//     console.log(event.data)
//     document.getElementById("inputH1").textContent = inputTest.value
// })

// const city = document.getElementById("city")
// city.addEventListener("change", function(){
//     console.log(city.value)
// })

// const form = document.getElementById("form")

// form.addEventListener("submit", function(event){
//     event.preventDefault()
//     console.log("Send")
// })

users = [1, 2, 3, 4];

const addUsers = document.getElementById("AddUsers")
const username = document.getElementById("username")

addUsers.addEventListener("click",function(event){
    if (event.target.id === ("addUser"))
    {
        let user = {
            id: Date.now(),
            name: username.value
        }
        users.push(user);
        console.log(users);
    }
});

users.forEach(function(user) {
    console.log(user)
}); 
