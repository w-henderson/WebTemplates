function scrollToAnchor(name) {
  document.querySelector(`a[name="${name}"]`).scrollIntoView({ behavior: "smooth" });
  window.history.replaceState(null, null, `#${name}`);
}