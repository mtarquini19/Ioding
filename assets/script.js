// Step 1: use moment to display current date & time
// create variable for time, edit format and push to new variable
$(document).ready(function () {

    var time = moment();
    var date = time.format("MMMM Do, YYYY");
    var hour = moment().hour();

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
            };
        };
    } currentTime();

    // Step 3: capture user input and save to local storage

    $(".saveBtn").on("click", function () {

        // check for button response
        console.log("the buttons work!");

        // take input from clicked button
        var addEvent = $(this).attr("data-value");

        var input = $(this).siblings(".event").val();
        console.log(input);

        // save input to local storage
        localStorage.setItem(addEvent, input);
        console.log(input);
    });

    // Step 4: loop through local storage to refresh page with events from local storage
    // define array containing hour blocks
    // var timeBlock = ["#8", "#9", "#10", "#11", "#12", "#13", "#14", "#15", "#16", "#17", "#18"];

    // loop through local storage to display inputs
    for (let i = 8; i < 19; i++) {
        // let saved = $(".event");
        // console.log(saved);
        $(`#${i} .event`).val(localStorage.getItem(`#${i}`))
        // $(timeBlock[i]).val(localStorage.getItem(timeBlock[i]));
    };

});