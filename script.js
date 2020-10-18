// Step 1: use moment to display current date & time
// create variable for time, edit format and push to new variable

var time = moment();
var date = time.format("MM/DD/YYYY");
var hour = moment().hour();
console.log(time);
$("#currentDay").text("Today's Date is " + date);

// Step 2: display past, current, and upcoming times in different colors
// loop through current time to add highlight attributes to appropriate hours

function currentTime() {
    for (let i = 8; i < 19; i++) {

        var currentHour = "#" + i;
        var scheduleHour = parseInt($(currentHour).attr("id"));
        $(currentHour).removeClass();

        if (
            scheduleHour > hour) {
            $(currentHour).attr("class", "row future");
        }
        else if (
            scheduleHour === hour) {
            $(currentHour).attr("class", "row present");
        }
        else if (
            scheduleHour < hour) {
            $(currentHour).attr("class", "row past");
        }
    }
} currentTime();

// Step 3: capture user input and save to local storage


// Step 4: loop through local storage to refresh page with events from local storage

