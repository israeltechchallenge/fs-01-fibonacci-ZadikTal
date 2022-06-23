function fibcalc(sequence) {
  let url = "http://localhost:5050/fibonacci/" + sequence;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("resultNum").innerHTML = data["result"];
      console.log(data["result"]);
    });
}

let btn = document.querySelector("#resultBtn");
btn.addEventListener("click", function () {
  let sequenceInput = document.getElementById("sequenceInput").value;
  fibcalc(sequenceInput);
});
