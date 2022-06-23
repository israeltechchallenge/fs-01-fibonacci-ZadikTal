let spinnerLoad = document.getElementById("sppinner");
let inputField = document.querySelector("#sequenceInput");
const errorDivPlaceholder = document.querySelector("#error-div-placeholder");
const calcDiv = document.querySelector("#calc-div");


function fibcalc(sequence) {
  let url = "http://localhost:5050/fibonacci/" + sequence;
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Server Error: 42 is the meaning of life");
    })
    .then((data) => {
      document.getElementById("resultNum").innerHTML = data["result"];
      spinnerLoad.classList.add("d-none");
    })
    .catch((error) => {
      let errorDiv42 = document.createElement("div");
      errorDiv42.innerHTML = "Server Error: 42 is the meaning of life";
      errorDiv42.classList.add( "text-danger", "ms-1", "text-opacity-75", "error-box42");
      errorDiv42.setAttribute("id", "error42");
      calcDiv.appendChild(errorDiv42);
      spinnerLoad.classList.add("d-none");
    });
}

let btn = document.querySelector("#resultBtn");
btn.addEventListener("click", function () {
  try {
    let error50 = document.getElementById("error50");
    error50.parentElement.removeChild(error50);
  } catch {};

  try {
    let error42 = document.getElementById("error42");
    error42.parentElement.removeChild(error42);
  } catch {};
  
  document.getElementById("resultNum").innerHTML = "";
  let sequenceInput = document.getElementById("sequenceInput").value;
  spinnerLoad.classList.remove("d-none");
  if (sequenceInput > 50) {
    spinnerLoad.classList.add("d-none");
    inputField.classList.remove("border-dark", "border-opacity-25");
    inputField.classList.add("border-danger", "text-danger");
    let errorDiv = document.createElement("div");
    errorDiv.innerHTML = "Can't be larger than 50";
    errorDiv.setAttribute("id", "error50");
    errorDiv.classList.add("bg-danger", "border-danger", "text-danger", "bg-opacity-25", "rounded-1", "error-box50");
    errorDivPlaceholder.appendChild(errorDiv);


  } else {
    if (sequenceInput > 0) {
      fibcalc(sequenceInput);
    }
    spinnerLoad.classList.add("d-none");
  }
});