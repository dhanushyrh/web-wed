document.addEventListener("DOMContentLoaded", function () {
  // Set the date and time for the countdown (replace with your desired date)
  var countdownDate = new Date("Jan 28, 2024 11:00:00").getTime();

  // Update the countdown every 1 second
  var countdownInterval = setInterval(updateCountdown, 1000);

  function updateCountdown() {
    var currentDate = new Date().getTime();
    var timeRemaining = countdownDate - currentDate;

    if (timeRemaining <= 0) {
      clearInterval(countdownInterval);
      document.getElementById("countdown").innerHTML = "Countdown expired!";
    } else {
      var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor(
        (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
      );
      var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      document.getElementById("countdown").innerHTML =
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    }
  }
});
