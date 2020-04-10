let toggleStatus = false;
function toggleNav() {
  let getAbout = document.querySelector("body header .dropdown_about");
  let getServices = document.querySelector("body header .dropdown_services");
  let getResources = document.querySelector("body header .dropdown_resources");

  if (document.getElementById("about")) {
    getAbout.style.display = "flex";
  } else if (document.getElementById("services")) {
    getServices.style.display = "flex";
  } else {
    let toggleStatus = true;
  }
}
