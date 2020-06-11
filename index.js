const flightPath = {
    curviness: 1.5, 
    autoRotate: true, 
    values: [
        {x: 200, y: 30}, 
        {x: 100, y: 80}, 
        {x: 80, y: 200}, 
        {x: 100, y: 150},
        {x: 60, y: 400},
        {x: 170, y: 500},
        {x: $("#rightcol").width(), y: $("#rightcol").height()}
    ]
};

const tween = new TimelineLite();

tween.add(
    TweenLite.to("#leaf", 8, {bezier: flightPath, ease: Power1.easeInOut})
);