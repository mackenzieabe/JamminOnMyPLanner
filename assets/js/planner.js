
//Setting variables so that I can call on them from the HTML doc
var input = document.querySelector("#textarea")
var saveBtn = $('.save-btn')
var currentDay = document.querySelector("#currentDay")

//moment() formats the current day/date in the header with the 'currentDay' ID
const currentDate = moment().format('dddd, MMMM Do, YYYY '); // get current date
document.getElementById("currentDay").textContent = currentDate;
const hourDay = moment().hours()
const hourBlock = $('textarea')

//currentHour variable grabs the id for each hour div and compares that to the current hour. Then it adds the class of past, present or future in order to color-code it correctly. 
hourBlock.each(function () {
  var currentHour = $(this).attr('id')
  if (hourDay > currentHour) {
    $(this).addClass('past')
  } else if (hourDay == currentHour) {
    $(this).removeClass('past')
    $(this).addClass('present')
  } else {
    $(this).removeClass('past')
    $(this).removeClass('present')
    $(this).addClass('future')
  }
})

//save button function 
saveBtn.on('click', function (event) {
  event.preventDefault()
  //the save button's sibling is the text area of the hour block. this saves the actual text area of the hour. 
  var timeBlockId = $(this).attr('id')
  var task = $(this).siblings('textarea').val()
  localStorage.setItem(timeBlockId, task)
  showTask()
})
//the showTask function loops through each hour/save button 
function showTask() {
  for (var i = 9; i < 18; i++) {
    var currentTask = localStorage.getItem(i)
    $('#' + i).text(currentTask)
  }
}

showTask()