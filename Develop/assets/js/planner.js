var input= document.querySelector("#textarea")
var saveBtn= document.querySelector(".save-btn")
var currentDay=document.querySelector("#currentDay")
//var day= ["Sunday", "Monday","Tuesday","Wednesday", "Thursday","Friday","Saturday"]
//document.getElementById('currentDay').innerHTML= day[""];
const currentDate = moment().format('MM/DD/YYYY'); // get current date
document.getElementById("currentDay").textContent = currentDate;
const dayName = getDayName(dayIndex)



input.innerHTML= localStorage.getItem('value');

saveBtn.onclick=function() {
        localStorage.setItem('value', input.value)
        localStorage.getItem('value')
    
    };



