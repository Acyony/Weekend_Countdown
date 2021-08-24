//Formate the data => Intl.DateTimeFormat

function formateDate(dateObject) {
  let formatter = new Intl.DateTimeFormat("en", { weekday: "long" });
  return formatter.format(dateObject);
}

// To print the message on the browser

function doClick() {
  let now = new Date();
  let myDateFormatted = formateDate(now);
  let dayOfWeek = now.getDay();
  let input = document.getElementById("username");


  let emptyInputMessage = "Please enter your name below!";
  let message = `Hello ${input.value}, today is ${myDateFormatted}. Only ${
    5 - dayOfWeek
  } left until the weekend!`;

  if (input.value.trim() === "") {
    document.getElementById("h3_id").innerHTML = emptyInputMessage;
  } else {
    document.getElementById("h3_id").innerHTML = message;
  }
}

// to clear the input text when refresh the page

function init() {
  document.getElementById("username").value = "";
}
window.onload = init;

