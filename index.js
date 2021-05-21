var buttonColors=["red", "blue", "green", "yellow"];
var gamePattern=[];
var userClickedPattern = [];

var start=false;
var level=0;

$(".btn").click(function() {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  animatePress(userChosenColour);
  playSound(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
        $("body").addClass("game-over");
          setTimeout(function () {
        $("body").removeClass("game-over");
                                 }, 100);
        $("h1").text("Game Over, Press A to Restart");
        playSound(wrong);
    }
}


function playSound(name)
{
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

$(document).keypress(function(event){
  level=0;
  gamePattern=[];
  start=false;
  if(!start)
  {
    $("h1").text("level "+level);
    nextSequence();
    start=true;
  }
});

function nextSequence()
{
  userClickedPattern = [];
  level++;
  $("h1").text("level "+level);
  var n=Math.random();
  n=n*4;
  n=Math.floor(n);

  var randomChosenColour=buttonColors[n];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  animatePress(randomChosenColour);
  playSound(randomChosenColour);
}


function animatePress(currentColor) {

  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}
