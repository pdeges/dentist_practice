function hamburger_toggle() {
  var x = document.getElementById("sidebar_id");
  var ham_button = document.getElementById("hamburger_id")
  if (x.style.visibility === "hidden") {
    x.style.visibility = "visible";
    ham_button.style.color = "var(--light)"
  } else {
    x.style.visibility = "hidden";
    ham_button.style.color = "var(--aqua)"
  }
}
