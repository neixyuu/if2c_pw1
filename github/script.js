let list = document.getElementById("listUser")

fetch("https://gorest.co.in/public/v2/users")
.then(Response => Response.json())
.then(data => {
    console.log(data)
    data.forEach(showUser)
})

function showUser(val, idx){
    list.innerHTML += '<li>$(val.name)</li>'
}