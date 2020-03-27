ill(255, 0, 0);

draw = function() {
    background(230, 218, 218);
    
textSize(30);
text("SOFTWARE!", 10, 30);

textSize(28);
text("1. Purchase", 10, 80);
text("2. Install", 10, 110);

// software cd
fill(129, 149, 150);
ellipse(mouseX, mouseY, 60, 60);
ellipse(mouseX, mouseY, 10, 10);

// laptop topbase
fill(31, 16, 16);
rect(50, 240, 200, 80, 20);

var purchase = "buy one computer";
var extra = "get one free cd";
var offer = "installation";
var part = "As a special offer" + ", " + purchase + " and you " + extra + " with " + "," + "offer";

textSize(16);
text(part, 10, 350);
};

