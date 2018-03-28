html(the game field will always be displayed in the background):
body: the whole page - black background.
div class='display above field': text + border.
div class='field': outerl lines.
div class='left-side-field': rigth border with dots.
div class='right-side-field': left border with dots.
div class='left paddle': rectangle(.paddle) that moves over, .left-side-field border.
div class='right paddle': rectangle(.padle) that moves over, .right-side-field border.
button class='pause': rectangle pause button underneath middle of .field.

JS(jQuery):
landing page function:
- add name field
- play button

startGame function:
- game start when playerOne presses the up or down key.
- keeps track of score and displays it.

ball Function :
- starting position of ball
- speed of ball

paddle one Function:
- heigth
- position
- speed of moving


paddle two Function:
- heigth
- position
- speed of moving

pause Function:
- when pressed

display playerOne and playerTwo:
- value from input form

end page Function:
- displays winner
- play again button / remembers name
