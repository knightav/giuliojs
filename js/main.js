var paper = Raphael(0, 0, 1000, 1000);

var spiral = giulio(800, 150);

spiral.spiral(50,50,50,150);


var circle = function(g, x, y, r) {
    g.M(x + r, y)
        .a(r,r,0,0,0, -1 * r, -1 * r)
        .a(r,r,0,0,0, -1 * r, r)
        .a(r,r,0,0,0, r, r)
        .a(r,r,0,0,0, r, -1 * r);
}

var r1 = 100;
var r2 = 200;
var r3 = 300
var centerX = 500;
var centerY = 500;

var radar = giulio(centerX, centerY);

circle(radar, centerX, centerY, r1);
circle(radar, centerX, centerY, r2);
circle(radar, centerX, centerY, r3);

var lines = giulio(centerX, centerY);

lines.m(-r3, 0)
    .l(r3 * 2, 0);

lines.M(centerX, centerY - r3)
    .l(0, r3 * 2);


var unspiral = giulio(200,200);

for(var i = 6; i < 200; i += 10) {
    circle(unspiral, 200, 200, i);
}

paper.path(radar.end()).attr("stroke", "red");
paper.path(lines.end()).attr("stroke", "red").attr("stroke-dasharray", ". ");

paper.path(spiral.end()).attr("stroke","red").attr("stroke-width", 1);

paper.path(unspiral.end()).attr("stroke","red").attr("stroke-width", 1);



/*
paper.path(
    giulio(0, 50)
        .l(100,100)
        .v(50)
        .h(75)
        .a(100,100, 0, 1, 0, 100, 100)
        //.c([200, 225], [200,225], [250, 400])
        //.t([[150,100], [75,75]])
        .end()
).attr("stroke","red");

paper.path(
    giulio(200, 50)
        .lineTo(100,100)
        .vLineTo(50)
        .hLineTo(75)
        .smoothQuadCurveTo(75,100)
        .smoothQuadCurveTo(100,-50)
        .end()
).attr("stroke", "green");

paper.path(
    giulio(400, 50)
        .L(100,100)
        .V(50)
        .H(75)
        .T(150,150)
        .end()
).attr("stroke", "blue");

paper.path(
    giulio(600, 50)
        .LineTo(100,100)
        .VLineTo(50)
        .HLineTo(75)
        .SmoothQuadCurveTo(150,150)
        .end()
).attr("stroke", "purple");

paper.path(
    giulio(800, 50)
        .m([[100, 100], [50, 50], [0, -50]] )
        .M([[100, 100], [50, 50], [0, -50]] )
        .end()
).attr("stroke", "orange");


paper.path(
    giulio(400, 300)
        .v([100, 50, 50, 0, -50])
        .V([100, 50, 50, 0, -50])
        .end()
).attr("stroke", "brown");

paper.path(
    giulio(500, 300)
        .c([0, 100], [0,100], [100, 100])
        .end()
).attr("stroke", "purple");

paper.path(
    giulio(600, 300)
        .h([100, 50, 50, 0, -50])
        .H([100, 50, 50, 0, -50])
        .end()
).attr("stroke", "brown");

paper.path(
    giulio(300, 50)
        .m(50,50)
        .t(50,50)
        .t(0,50)
        .t(-50,-50)
        .end()
).attr("stroke", "black");*/
