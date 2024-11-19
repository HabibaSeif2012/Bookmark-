var bookmarkNameInput=document.getElementById("bookmarkName");
var bookmarkUrlInput=document.getElementById("bookmarkURL");
var siteList;
if(localStorage.getItem("bookMarker")==null){
    siteList=[];
}
else{
    siteList=JSON.parse(localStorage.getItem("bookMarker"));
    display();
}

function  addSite(){
    if(bookmarkUrlInput.value.includes("http://")){
        alert("Invalid URL");
        }
        else{
            var site={
                name:bookmarkNameInput.value,
                Url:bookmarkUrlInput.value,
               }  
        }
   
  
   siteList.push(site);
   localStorage.setItem("bookMarker", JSON.stringify(siteList));
   clear();
   
   display();
 

}
function clear(){
    bookmarkNameInput.value=null; 
    bookmarkUrlInput.value=null; 
}
function display(){
   container="";
   for(var i=0;i<siteList.length;i++){
    container+= `<tr><td>${i+1}</td>
    <td>${siteList[i].name}</td>
    <td><a href="${siteList[i].Url}" target="blank"><button class="btn btn-success text-white px-3 py-2"  > <i class="fa-solid fa-eye "></i> Visit </button></a>  </td>
    <td><button onclick="delBook( ${i})" class="btn btn-danger text-white px-3 py-2"><i class="fa-solid fa-trash"></i>Delete</button> </td></tr>`;
   
   }
   document.getElementById("tableContent").innerHTML = container;

   
}
function delBook(i){
siteList.splice(i, 1);
display();

}
