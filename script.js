const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const time = document.getElementById("time");

const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".second-hand");

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

// Function to update the date and time
function updateDateTime() {
  const now = new Date();

  // Update calendar date
  date.innerHTML = (now.getDate() < 10 ? "0" : "") + now.getDate();
  day.innerHTML = weekDays[now.getDay()];
  month.innerHTML = months[now.getMonth()];
  year.innerHTML = now.getFullYear();

  // Update digital clock in 12-hour format
  time.innerHTML = now.toLocaleTimeString("en-US", { hour12: true });

  // Update analog clock hands
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours() % 12; // Use 12-hour format for analog clock

  // Calculate exact rotations
  const secondsDeg = (seconds / 60) * 360 - 90; // Second hand moves 360° per 60 seconds
  const minutesDeg = (minutes / 60) * 360 + (seconds / 60) * 6- 90; // Minute hand adjusts for seconds
  const hoursDeg = (hours / 12) * 360 + (minutes / 60) * 30-90; // Hour hand adjusts for minutes

  // Apply rotations to clock hands
  secondHand.style.transform = `rotate(${secondsDeg}deg)`;
  minuteHand.style.transform = `rotate(${minutesDeg}deg)`;
  hourHand.style.transform = `rotate(${hoursDeg}deg)`;
}

// Initialize and update every second
setInterval(updateDateTime, 1000);
updateDateTime();
