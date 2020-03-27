var bodyX = 200;
var bodyY = 220;
var bodyW = 118;
var faceW = bodyW/2;

draw = function() {
    background(207, 254, 255);
    stroke(234, 0, 0);
    strokeWeight(1);
    fill(240, 209, 36);
    ellipse(bodyX, bodyY, bodyW, 106); // body?
    ellipse(bodyX, bodyY-70, faceW, 47); // face?
    
    // hands
    rect(bodyX-60, bodyY-10, bodyW*1/10, bodyX*1/4); //right
    rect(bodyX+48, bodyY-10, bodyW*1/10, bodyX*1/4); // left 
    
    // legs
    rect(bodyX-30, bodyY+45, bodyW/6, bodyX/2);
    rect(bodyX+5, bodyY+45, bodyW/6, bodyX/2);
    
    //foot
    arc(bodyX-20, bodyY+145, bodyW/6, bodyX/10, bodyW/20, bodyX*9/10); // left   
    arc(bodyX+15, bodyY+145, bodyW/6, bodyX/10, bodyW/20, bodyX*9/10); // right
    
}; 


