$(document).ready(function() {
  const bluePaddle = {
    name: $('#left'),
    upDown: 13

  };

  const ball = {
    name: $('#ball'),
    start: 0, //0=not playing 1=just pressed start 2=last touched by blue 3= last touched by red 4=display winner
  }

  const redPaddle = {
    name: $('#right'),
    upDown: 13

  };
  const field = {
    width: 243,
    height: 300,
  };

  setInterval(function(){//check for collision and update
    ball.position = ball.name[0].getBoundingClientRect();
    bluePaddle.position = bluePaddle.name[0].getBoundingClientRect();
    redPaddle.position = redPaddle.name[0].getBoundingClientRect();

    if (ball.start === 1) {
      $('#ball').css('left', '-=10px');// interval and with small jumps
      field.width -= 10;
      if (ball.position.x < bluePaddle.position.x + bluePaddle.position.width &&
         ball.position.x + ball.position.width > bluePaddle.position.x &&
         ball.position.y < bluePaddle.position.y + bluePaddle.position.height &&
         ball.position.height + ball.position.y > bluePaddle.position.y) {
          console.log(ball.position.x);
          ball.start = 2;
      } else if (ball.position.x < 250) {
        alert('red wins');
        ball.start = 0;
        ballStartPosition();
      }
    };
    if (ball.start === 2) {
      $('#ball').css('left', '+=10px');
      if (ball.position.x < redPaddle.position.x + redPaddle.position.width &&
         ball.position.x + ball.position.width > redPaddle.position.x &&
         ball.position.y < redPaddle.position.y + redPaddle.position.height &&
         ball.position.height + ball.position.y > redPaddle.position.y) {
          console.log(ball.position.x);
          ball.start = 1;
      }else if (ball.position.x > 750) {
        alert('blue wins');
        ball.start = 0;
        ballStartPosition();
      };
    };
  }, 20)

  function ballStartPosition() {
    $('#ball').css('left', '243px')
  }

  $(document).on('keydown', function(e) {
    if (e.which === 65 && bluePaddle.upDown > 8) { //paddle up and down
      bluePaddle.name.animate({'top': '-=25px'}, 1);
      bluePaddle.upDown -= 1;
    } else if (e.which === 90 && bluePaddle.upDown < 18) {
      bluePaddle.name.animate({'top': '+=25px'}, 1);
      bluePaddle.upDown += 1;
    } else if (e.which === 38 && redPaddle.upDown > 8) {
      redPaddle.name.animate({'top': '-=25px'}, 1);
      redPaddle.upDown -= 1;
    } else if (e.which === 40 && redPaddle.upDown < 18) {
      redPaddle.name.animate({'top': '+=25px'}, 1)
      redPaddle.upDown += 1;
    } else if (e.which === 32) {
      //start ball
      ball.start = 1;//to start the game.

    }
  })

});
