var textarea = document.getElementById("textarea");
function addExpression(symbol) {
  textarea.value += symbol;

  if (symbol === "") {
    //checking for reset button clicked or not
    textarea.value = "";
  }
}
function deleteText(symbol) {
  if (symbol === "DEL") {
    var text = textarea.value;
    textarea.value = textarea.value.toString().slice(0, -1); // the expression inside the text area will get converted firstly to a string then the last element will be removed.
  }
}

function calculateText(symbol) {
  //the eval function will evaluate the value , then the string will be fixed to 3 decimal values,then using parseFloat we will convert the string to the float

  try {
    //wil  check if this works if not go to catch , similar to the if else statement
    textarea.value = parseFloat(eval(textarea.value).toFixed(3));
  } catch {
    textarea.value = "ERROR!!";
    setTimeout(() => (textarea.value = ""), 600); //clears the textarea automatically incase of an error in the catch statement.
  }
}