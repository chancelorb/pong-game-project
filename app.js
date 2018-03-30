$(document).ready(function() {
  const bluePaddle = {
    name: $('#left'),
    upDown: 13

  };

  const ball = {
    name: $('#ball'),
    start: 0,
    left: 243,
    top: 150,

  }

  const redPaddle = {
    name: $('#right'),
    upDown: 13

  };
  const field = {
    width: 500,
    height: 300,
  };
  const direction = {
    x: "",
    speed: 200,

  }


  setInterval(function(){//check for collision and update
    ball.position = ball.name[0].getBoundingClientRect();
    bluePaddle.position = bluePaddle.name[0].getBoundingClientRect();
    redPaddle.position = redPaddle.name[0].getBoundingClientRect();

    if (ball.position.x < bluePaddle.position.x + bluePaddle.position.width &&
       ball.position.x + ball.position.width > bluePaddle.position.x &&
       ball.position.y < bluePaddle.position.y + bluePaddle.position.height &&
       ball.position.height + ball.position.y > bluePaddle.position.y) {
        direction.x = '+=50';
        direction.speed += 10;
        console.log('Touched Blue')
    };

    if (ball.position.x < redPaddle.position.x + redPaddle.position.width &&
       ball.position.x + ball.position.width > redPaddle.position.x &&
       ball.position.y < redPaddle.position.y + redPaddle.position.height &&
       ball.position.height + ball.position.y > redPaddle.position.y) {
        direction.x = '-=50';
        direction.speed += 10;
        console.log('Touched Red');
    };
    shootBall();
  }, 20)


  function shootBall() {
    if (ball.start === 5) {

      ball.name.animate({'left': direction.x});// interval and with small jumps

    };
  }


  $(document).on('keydown', function(e) {
    if (e.which === 65 && bluePaddle.upDown > 5) { //paddle up and down
      bluePaddle.name.animate({'top': '-=15px'}, 1);
      bluePaddle.upDown -= 1;
    } else if (e.which === 90 && bluePaddle.upDown < 21) {
      bluePaddle.name.animate({'top': '+=15px'}, 1);
      bluePaddle.upDown += 1;
    } else if (e.which === 38 && redPaddle.upDown > 5) {
      redPaddle.name.animate({'top': '-=15px'}, 1);
      redPaddle.upDown -= 1;
    } else if (e.which === 40 && redPaddle.upDown < 21) {
      redPaddle.name.animate({'top': '+=15px'}, 1)
      redPaddle.upDown += 1;
    } else if (e.which === 32) {
      //start ball
      ball.start = 5;//to know if the game is playing

    }
  })


});
