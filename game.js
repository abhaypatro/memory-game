var userClickedPattern=[];
var buttonColours =["red", "blue", "green", "yellow"];
var gamepattern=[];

$(".btn").click(function() {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  animatePress(userChosenColour);
  var audioElement=new Audio("sounds/"+userChosenColour+".mp3");
  audioElement.play();
});

function nextSequence()
{
  var randomNumber=Math.floor(Math.random()*4);
  var randomChosenColour=buttonColours[randomNumber];
  gamepattern.push(randomChosenColour);
  var audioElement=new Audio("sounds/"+randomChosenColour+".mp3");
  audioElement.play();
  $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
}
function animatePress(currentColour){
  $("#"+currentColour).addClass("pressed");
  setTimeout(function(){$("#"+currentColour).removeClass("pressed");  }, 100);
}
