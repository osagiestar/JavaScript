var bodyX = 200;
var bodyY = 220;
var bodyW = 118;
var faceW = bodyW/2;

draw = function() {    
    // tortoise body
    stroke(0, 0, 0);
    strokeWeight(3);
    fill(212, 152, 68);
    ellipse (300, 120, 100, 80);
    
    // leg socket
    noStroke();
    fill(207, 254, 255);
    ellipse(275, 150, 15, 20); //left1;
    ellipse(325, 150, 15, 20); //left2;

    // head
    fill(25, 25, 25);
    stroke(18, 12, 12);
    ellipse(250,120,30, 20); // head
    
    // leg 
    fill(0, 0, 0);
    stroke(222, 138, 222);
    line(270, 135, 280, 165); //left1
    line(335, 135, 345, 165); //left2
    
    rect(262, 160, 80, 5, 350);

}
