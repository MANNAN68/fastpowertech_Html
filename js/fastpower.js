// Profile Page JS Code
// Profile Page JS Code
// form open
var openPassForm = document.getElementById("openPassForm");
var formContainer = document.getElementById("formContainer");
var closeButton = document.getElementById("closeButton");
function toggleForm() {
  formContainer.classList.toggle("hidden");
}
openPassForm.addEventListener("click", toggleForm);
closeButton.addEventListener("click", toggleForm);

// form open with margin

var openForm = document.getElementById("openForm");
var openFormContainer = document.getElementById("openFormContainer");
var openFormClose = document.getElementById("openFormClose");

openForm.addEventListener("click", function () {
  openFormContainer.classList.toggle("hidden");
  if (!openFormContainer.classList.contains("hidden")) {
    document.getElementById("otherDiv").classList.add("with-margin");
  } else {
    document.getElementById("otherDiv").classList.remove("with-margin");
  }
});

openFormClose.addEventListener("click", function () {
  openFormContainer.classList.add("hidden");
  document.getElementById("otherDiv").classList.remove("with-margin");
});
// End Profile Page JS Code
// End Profile Page JS Code
