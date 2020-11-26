window.onload = function() {
  const nodes = document.querySelectorAll(".item");
  for (const node of nodes) {
    node.addEventListener("click", function(elem) {
      switchDoneState(elem);
    });
  }
};

function switchDoneState(elem) {
  const isDone = JSON.parse(elem.target.getAttribute("data-done-state"));
  elem.target.setAttribute("data-done-state", !isDone);
}
