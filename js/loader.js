// Loading spinner
var loader;
function noscroll() {
  window.scrollTo(0, 0);
}
window.addEventListener('scroll', noscroll);
document.addEventListener("DOMContentLoaded", function(e) {
  loader = setTimeout(showPage, 4000);

  function showPage() {
    document.getElementById("load-overlay").style.display = "none";
    window.removeEventListener('scroll', noscroll);
  }
});
