const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-number");
const message = document.querySelector("#message");

function operateValues(sum, luckyNumber) {
  if (sum % luckyNumber === 0) {
    message.innerText = "Hey! that's a lucky day 😍";
  } else {
    message.innerText = "Sorry! not a lucky day 🙄";

  }
}


checkButton.addEventListener("click", () => {
  const dob = dateOfBirth.value;
  const sum = calulateDateSum(dob);
  if (dob && luckyNumber) {
    if (luckyNumber.value > 0) {
      operateValues(sum, luckyNumber.value);
     
    } else {
     
    message.innerText = "Please enter a valid lucky number";
    }
  }else{
    message.innerText = "Please fill the fields 😐️";
  }


});


function calulateDateSum(dob) {
  dob = dob.replaceAll("-", ""); //updating the dob without characters between the numbers
  let sum = 0;
  for (let i = 0; i < dob.length; i++) {

    sum = sum + Number(dob.charAt(i)); // updating the sum by adding the initialised sum(0) and numbers from the starting index of dob
  }
  return sum;
}