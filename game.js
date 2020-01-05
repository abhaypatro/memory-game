var userClickedPattern=[];
var buttonColours =["red", "blue", "green", "yellow"];
var gamepattern=[];
var level=0;

var index=0;
$(".btn").click(function() {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  animatePress(userChosenColour);
  var audioElement=new Audio("sounds/"+userChosenColour+".mp3");
  audioElement.play();
  if(index<level)
  {checkAnswer(index);
  index++;
  if(index>=level)
  {
  setTimeout(nextSequence,500);
  }
}


});

function nextSequence()
{ level++;
  index=0;
  $("h1").text("Level "+level);
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
var ctr=0;

$(document).keypress(function(event){
    if(ctr==0)
    {
      ctr++;
      nextSequence();
    }
});

function checkAnswer(index){
  if(userClickedPattern[index]==gamepattern[index])
  return true;
}
