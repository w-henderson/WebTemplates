function scrollToAnchor(name) {
  document.querySelector(".navigation").className = "navigation";
  document.querySelector(`a[name="${name}"]`).scrollIntoView({ behavior: "smooth" });
  window.history.replaceState(null, null, `#${name}`);
}

function toggleMenu() {
  let menuActive = document.querySelector(".navigation").className === "navigation shown";
  document.querySelector(".navigation").className = menuActive ? "navigation" : "navigation shown";
}