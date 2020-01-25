$(function() {
  $("#userForm").submit(function(event) {
    event.preventDefault();
    // retrieve sentence entered by user, save it as userInput
    let userInput = $("#userInput").val();
    let form = document.getElementById("userForm");
    form.reset();
    // check for empty field
    if (userInput == "") {
      $("#output").text("This field is required.");
      return false;
    }
    let splitInput = replaceVowels(userInput);
    let wordPuzzle = displayPuzzle(splitInput);
    $("#output").text(wordPuzzle);
  });

  function replaceVowels(userInput) {
    let vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    let splitInput = userInput.split("");
    for (let i = 0; i < splitInput.length; i++) {
      for (let j = 0; j < vowel.length; j++) {
        if (splitInput[i] === vowel[j]) {
          splitInput[i] = "-";
        }
      }
    }
    return splitInput;
  }

  function displayPuzzle(splitInput) {
    let wordPuzzle = splitInput.join("");
    return wordPuzzle;
  }
});
