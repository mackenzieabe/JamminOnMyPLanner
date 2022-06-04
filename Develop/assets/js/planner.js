var input= document.querySelector("#textarea")
var saveBtn= document.querySelector(".save-btn")
var currentDay=document.querySelector("#currentDay")
//var day= ["Sunday", "Monday","Tuesday","Wednesday", "Thursday","Friday","Saturday"]
//document.getElementById('currentDay').innerHTML= day[""];

//const currentDate = moment().format('MM/DD/YYYY'); // get current date
//document.getElementById("currentDay").textContent = currentDate;
//const dayName = getDayName(dayIndex)

var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

var d = new Date();
let day = weekday[d.getDay()];
console.log(weekday);
$('#currentDay').html("Today is: " + day);

//var today= new Date();
//console.log(today);

var checkTime= function() {
    var hour= $(".hour").text().trim();

    var time= moment(hour, "LT");
    console.log(time)

    if (moment().isAfter(time)) {
        $(".hour").addClass(".past");
    } else if (moment().isBefore(time)) {
        $(".hour").addClass(".future");
    } else {
        $(".hour").addClass(".present");
    }
}
checkTime();
console.log(checkTime);

function setColor(element, color) {
  element.style.backgroundColor = color;
}

input.innerHTML= localStorage.getItem('value');

saveBtn.onclick=function() {
        localStorage.setItem('value', input.value)
        localStorage.getItem('value')
    
    };


