function move_and_get_4() {
  turnRight();
  moveForward();
  getNectar();
  moveBackward();
  turnLeft();
}

moveForward();
moveForward();
for (var count = 0; count < 4; count++) {
  move_and_get_4();
}
