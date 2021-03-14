var workHours = JSON.parse(localStorage.getItem("times")) || [{
    time: "9AM",
    militaryTime: "9",
    description: ""
}, {
    time: "10AM",
    militaryTime: "10",
    description: ""
}, {
    time: "11AM",
    militaryTime: "11",
    description: ""
}, {
    time: "12PM",
    militaryTime: "12",
    description: ""
}, {
    time: "1PM",
    militaryTime: "13",
    description: ""
}, {
    time: "2PM",
    militaryTime: "14",
    description: ""
},{
    time: "3PM",
    militaryTime: "15",
    description: ""
}, {
    time: "4PM",
    militaryTime: "16",
    description: ""
}, {
    time: "5PM",
    militaryTime: "17",
    description: ""
}]

var liveClock = function() {
    document.querySelector("#currentDay").innerHTML=
    `<h5>${moment().format('MMMM Do YYYY, h:mm:ss a')}</h5>`;
};
liveClock();
setInterval(liveClock, 1000);

for (hour of workHours) {
    $( ".container").append(`
    <div class='row' id ='${hour.militaryTime}'>
        <div class='hour col-1'>${hour.time}</div>
        <textarea class='description col-10'>${hour.description}</textarea>
        <button class='saveBtn col-1'>Save</button>
    </div>`);
}
for (i = 9; i < 18; i++) {
    if (moment().format("H") == i) {
        $(`#${i}`).addClass("present")
    }
    else if (moment().format("H") < i) {
        $(`#${i}`).addClass("future")
    }
    else {
        $(`#${i}`).addClass("past") 
    }
}
$(".saveBtn").on('click', function() {
    //click & grab number that corresponds to # 
    var index = $(this).parent().attr("id")
    parseInt(index)
    workHours[index-9].description = $(this).siblings(".description").val()
    //create local storage set item 
    localStorage.setItem("times", JSON.stringify(workHours))
})
