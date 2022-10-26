//--------------------------------------------------//
//------------   Select DOM Elements     -----------//
//--------------------------------------------------//
const btn = document.querySelector("#btn-submit");
const ratingList = document.querySelectorAll("input[name='rating']");
const ratingSection = document.querySelector("#form-rating-section");
const formSentSection = document.querySelector("#form-sent");
const ratingUI = document.querySelector(".user-rating");

//--------------------------------------------------//
//------------     Global Variables      -----------//
//--------------------------------------------------//
let rating = null;

//--------------------------------------------------//
//------------      Event Listeners      -----------//
//--------------------------------------------------//
btn.addEventListener("click", sendForm);

/**
 * When the animation added by clicking the button without selecting
 * any rating, the class (containing the animation) is removed.
 */
btn.addEventListener("animationend", () => {
  if (btn.classList.contains("btn-shake")) {
    btn.classList.remove("btn-shake");
  }
});

//--------------------------------------------------//
//------------   Function Definition     -----------//
//--------------------------------------------------//
function sendForm(e) {
  e.preventDefault();

  // Loop through the radio button nodeList and extract the rating (if any).
  for (rate of ratingList) {
    if (rate.checked) {
      rating = rate.value;
    }
  }

  if (rating) {
    console.log(`User rate ${rating}`);

    // Set the value selected by user.
    ratingUI.textContent = rating;

    // hide form.
    ratingSection.style.display = "none";

    // display form sent section.
    formSentSection.style.display = "block";
  } else {
    console.log("No rate selected");
    btn.classList.add("btn-shake");
  }
}
