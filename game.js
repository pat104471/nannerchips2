    // Player name 
    var player1 = "Player 1"; 
    var player2 = "Player 2"; 
  
    // Function to roll the dice 
    function rollTheDice() { 
            //method calls a function after a number of milliseconds
        setTimeout(function () { 
            var randomNumber1 = Math.floor(Math.random() * 6) + 1; 
            var randomNumber2 = Math.floor(Math.random() * 6) + 1; 
            //takes .img2 which is an id for dice6 and taking var function and giving possiblity to chang to random die//
            document.getElementById(".img11").setAttribute("src", 
                "dice" + randomNumber1 + ".png"); 
            //takes .img2 which is an id for dice4 and taking var function and giving possiblity to chang to random die//
            document.getElementById(".img22").setAttribute("src", 
                "dice" + randomNumber2 + ".png"); 
            //if random numbers are equal its a draw//
            if (randomNumber1 === randomNumber2) { 
                document.querySelector("h1").innerHTML = "Draw!"; 
            } 
            //if number 1 is less then number 2 player 2 wins//
            else if (randomNumber1 < randomNumber2) { 
                document.querySelector("h1").innerHTML 
                                = (player2 + " WINS!"); 
            } 
            //any other pl                     
            else { 
                document.querySelector("h1").innerHTML
                                = (player1 + " WINS!");
            }
      //milleseconds   
    }, 500); 
} 