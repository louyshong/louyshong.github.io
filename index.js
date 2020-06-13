const flightPath = {
    curviness: 1.25, 
    autoRotate: true, 
    values: [
        {x: -0.2 * $("#rightcol").width(), y: 0.1 * $("#rightcol").height()}, 
        {x: -0.5 * $("#rightcol").width(), y: 0.2 * $("#rightcol").height()}, 
        {x: -0.3 * $("#rightcol").width(), y: 0.6 * $("#rightcol").height()}, 
        {x: -0.3 * $("#rightcol").width(), y: 0.5 * $("#rightcol").height()}, 
        {x: -0.5 * $("#rightcol").width(), y: 0.9 * $("#rightcol").height()}, 
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
