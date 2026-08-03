// const form=()=>{
//     let status=true;
//     return new Promise((resolve,reject)=>{
//         if(status){
//             resolve("login success")
//         }
//         else{
//             reject("login failed")
//         }
//     })
// }

// //console.log(form())
// form().then((data)=>{console.log(data)}).catch(err)=>{
//     console.log("")
//     const registration=()=>{
//         return  new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 resolve("Registration successsfully completed")
//             },3000)
//         })
//     }
// }
// form().then((data)=>{console.log(data)}).catch(err)=>{
//     console.log(err)
//     const registration=()=>{
//         return  new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 resolve("login successsfully completed")
//             },1000)
//         })
//     }
// }
// // registration().then(data=>{console.log(data)).then(data=>{console.log(data)})
// registration().then

// fetch("dummyapi")
// .then(response=>response.json())
// .then(users=>{
//     const list=document.getElementById("userlist");
//     const table=documenet.getElementById("table-data");
//     users.forEach(user=>{
//         const li=document.createElement("li")
//         const tr=document.createElement("<tr><td>")
//         tr.innerHTML='<td></td><td></td><td></td>'

//         list.appendChild(li);
//     })
// })



fetch("https://dummyjson.com/users")
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        const users = data.users;
        const list = document.getElementById("userlist");
        const tableBody = document.getElementById("table-data");
        list.innerHTML = "";
        tableBody.innerHTML = "";

        users.forEach(user => {
            const li = document.createElement("li");
            li.textContent = `${user.firstName} ${user.lastName}`;
            list.appendChild(li);
            const tr = document.createElement("tr");
            tr.innerHTML = `<td>${user.id}</td>
                <td>${user.firstName} ${user.lastName}</td>
                <td>${user.email}</td>`;
            tableBody.appendChild(tr);
        });
    })
    .catch(error => {
        console.error("Error fetching users:", error);
    });