// async function moviesData(){
//  const response = await fetch("https://dummyapi.online/api/movies");
//  const movies = await response.json();
//  console.log (movies);

// var table = document.getElementById("table-body");

// movies.foreach(movie => {
//     row =document.createElement("tr");
//     row.innerHTML = ` <td>${movie.id}</td>
//     <td>${movie.movie}</td>
//     <td>${movie.rating}</td>
//     <td><img src"${movie.image}"/></td>`
//     table.appendChild(row);
    
// });
// }
// window.onload = moviesData();


fetch("https://dummyapi.online/api/social-profiles").then((data)=>{
    console.log(data)
    return data.json(); //converted to object
}).then((objectData)=>{
 console.log(objectData);

let tableData = "";
objectData.map((moviedetail)=>{
    tableData +=`
    <tr>
    <td>${moviedetail.userId}</td>
    <td>  <img src="${moviedetail.profilePic}"/>  </td>
    <td>${moviedetail.username}</td>
    <td>${moviedetail.email}</td>
    <td>${moviedetail.bio}</td>
   </tr>`
});
document.getElementById("table-body").innerHTML=tableData;
});

