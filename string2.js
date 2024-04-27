/*Pat Schierman*/





function checkInputs() {
            
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var zipCode = document.getElementById('zipCode').value;

  
    var secretMessage = document.getElementById('secretMessage');


    secretMessage.innerHTML = '';

    
    if (firstName.length <= 20 && lastName.length <= 20 && zipCode.length === 5) {
        
        secretMessage.innerHTML = 'This is the secret message!';
    } else {
        
        alert('Names should not exceed 20 characters and zip code must be exactly 5 digits.');
    }
}

console.log('firstName')
             


  






