fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function(responce){
        console.log(responce)
        responce.json()
    })
    .then(function(data){
        console.log(data)
    })