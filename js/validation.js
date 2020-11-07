$(document).ready(function () {

  //Load sidebar component & set it as active
  $("#sidebar").load("../components/sidebar.html").toggleClass('active');

  $("#sidebarToggleBtn").on('click', function () {
    $("#sidebar").toggleClass('active');
  });

  //Hiding the error messages until needed if user inputs invalid text
  $("#firstName_error").hide();
  $("#lastName_error").hide();
  $("#email_error").hide();
  $("#password_error").hide();

  //Setting the error values to false by default until called
  var fname_error = false;
  var lname_error = false;
  var email_error = false;
  var password_error = false;


  //Grabbing the input field (selector) to access the HTML
  $("#firstName").focusout(function () {
    //This function is called here and ran when the input field is not in focus
    firstName_checker();
  });

  $("#lastName").focusout(function () {
    lastName_checker();
  });

  $("#email").focusout(function () {
    email_checker();
  });

  $("#password").focusout(function () {
    password_checker();
  });

});

//A function is created in order to run logic for validation, this function is called above
function firstName_checker() {
  //In here the field is validated

  //Declaring what characters are allowed 
  var combination = /^[a-zA-Z]*$/;
  //Storing the value of what the user has entered
  var firstName = $("#firstName").val();

  //Test ran to determine if the value entered matches the predetermined combination of letters.
  //Also a check is ran to ensure the field is not empty 
  if (combination.test(firstName) && firstName !== '') {
    //Everything checks out so we can hide the error message & show a green border
    $("#firstName_error").hide();
    $("#firstName").css("border-bottom", "3px solid green");

  } else {
    //There is an error in the field so some HTML error text is shown to the user with a red border
    $("#firstName_error").html("Alphabetical characters only")
      .show();

    $("#firstName").css("border-bottom", "3px solid red");
    //The variable is now set to true in order to display the error message
    fname_error = true;
  }
}

function lastName_checker() {

  var combination = /^[a-zA-Z]*$/;
  var lastName = $("#lastName").val();

  if (combination.test(lastName) && lastName !== '') {
    $("#lastName_error").hide();
    $("#lastName").css("border-bottom", "3px solid green");

  } else {
    $("#lastName_error").html("Alphabetical characters only")
      .show();

    $("#lastName").css("border-bottom", "3px solid red");
    fname_error = true;

  }
}

function email_checker() {

  var combination = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  var email = $("#email").val();

  if (combination.test(email) && email !== '') {
    $("#email_error").hide();
    $("#email").css("border-bottom", "3px solid green");

  } else {
    $("#email_error").html("Invalid Email Format")
      .show();

    $("#email").css("border-bottom", "3px solid red");
    email_error = true;
  }
}

function password_checker() {

  //Storing the user's length input
  var length = $("#password").val().length;

  //Making a check to determine if the inputted value is less than 8 characters
  if (length < 8) {
    //Display a HTML error message
    $("#password_error").html("Password must be at least 8 characters long")
      .show();
    //Set the input field border to red
    $("#password").css("border-bottom", "3px solid red");
    //Set the variable to true in order to display the error message
    password_error = true;

  } else {
    //Else hide the error message and set the input field border to green
    $("#password_error").hide();
    $("#password").css("border-bottom", "3px solid green");

  }
}

//Submit Form
$("#form").submit(function () {

  //Set all error messages to false on submit
  fname_error = false;
  lname_error = false;
  email_error = false;
  password_error = false;

  //Run the following validation functions to determine any errors
  firstName_checker();
  lastName_checker();
  email_checker();
  password_checker();

  //Check is made to determine if all field values are set to false and if so, registration is successful
  if (fname_error === false && lname_error === false
    && email_error === false && password_error === false) {

    //Display an alert to the user
    alert("Your message has been sent to our advisors. Thank you.")

  } else {

    alert("Validation Errors In Form")
    return false;
  }
});