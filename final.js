
// create a function to update the date and time
function updateDateTime() {
    // create a new `Date` object
    const now = new Date();
  
    // get the current date and time as a string
    const currentDateTime = now.toLocaleString();
  
    // update the `textContent` property of the `span` element with the `id` of `datetime`
    document.querySelector('#datetime').textContent = currentDateTime;
  }
  
  // call the `updateDateTime` function every second
  setInterval(updateDateTime, 1000);



// Declare two variables and assign numbers to them
var number1 = 5;
var number2 = 3;
// Add the two numbers using the + operator
var sum = number1 + number2;
// Print the result
console.log("The sum of the two numbers is: " + sum);

// Example function to display a message in the console
function displayMessage() {
    console.log("Thanks for visiting the website!");
}





// Function to prompt the user for input
function submitForm() {
  // Prompt the user for their name
  var name = prompt ("Please enter your name:");
  if (name == null || name == "") {
    alert("You must enter a name to continue.");
    submitForm();
  }
  // Display a greeting message
  alert("Hello, " + name + "! Welcome to the website, Please fill out the form below to continue.");
}












//main prompt user input
submitForm();
displayMessage();



('submit', function(e) {
    e.preventDefault();
    var order = $('#name').val();
    var date = $('#phone number').val();
  
    // Format date and order input as necessary
  
    // Construct URL path and redirect here
    window.location('game' + order + '-' + date + '.html');
  });













  