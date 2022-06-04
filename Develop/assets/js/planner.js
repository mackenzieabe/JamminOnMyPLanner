var input= document.querySelector("#textarea")
var saveBtn= document.querySelector(".save-btn")

input.innerHTML= localStorage.getItem('value');

saveBtn.onclick=function() {
        localStorage.setItem('value', input.value)
        localStorage.getItem('value')
    
    };




//saveBtn.onclick= function(){
  //  event.preventDefault();
    //var element=event.target;
    //if(element.nodeName==="BUTTON") {
      //  saveTask();
   // }
//};
 //var saveTask = function() {
   //  localStorage.setItem("tasks", JSON.stringify(tasks));
 //};

//$(saveBtn).click(function(){
//if 

//var saveTask = function() {
  //  localStorage.setItem("textArea", JSON.stringify(textArea));
//}