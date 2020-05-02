/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("mobileDropdown").classList.toggle("show");
}
function navFunction() {
  document.getElementById("dropdown_about").classList.toggle("show_dropdown");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown_about");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show_dropdown")) {
        openDropdown.classList.remove("show_dropdown");
      }
    }
  }
};

function searchFunction() {
  document.getElementById("dropdown_search").classList.toggle("show_dropdown");
}

function changeIcon(x) {
  x.classList.toggle("change");
}

/* When the user clicks on the button,
toggle between hiding and showing the about pages */
function insideMenuFunction() {
  document.getElementById("mobile_hide").classList.toggle("show_about");
}
// function (x) {
//   x.getElementById("hide_service").classList.toggle("show");
//   x.getElementById("rightArrow").classList.toggle("rotate");
// }

function servicesFunction() {
  var x = document.getElementById("hide_service");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}

// function filterFunction() {
//   var x = document.getElementsByClassName("byType");
//   var x = document.getElementsByClassName("byDate");
//   if (x == "byType") {
//     document.getElementById("hide_type").classList.toggle("show_type");
//   } else if (x == "byDate"") {
//     document.getElementById("hide_date").classList.toggle("show_type");
//   }
// }
