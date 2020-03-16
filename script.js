
var date = moment().format("dddd MMM Do YYYY");
// var currentTime = moment().format('H');
// console.log(currentTime);

//-------append date----------//
$("#currentDay").append(date);

// create var's for time blocks, buttons & times/hours

var timeBlocks = $(".container");

var timeList = [
    "9 AM",
    "10 AM",
    "11 AM",
    "12 PM",
    "1 PM",
    "2 PM",
    "3 PM",
    "4 PM",
    "5 PM",
];

var timeId = [
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
];

var saveBtn = document.querySelectorAll("button");

// for loop to create visual time blocks for each hour

for (var i = 0; i < timeList.length; i++) {
    var newRow = $("<div class='row time-block'>").attr("id", timeId[i]);
    var newDiv2 = $("<div class='hour col-1'>")
    var newDiv = $("<textarea class='col-10'>");
    var newButt = $("<button type='button' class='saveBtn col-1 far fa-save'>");

    timeBlocks.append(newRow);

    newDiv2.text(timeList[i]);
    newRow.append(newDiv2);

    newDiv.text();
    newRow.append(newDiv);

    newButt.text();
    newRow.append(newButt);
}

//function for local storage

function localStorageFunction() {
    $("textarea")[0].value = localStorage.getItem("textarea1");
    $("textarea")[1].value = localStorage.getItem("textarea2");
    $("textarea")[2].value = localStorage.getItem("textarea3");
    $("textarea")[3].value = localStorage.getItem("textarea4");
    $("textarea")[4].value = localStorage.getItem("textarea5");
    $("textarea")[5].value = localStorage.getItem("textarea6");
    $("textarea")[6].value = localStorage.getItem("textarea7");
    $("textarea")[7].value = localStorage.getItem("textarea8");
    $("textarea")[8].value = localStorage.getItem("textarea9");
}

localStorageFunction();

//function for prevent default

$("button").on("click", function(event) {
    
})

//function for creating timeblock colours dependent on time - past, present, future

