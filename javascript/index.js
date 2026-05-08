/* Getting Today's Date */
/* Referenced from https://www.freecodecamp.org/news/javascript-get-current-date-todays-date-in-js/ */
const d = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let day = days[d.getDay()];
let date = d.getDate();
let month = months[d.getMonth()];
let year = d.getFullYear();

document.getElementById("todaysdate").innerHTML = day + " " + date + " " + month + " " + year;

/* Sticky Navigation Bar */
/* Referenced from https://www.w3schools.com/howto/howto_js_navbar_sticky.asp */
window.onscroll = function () { myFunction() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.scrollY > sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

/* Article card */
/* Referenced from https://codepen.io/littlesnippets/pen/vKpvGP */
$(".hover").mouseleave(
  function () {
    $(this).removeClass("newsCardHover");
  }
);

/* Scroll to top */
/* Referenced from https://www.w3schools.com/howto/howto_js_scroll_to_top.asp */
// When the user clicks on the button, scroll to the top of the document
function scrollToTopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
