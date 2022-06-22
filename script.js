function fibcalc(sequence) {
 sequence = parseInt(sequence); 
  if (sequence === 0) {
    return 0;
  } else if (sequence === 1) {
    return 1;
  } else {
    let arr = [0, 1];
    for (let i = 2; i <= sequence; i++) {
      arr.push(arr[i - 2] + arr[i - 1]);
    }
    return arr[arr.length-1];
  }
}

let btn = document.querySelector('#resultBtn');
btn.addEventListener('click', function() {
let sequenceInput = document.getElementById("sequenceInput").value;
let result = fibcalc(sequenceInput);
console.log(result);
let showResult = document.getElementById("resultNum");
showResult.innerHTML = result;
})