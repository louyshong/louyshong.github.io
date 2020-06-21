
var today = new Date() 
var month = today.getMonth() + 1 
console.log(month)

function setWinter() {
    document.getElementById("leaf").src = "img/snowflake.png"

    for (var i = 0; i < highlights.length; i++) {
        highlights[i].classList.remove("spring-highlight", "summer-highlight", "autumn-highlight")
        highlights[i].classList.add("winter-highlight")
    }
}

function setSpring() {
    document.getElementById("leaf").src = "img/butterfly.png"

    for (var i = 0; i < highlights.length; i++) {
        highlights[i].classList.remove("winter-highlight", "summer-highlight", "autumn-highlight")
        highlights[i].classList.add("spring-highlight")
    }
}

function setSummer() {
    document.getElementById("leaf").src = "img/summer-leaf.png"

    for (var i = 0; i < highlights.length; i++) {
        highlights[i].classList.remove("spring-highlight", "winter-highlight", "autumn-highlight")
        highlights[i].classList.add("summer-highlight")
    }
}

function setAutumn() {
    document.getElementById("leaf").src = "img/autumn-leaf.png";

    for (var i = 0; i < highlights.length; i++) {
        highlights[i].classList.remove("spring-highlight", "summer-highlight", "winter-highlight")
        highlights[i].classList.add("autumn-highlight")
    }
}

var highlights = document.querySelectorAll(".highlight")

if (month === 12 || month === 1 ||  month === 2) {
    setWinter()
}

if (month === 3 || month === 4 || month === 5) {
    setSpring()
}

if (month === 6 || month === 7 || month === 8) {
    setSummer()
}

if (month === 9 || month === 10 || month === 11) {
    setAutumn()
}

var seasonButtons = document.querySelectorAll(".season-btn")

for (var i = 0; i < seasonButtons.length; i++) {
    seasonButtons[i].addEventListener("click", function () {
        var season = this.innerText
        
        if (season === "Winter") {
            setWinter()
        }

        if (season === "Spring") {
            setSpring()
        }

        if (season === "Summer") {
            setSummer()
        }

        if (season === "Autumn") {
            setAutumn()
        }
    })
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
}

const tween = new TimelineLite()

tween.add(
    TweenLite.to("#leaf", 10, {bezier: flightPath, ease: Power1.easeInOut})
)

const controller = new ScrollMagic.Controller()

var hook = $("#rightcol").height() / 8000

const scene = new ScrollMagic.Scene(
    {triggerElement: "#rightcol",
     duration: $("#rightcol").height(),
     triggerHook: hook}).setTween(tween).addTo(controller)
