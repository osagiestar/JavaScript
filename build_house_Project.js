background(219, 255, 255);

// roof
    fill(174, 180, 214);
    triangle(200, 28, 350, 150, 50, 150);

// house
    fill(214, 175, 214);
    rect(60, 150, 280, 220);

  
    // brick 
      for (var k = 80; k < 180; k+=12) {
        for (var m = 70; m < 320; m+=30) {
            
            rect(m, k*2, 22, 10);
            fill(84, 28, 28); 
          
        }
    }
        
//door
    fill(110, 110, 104);
    rect(180, 280, 40, 82);

// windows
    for (var x = 100; x < 300; x+=80) {
    fill(253, 250, 250);
    rect(x, 200, 40, 40); 
    }
 
 // grasses
    var grass = getImage("cute/GrassBlock");
    for (var i = 0; i < 390; i+=20) {
    image(grass, i, 350, 50, 50);
    }
 
