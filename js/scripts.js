$(function() {
    $("#userForm").submit(function(event) {
        event.preventDefault();
        //retrieve sentence entered by user, save it as userInput
        let userInput = $("#userInput")
          .val()
        // validates that something was submitted in the form
        if (userInput == "") {
            alert("This field is required.");
            return false;
        }
        console.log("userInput", userInput)
    });
});
