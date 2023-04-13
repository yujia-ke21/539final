
// home page -parallax effect//

var container = document.querySelector('.container');
var object = document.querySelectorAll('.object');

// store the initial positions of each object
var initialPositions = [];
for (var i = 0; i < object.length; i++) {
  var rect = object[i].getBoundingClientRect();
  initialPositions.push({left: rect.left, top: rect.top});
}

container.onmousemove = function(e){
    console.log(e.pageX, e.pageY);
    let X = e.pageX;
    let Y = e.pageY;

    // use the initial position to calculate the transform values
//   object[0].style.transform = 'translate(' + (initialPositions[0].left + X/100) +'px,' + (initialPositions[0].top + Y/100) + 'px)';
//   object[1].style.transform = 'translate(' + (initialPositions[1].left + X/100) +'px,' + (initialPositions[1].top + Y/100*-6) + 'px)';
//   object[2].style.transform = 'translate(' + (initialPositions[2].left + X/100) +'px,' + (initialPositions[2].top + Y/200*-3) + 'px)';
//   object[3].style.transform = 'translate(' + (initialPositions[3].left + X/100) +'px,' + (initialPositions[3].top + Y/100*-4) + 'px)';
//   object[4].style.transform = 'translate(' + (initialPositions[4].left + X/100) +'px,' + (initialPositions[4].top + Y/100*5) + 'px)';
//   object[5].style.transform = 'translate(' + (initialPositions[5].left + X/100) +'px,' + (initialPositions[5].top + Y/100*7) + 'px)';

    object[0].style.transform = 'translate(' + X/500*-2 +'px,' + Y/500*-2 + 'px)';
    object[1].style.transform = 'translate(' + X/500*-8 +'px,' + Y/500*-6 + 'px)';
    object[2].style.transform = 'translate(' + X/500*-12 +'px,' + Y/500*-3 + 'px)';
    object[3].style.transform = 'translate(' + X/500*-10 +'px,' + Y/500*-10 + 'px)';
    object[4].style.transform = 'translate(' + X/500*-20 +'px,' + Y/500*20 + 'px)';
    object[5].style.transform = 'translate(' + X/500*-7 +'px,' + Y/500*7 + 'px)';
}

// play audio when image onclick//
function playCatSound() {
    var audio = new Audio('../assets/catMeow.mp3');
    audio.play();
  }

function playBookSound() {
    var audio = new Audio('../assets/book-pageturn-sound.mp3');
    audio.play();
  }

function playCoffeeSound() {
    var audio = new Audio('../assets/coffee-sound.mp3');
    audio.play();
  }

function playBallSound() {
    var audio = new Audio('../assets/football-sound.mp3');
    audio.play();
  }
  


// discover page - slider change card layout//

var slider = document.getElementById("slider");
var cardContainer = document.querySelector(".card-container");

slider.addEventListener("change", function(){
    console.log("card in grid layout of" + this.value + "columns")
    var numColumns = this.value;
    cardContainer.style.gridTemplateColumns = `repeat(${numColumns}, 1fr)`;
});

updateTextInput('3');

function updateTextInput(val){
    document.getElementById('amount').value=val; //update current slider value

}
