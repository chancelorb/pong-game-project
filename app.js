$(document).ready(function() {
  const bluePaddle = {
    name: $('#left'),
    upDown: 13,
    score: 0,
  };

  const ball = {
    name: $('#ball'),
    start: 0, //0=not playing 1=just pressed start 2=last touched by blue 3= last touched by red 4=display winner
    xVal: 243,
    yVal: 150,
    directionX: -5,
    directionY: -1,

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
const borderLeft = {name: $('.left-border')};
const borderRight = {name: $('.right-border')};
const borderTop = {name: $('.top-border')};
const borderBottom = {name: $('.bottom-border')};

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
    if (ball.start === 3) {
      moveBall();

      if (redTouch()) {
        ball.directionX *= -1;
        ball.start = 2;
      }else if (borderRight.position.x < ball.position.x) {
        ball.start = 1;
        bluePaddle.score++;
        $('.score-mid').text(`${bluePaddle.score} : ${redPaddle.score}`);
        ballStartPosition();
      };
    };

  }, 20)

  function ballStartPosition() {
    $('#ball').css('left', '243px');
    $('#ball').css('top', '150px');
    ball.xVal = 243;
    ball.yVal = 150;
    ball.directionX = -5;
    ball.directionY = -1;
  }


  function moveBall() {

    let x = ball.xVal + ball.directionX;
    let y = ball.yVal + ball.directionY;
    $('#ball').css('left', `${x}px`);
    $('#ball').css('top', `${y}px`);
    ball.xVal = x;
    ball.yVal = y;
    // console.log(ball.xVal);
    // console.log(ball.yVal);
  }

  function topTouch() {
    return (ball.position.x < borderTop.position.x + borderTop.position.width && ball.position.x + ball.position.width > borderTop.position.x && ball.position.y < borderTop.position.y + borderTop.position.height && ball.position.height + ball.position.y > borderTop.position.y)
  }
  function bottomTouch() {
    return (ball.position.x < borderBottom.position.x + borderBottom.position.width && ball.position.x + ball.position.width > borderBottom.position.x && ball.position.y < borderBottom.position.y + borderBottom.position.height && ball.position.height + ball.position.y > borderBottom.position.y)
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
    bluePaddle.player = $('.player1').val().toUpperCase();
    redPaddle.player = $('.player2').val().toUpperCase();
    $('form').attr('id', 'form-of');
    $('.score-left').text(`${bluePaddle.player}`);
    $('.score-right').text(`${redPaddle.player}`);
  });


  $('.play-again').click(function() {
    ball.start = 1;
    bluePaddle.score = 0;
    redPaddle.score = 0;
    $('.winner-field').removeAttr('id');
    $('.score-mid').text(`${bluePaddle.score} : ${redPaddle.score}`);
  });



  function winnerIs() {
    if (bluePaddle.score === 5) {
      $('.game').removeAttr('id')
      $('.show-winner').text(`WINNER IS ${bluePaddle.player}!`);
      $('.winner-field').attr('id', 'show-winner');
    } else if (redPaddle.score === 5) {
      $('.game').removeAttr('id')
      $('.show-winner').text(`WINNER IS ${redPaddle.player}!`);
      $('.winner-field').attr('id', 'show-winner');
    }
  }

});
