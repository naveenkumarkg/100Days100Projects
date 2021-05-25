const profile = document.getElementById("profile");
const checkbox = document.getElementById("checkbox");

// console.log(profile)
// console.log(checkbox)

checkbox.addEventListener("change", function () {
  // console.log(checkbox.checked);

  if (checkbox.checked) {
    profile.src = "./img/kids.png";
  } else {
    profile.src = "./img/adult.png";
  }
});
