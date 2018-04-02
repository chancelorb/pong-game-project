
# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

|  Day | Deliverable |
|---|---|
|Day 1: Tue| Wireframes and Priority Matrix|
|Day 2: Wed| Project Approval /  Pseudocode / actual code|
|Day 3: Thur| Basic Clickable Model |
|Day 4: Fri| Working Prototype |
|Day 5: Sat| Final Working Project |
|Day 6: Sun| Bugs / Stylying / PostMVP |
|Day 7: Mon| Project Presentations |


## Project Description
PONG

Pong is a game for 1 or 2 players, the goal is to shoot the ball behind your opponents paddle by moving your own paddle up and down.
like here: https://pong-2.com/


## Wireframes

![Wireframes](images/IMG_0217.JPG?raw=true "Wireframes")

## Priority Matrix

Welcome screen.  
Being able to play a 2 player game till 10 points is reached.  
A winner screen.  
Play Again function.  
A pause function.  
Being able to play a single player game(no 10 points limit).  
Being able to move the paddle with the camera.  

## Game Components

### Landing Page
The landing page will display 'PONG', underneath a form for the name(s), and a start button.  

### Game Initialization
The player will see the field and setup(two paddles and a dotted line in the middle).
In the left corner instructions for player 2 and in the right corner instructions for player 1.
For the 2 player mode the display above the field will say 'player 1 press your key'.
For the single player mode the display will say 'press key to start'.
Underneath the field is a pause button.

### Playing The Game
By moving the paddle the first time the ball will fire. after this moment the player(s)
has to use the arrow up and down keys(for player 2 the 'a' key for up and the 'z' key for down).
When the ball goes behind the paddle the one who last touched the ball gets one point.
The game goes on like this until one player reached 10 points.

### Winning The Game
When one of the players reached 10 points the game is over. This activates a pop up screen.
With the single player mode the screen will show the amount of points and a button to 'play again'.
with the 2 player mode the screen will show 'The winner is .....' and a button with the text 'play again'.

### Game Reset
The player can restart the game by pressing the 'play again' button.

## MVP

Welcome screen.  
Being able to play a 2 player game till 10 points is reached.  
A winner screen.  
Play Again function.  

## POST MVP

A pause function.  
Being able to play a single player game(no 10 points limit).  
Being able to move the paddle with the camera.
## Functional Components

Landing page  
Form creates: let playerOne = input first name; let playerTwo = input second name;  
start button: $(button).on('click' activates the startGame function);

Fire ball  
Research collision detection.

Game page  
move paddle playerOne: keys up and down;  
move paddle playerTWo: keys a  and z;  
pause button: press to pause the game;  
key up || down: starts the playGame function, this creates the ball and fires it towards playerTwo;  
count points function: counts++ when ball is passed the paddle;  

The players play by moving their buttons till one player has reached 10 points.    

End page    
When 10 points are reached: function pop up winner screen.
'play agian' button: this activates the startGame function but saves the names;  

Post MVP  



| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Worksheet | H | 3hrs| 3hrs | 3.5hrs |
| Landing page | H | 3hrs| 3hrs | 3hrs |
| Collision Detection | H | 5hrs| 6hrs | 6hrs |
| Game page | H | 6hrs| 12hrs | 12hrs |
| End page | H | 6hrs| 3hrs | 3hrs |
| Post MVP | L | 18hrs| 0hrs | .. |
| Total |  | 41hrs| 3hrs | .. |

## Helper Functions

| Function | Description |
| --- | :---: |  
| To Upper Case | This will capitalize all of the input |
| Collision | This will look for collision between two elements |

## Additional Libraries

 - jquery

## Code Snippet
First I searched for the positions of the elements and than I
looked for collision. if there is a collision a function gets triggered.
```
setInterval(function(){//check for collision and update
  ball.position = ball.name[0].getBoundingClientRect();
  bluePaddle.position = bluePaddle.name[0].getBoundingClientRect();
  redPaddle.position = redPaddle.name[0].getBoundingClientRect();
  borderLeft.position = borderLeft.name[0].getBoundingClientRect();
  borderRight.position = borderRight.name[0].getBoundingClientRect();
  borderTop.position = borderTop.name[0].getBoundingClientRect();
  borderBottom.position = borderBottom.name[0].getBoundingClientRect();

  winnerIs();
  if (topTouch() || bottomTouch()){
    ball.directionY *= -1;
  }
  if (ball.start === 1) {
    $('.game').attr('id', 'game-on');
    ballStartPosition();
  }

  if (ball.start === 2) {
    moveBall()


    if (blueTouch()) {

      ball.directionX *= -1; // change ball direction
      ball.directionX++; // to increase ball speed
      ball.start = 3;
    } else  if (borderLeft.position.x > ball.position.x){
      ball.start = 1;
      redPaddle.score++;
      $('.score-mid').text(`${bluePaddle.score} : ${redPaddle.score}`);
      ballStartPosition();
    }
  };
  ```

## jQuery Discoveries
 - .css()
 - .animate()
 - .val()

## Change Log
 None.

## Issues and Resolutions
  Issue: Collision detection for the sides of the field.  
  Solution: I made div elements on top of the border and looked for
  collision with these div elements.  
