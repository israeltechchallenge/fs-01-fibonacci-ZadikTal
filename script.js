let spinnerLoad = document.getElementById("sppinner");
let inputField = document.querySelector("#sequenceInput");
const errorDivPlaceholder = document.querySelector("#error-div-placeholder");
const calcDiv = document.querySelector("#calc-div");
let btn = document.querySelector("#resultBtn");
const errorDivOver50 = document.createElement("div");
errorDivOver50.innerHTML = "Can't be larger than 50";
errorDivOver50.setAttribute("id", "error50");
errorDivOver50.classList.add(
  "bg-danger",
  "border-danger",
  "text-danger",
  "bg-opacity-25",
  "rounded-1",
  "error-box50"
);

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
      cleanUp();
      let errorDiv42 = document.createElement("div");
      errorDiv42.innerHTML = "Server Error: 42 is the meaning of life";
      errorDiv42.classList.add("text-danger", "ms-1", "text-opacity-75");
      errorDiv42.setAttribute("id", "error42");
      calcDiv.appendChild(errorDiv42);
      spinnerLoad.classList.add("d-none");
    });
}

function cleanUp() {
  document.getElementById("resultNum").innerHTML = "";
  try {
    inputField.classList.remove("border-danger", "text-danger");
  } catch {}

  try {
    let errorDiv52 = document.getElementById("error50");
    errorDiv52.parentElement.removeChild(errorDiv52);
  } catch {}

  try {
    let error42 = document.getElementById("error42");
    error42.parentElement.removeChild(error42);
  } catch {}
}

btn.addEventListener("click", function () {
  cleanUp();
  let sequenceInput = document.getElementById("sequenceInput").value;
  spinnerLoad.classList.remove("d-none");
  if (sequenceInput > 50) {
    spinnerLoad.classList.add("d-none");
    inputField.classList.remove("border-dark", "border-opacity-25");
    inputField.classList.add("border-danger", "text-danger");
    errorDivPlaceholder.appendChild(errorDivOver50);
  } else {
    if (sequenceInput > 0) {
      fibcalc(sequenceInput);
    }
    spinnerLoad.classList.add("d-none");
  }
});
