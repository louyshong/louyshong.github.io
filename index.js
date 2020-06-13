
var today = new Date() 
var month = today.getMonth() - 4
console.log(month)

var list = document.querySelectorAll(".highlight");

if (month === 12 || month === 1 ||  month === 2) {
    document.getElementById("leaf").src = "snowflake.png";

    for (var i = 0; i < list.length; i++) {
        list[i].classList.add("winter-highlight")
    }
}

if (month === 3 || month === 4 || month === 5) {
    document.getElementById("leaf").src = "butterfly.png";

    for (var i = 0; i < list.length; i++) {
        list[i].classList.add("spring-highlight")
    }
}

if (month === 6 || month === 7 || month === 8) {
    document.getElementById("leaf").src = "summer-leaf.png";

    for (var i = 0; i < list.length; i++) {
        list[i].classList.add("summer-highlight")
    }
}

if (month === 9 || month === 10 || month === 11) {
    document.getElementById("leaf").src = "autumn-leaf.png";

    for (var i = 0; i < list.length; i++) {
        list[i].classList.add("autumn-highlight")
    }
}

const flightPath = {
    curviness: 1.25, 
    autoRotate: true, 
    values: [
        {x: -0.4 * $("#rightcol").width(), y: 0.1 * $("#rightcol").height()}, 
        {x: -0.7 * $("#rightcol").width(), y: 0.2 * $("#rightcol").height()}, 
        {x: -0.5 * $("#rightcol").width(), y: 0.6 * $("#rightcol").height()}, 
        {x: -0.5 * $("#rightcol").width(), y: 0.5 * $("#rightcol").height()}, 
        {x: -0.7 * $("#rightcol").width(), y: 0.9 * $("#rightcol").height()}, 
        {x: $("#rightcol").width(), y: $("#rightcol").height()}
    ]
};

const tween = new TimelineLite();

tween.add(
    TweenLite.to("#leaf", 10, {bezier: flightPath, ease: Power1.easeInOut})
);

const controller = new ScrollMagic.Controller();

var hook = $("#rightcol").height() / 8000; 

const scene = new ScrollMagic.Scene(
    {triggerElement: "#rightcol",
     duration: $("#rightcol").height(),
     triggerHook: hook}).setTween(tween).addTo(controller);
