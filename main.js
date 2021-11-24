x = 0;
y = 0;

screen_width = 0;
screen_height = 0;

flower = "";

speak_data = "";

to_number = "";

draw_flower = "";

function preload(){
  flower = loadImage('flower.png');
}

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

  console.log(event); 

  content = event.results[0][0].transcript;
  document.getElementById("status").innerHTML = "The Speech Has Been Recognized :) " + content;

  to_number = Number(content);

  if(Number.isInteger(to_number)==true){
    document.getElementById("status").innerHTML = "Started Drawing Flower/s =)";
    draw_flower = "set";
  }
  else{
    document.getElementById("staus").innerHTML = "We Have Not Recognized A Numer :|";
  }
}

function setup() {
  screen_width = window.innerWidth;
  screen_height = window.innerHeight;
}

function draw() {
  if(draw_flower == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Flowers drawn =D";
    draw_flower = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
