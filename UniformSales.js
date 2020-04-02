
var txt=30;
var x=10,y=400;
draw= function(){
     background(240, 226, 240);
     fill(204, 61, 194);
     textSize(txt);
     text("UNIFORMS!", 100, 40);
     
     //first ellipse
     fill(0, 21, 255);
     ellipse(100,150,150,125);
     fill(255,255,255);
     textSize(txt-5); 
     text("Man Scarf",30,150);
     
     //2nd ellipse
     fill(0, 21, 255);
     ellipse(300, 150, 150, 125);
     fill(255,255,255);
     text("Lady Scarf",230,150);
     
     //3rd ellipse
     fill(22, 24, 48);
     ellipse(200, 250, 150, 125);
     fill(40, 189, 82);
     text("Girl Scarf", 140, 250);
     
     //offer
     fill(173, 45, 88);
     textSize(txt-1); 
     text("offer", x, y);
     
     //bonus
     fill(173, 45, 88);
     ellipse(200, 250, 150, 125);
     textSize(txt-1); 
     text("bonus", x, y);
     
     //buy 1 ger 2nd one 1/2 price
     fill(173, 45, 88);
     ellipse(200, 250, 150, 125);
     textSize(txt-1); 
     text("buy 1 get 2nd one 1/2 price", x, y);
     
     
x=x+1;
y=y-1;
  
};


