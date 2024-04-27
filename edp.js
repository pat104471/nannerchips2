




document.body.style.backgroundImage = "url('https://preview.redd.it/wnt6g3fy6mg71.png?auto=webp&s=63a7b713a38cc18c849f55f3c3651393a3f9b962')";

//start
    function startMoving() {
      document.getElementById("startBtn").disabled = true;
      document.getElementById("stopBtn").disabled = false;
      moveMeme();
  }
//stop
  function stopMoving() {
      document.getElementById("stopBtn").disabled = true;
      document.getElementById("startBtn").disabled = false;
      stopMeme();
  }

// move meme
  function moveMeme() {
    var meme = document.getElementById("meme");
    var x = 0;
    var y = 0;
    var dx = 5;
    var dy = 3;

      
    var moveInterval = setInterval(function() {
      x += dx;
      y += dy;
      meme.style.left = x + "px";
      meme.style.top = y + "px";

        
      if (x <= 0 || x >= window.innerWidth - meme.width) {
          dx = -dx;
          }
      if (y <= 0 || y >= window.innerHeight - meme.height) {
          dy = -dy;
          }
      }, 50); // Move the meme image every 50 milliseconds

      meme.moveInterval = moveInterval;
  }

  function stopMeme() {
      var meme = document.getElementById("meme");
      clearInterval(meme.moveInterval);
  }
  
//reset button
  function resetMeme() {
      var meme = document.getElementById("meme");
      meme.style.left = "0px";
      meme.style.top = "0px";
  }



    
    
    

   

