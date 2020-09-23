$(document).ready(function () {
// the line of code above is to start the script//
    //setting time to local and creating format//
    var gmtTime = moment();
    var localTime = gmtTime.local().format("dddd, MMMM Do YYYY, hh:mm:ss a");
    $("#currentDay").text(localTime);


// This function should select the indivual ids from the selector, parse the string to local storage, then return//
    function renderStorage() {
        $("#nine").text(JSON.parse(localStorage.getItem("hour-9")));
        $("#ten").text(JSON.parse(localStorage.getItem("hour-10")));
        $("#eleven").text(JSON.parse(localStorage.getItem("hour-11")));
        $("#twelve").text(JSON.parse(localStorage.getItem("hour-12")));
        $("#one").text(JSON.parse(localStorage.getItem("hour-1")));
        $("#two").text(JSON.parse(localStorage.getItem("hour-2")));
        $("#three").text(JSON.parse(localStorage.getItem("hour-3")));
        $("#four").text(JSON.parse(localStorage.getItem("hour-4")));
        $("#five").text(JSON.parse(localStorage.getItem("hour-5")));
    }
    renderStorage();
//this is the function to change the colors. it should change the color //
    function colorChange() {
        $('textarea').each(function () {
            var currentHour = parseInt(moment().hours());
            var textData = $('textarea').data('time');
            if (textData < currentHour) {
                $('textarea').removeClass("present");
                $('textarea').removeClass("future");
                $('textarea').addClass("past");
            }
            else if (textData === currentHour) {
                $('textarea').removeClass("past");
                $('textarea').removeClass("future");
                $('textarea').addClass("present");
            }
            else {
                $('textarea').removeClass("past");
                $('textarea').removeClass("present");
                $('textarea').addClass("future");
            }
            console.log(textData);
            console.log(currentHour);
        });
    };

    // calling the function to change the color//
    colorChange();

    $(".saveBtn").on("click", function () {
        var time = $(this).parent().attr("id");
        var value = $(this).siblings(".text-input").val();
        localStorage.setItem(time, JSON.stringify(value));
    });
});