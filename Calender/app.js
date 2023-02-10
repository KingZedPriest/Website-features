const currentDate = document.querySelector(".current-date");
daysTag = document.querySelector(".days");
prevNextIcon = document.querySelectorAll(".icons span");

//Get the current date, year and month.
let date = new Date(),
  currYear = date.getFullYear(),
  currMonth = date.getMonth();
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

renderCalender = () => {
  let firstDayOfMonth = new Date(currYear, currMonth, 1).getDay(), //This gets the first day of the month
    lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate(), //This gets the last date of the month
    lastDayOfMonth = new Date(currYear, currMonth, lastDateOfMonth).getDay(), //This gets the last day of the month
    lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate(); //This gets the last date of the previous month
  let liTag = "";
  //Creating the List Of The Previous Month Last Days
  for (let i = firstDayOfMonth; i > 0; i--) {
    liTag += `<li class="inactive">${lastDateOfLastMonth - i + 1}</li>`;
  }
  //Creating the List Of The Current Month Days
  for (let i = 1; i <= lastDateOfMonth; i++) {
    //Adding the active class to the list if the current day, month and year matched.
    let isToday =
      i === date.getDate() &&
      currMonth === new Date().getMonth() &&
      currYear === new Date().getFullYear()
        ? "active"
        : "";
    liTag += `<li class="${isToday}">${i}</li>`;
  }
  //Creating the List Of The Next Month First Days
  for (let i = lastDayOfMonth; i < 6; i++) {
    liTag += `<li class="inactive">${i - lastDayOfMonth + 1}</li>`;
  }

  currentDate.innerText = `${months[currMonth]} ${currYear}`;
  daysTag.innerHTML = liTag;
};
renderCalender();

prevNextIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
    //If the current month is less than 0 or greater than 11
    if (currMonth < 0 || currMonth > 11) {
      date = new Date(currYear, currMonth);
      currYear = date.getFullYear(); //Updating the current year with the new date year.
      currMonth = date.getMonth(); //Updating the current month with the new date month
    } else {
      //Pass the new Date as the date value
      date = new Date();
    }
    renderCalender();
  });
});
