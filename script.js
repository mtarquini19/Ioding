// Step 1: use moment to display current date & time
// create variables

var time = moment();
var date = time.format("MMM DD YYYY");
console.log(time);
$("#currentDay").text("Today is " + date);

// Step 2: display past, current, and upcoming times in different colors


// Step 3: capture user input and save to local storage


// Step 4: loop through local storage to refresh page with current events