var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    65: 'a',
    66: 'b'
  };
  
  var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];

  var konamiCodePosition = 0;
  
  document.addEventListener('keydown', function(e) {
    var key = allowedKeys[e.keyCode];
    var requiredKey = konamiCode[konamiCodePosition];
  
    if (key == requiredKey) {

      konamiCodePosition++;
  
      if (konamiCodePosition == konamiCode.length) {
        activateCheats();
        konamiCodePosition = 0;
      }
    } else {
      konamiCodePosition = 0;
    }
  });
  
  function activateCheats() {
    let div_video = document.querySelector("#video");
    let video = document.querySelector("video");
    div_video.classList.add("active");
    video.play();
    document.addEventListener("click", function() {
      video.pause();
      div_video.classList.remove("active");
    });
   //var video = document.getElementById("video");
    //video.hidden=true;
    // alert("cheats activated");
  }