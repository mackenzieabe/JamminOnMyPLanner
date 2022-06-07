var input = document.querySelector("#textarea")
var saveBtn = $('.save-btn')
var currentDay = document.querySelector("#currentDay")

const currentDate = moment().format('dddd, MMMM Do, YYYY '); // get current date
document.getElementById("currentDay").textContent = currentDate;
const hourDay = moment().hours()
const hourBlock = $('textarea')

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

saveBtn.on('click', function (event) {
  event.preventDefault()

  var timeBlockId = $(this).attr('id')
  var task = $(this).siblings('textarea').val()
  localStorage.setItem(timeBlockId, task)
  showTask()
})

function showTask() {
  for(var i = 9; i < 18; i++) {
    var currentTask = localStorage.getItem(i)
    $('#' + i).text(currentTask)
  }
}

showTask()