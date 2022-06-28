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

const checkBox = document.getElementById("checkbox");
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
      calcList();
      document.getElementById("resultNum").innerHTML = data["result"];
    })
    .catch((error) => {
      cleanUp();
      let errorDiv42 = document.createElement("div");
      errorDiv42.innerHTML = "Server Error: 42 is the meaning of life";
      errorDiv42.classList.add("text-danger", "ms-1", "text-opacity-75");
      errorDiv42.setAttribute("id", "error42");
      calcDiv.appendChild(errorDiv42);
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

function calculation(sequence) {
  sequence = parseInt(sequence);
  if (sequence === 0) {
    console.log(0);
    return (document.getElementById("resultNum").innerHTML = 0);
  } else if (sequence === 1) {
    return (document.getElementById("resultNum").innerHTML = 1);
  } else {
    let arr = [0, 1];
    for (let i = 2; i <= sequence; i++) {
      arr.push(arr[i - 2] + arr[i - 1]);
    }
    return (document.getElementById("resultNum").innerHTML =
      arr[arr.length - 1]);
  }
}

window.onload = () => calcList();
function calcList() {
  let resultBox = document.getElementById("resultsList");
  resultBox.innerHTML = "";
  let url = "http://localhost:5050/getFibonacciResults";
  fetch(url)
    .then((response) => response.json())
    .then((oldData) => {
      spinnerLoad.classList.add("d-none");
      const arrOfResults = oldData.results.sort(
        (a, b) => b.createdDate - a.createdDate
      );
      for (let i = 0; i < arrOfResults.length; i++) {
        let resultSentence = `<p class="text-decoration-underline pb-3">The Fibbonaci of <b>${
          arrOfResults[i].number
        }</b> is <b>${arrOfResults[i].result}</b>. Calculated at: ${new Date(
          arrOfResults[i].createdDate
        )}</p>`;
        resultBox.innerHTML += resultSentence;
      }
    });
}

btn.addEventListener("click", function () {
  cleanUp();
  let sequenceInput = document.getElementById("sequenceInput").value;
  if (sequenceInput > 50) {
    inputField.classList.remove("border-dark", "border-opacity-25");
    inputField.classList.add("border-danger", "text-danger");
    errorDivPlaceholder.appendChild(errorDivOver50);
  } else {
    if (sequenceInput >= 0) {
      if (checkBox.checked == true) {
        fibcalc(sequenceInput);
      } else {
        calculation(sequenceInput);
      }
    }
  }
  calcList();
  spinnerLoad.classList.remove("d-none");
});