$(document).ready(function() {
  const bluePaddle = {
    name: $('#left'),
    upDown: 13,
    score: 0,
  };

  const ball = {
    name: $('#ball'),
    start: 0, //0=not playing 1=just pressed start 2=last touched by blue 3= last touched by red 4=display winner
  }

  const redPaddle = {
    name: $('#right'),
    upDown: 13,
    score: 0,
  };
  const field = {
    width: 243,
    height: 300,
  };

  setInterval(function(){//check for collision and update
    ball.position = ball.name[0].getBoundingClientRect();
    bluePaddle.position = bluePaddle.name[0].getBoundingClientRect();
    redPaddle.position = redPaddle.name[0].getBoundingClientRect();
    winnerIs();

    if (ball.start === 1) {
      $('.game').attr('id', 'game-on')
      console.log(bluePaddle.player);
      console.log(redPaddle.player);
    }

    if (ball.start === 2) {
      $('#ball').css('left', '-=10px');// interval and with small jumps
      $('#ball').css('top', '-=1px');// interval and with small jumps
      if (blueTouch()) {
          console.log(ball.position.x);
          ball.start = 3;
      } else  if (bluePaddle.position.x > ball.position.x){
          alert('red wins');
          ball.start = 1;
          redPaddle.score++;
          console.log(redPaddle.score);
          ballStartPosition();
      }
    };
    if (ball.start === 3) {
      $('#ball').css('left', '+=10px');
      $('#ball').css('top', '+=1px');
      if (redTouch()) {
        ball.start = 2;
      }else if (redPaddle.position.x < ball.position.x) {
        alert('blue wins');
        ball.start = 1;
        bluePaddle.score++;
        ballStartPosition();
      };
    };

  }, 20)

  function ballStartPosition() {
    $('#ball').css('left', '243px');
    $('#ball').css('top', '150px');
  }

  function blueTouch() { //collision detection
    return (ball.position.x < bluePaddle.position.x + bluePaddle.position.width && ball.position.x + ball.position.width > bluePaddle.position.x && ball.position.y < bluePaddle.position.y + bluePaddle.position.height && ball.position.height + ball.position.y > bluePaddle.position.y)
  }
  function redTouch() { //collision detection
    return (ball.position.x < redPaddle.position.x + redPaddle.position.width && ball.position.x + ball.position.width > redPaddle.position.x && ball.position.y < redPaddle.position.y + redPaddle.position.height && ball.position.height + ball.position.y > redPaddle.position.y)
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
      ball.start = 2;//to start the game.
    }
  })
  $('.start-button').click(function() {
    ball.start = 1;
    bluePaddle.player = $('.player1').val();
    redPaddle.player = $('.player2').val();
    $('form').attr('id', 'form-of')
  
  });

  $('.play-again').click(function() {
    ball.start = 1;
    bluePaddle.score = 0;
    redPaddle.score = 0;
    $('winner-field').remove('id');
  });



  function winnerIs() {
    if (bluePaddle.score === 5) {
      $('.show-winner').text(`WINNER IS BlUE!`);
      $('.winner-field').attr('id', 'show-winner');
    } else if (redPaddle.score === 5) {
      $('.show-winner').text(`WINNER IS RED!`);
      $('.winner-field').attr('id', 'show-winner');
    }
  }

});
