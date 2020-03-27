

var callMe = function() {
    var textX = random(0, 300);
    var textY = random(0, 300);
    var myName = "Osagie";
    var city = "Birmingham";
    
    fill(255, 0, 0);
    textSize(30);
    text("Hiiii, " + yourName, textX, textY);
    
    fill(0, 0, 255);
    textSize(25);
    text("Do you live in " + city + "? " , 100, 250);
    

};
// Just callMe 
callMe();
// Try again
callMe();
// 3rd time lucky?
callMe();
// One last time :)
callMe();
