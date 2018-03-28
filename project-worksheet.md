
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
Play Again.  
A pause function.  
Being able to play a single player game.  
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
What does it look like when the game ends, what determines winning or losing?

### Game Reset
How will the user restart the game once it has been completed.

## MVP

Include the full list of features that will be part of your MVP

## POST MVP

Include the full list of features that you are considering for POST MVP
## Functional Components

Based on the initial logic defined in the previous game phases section try and breakdown the logic further into functional components, and by that we mean functions.  Does your logic indicate that code could be encapsulated for the purpose of reusablility.  Once a function has been defined it can then be incorporated into a class as a method.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Component 1 | H | 10hrs| 12hrs | 12hrs |
| Component 1 | H | 10hrs| 12hrs | 12hrs |
| Component 1 | H | 10hrs| 12hrs | 12hrs |
| Component 1 | H | 10hrs| 12hrs | 12hrs |
| Component 1 | H | 10hrs| 12hrs | 12hrs |
| Total |  | 10hrs| 12hrs | 12hrs |

## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description |
| --- | :---: |  
| Capitalize | This will capitalize the first letter in a string |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project.

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  

## jQuery Discoveries
 Use this section to list some, but not all, of the jQuery methods and\or functionality discovered while working on this project.

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
