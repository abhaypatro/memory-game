var userClickedPattern=[];
var buttonColours =["red", "blue", "green", "yellow"];
var gamepattern=[];

$(".btn").click(function() {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
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
