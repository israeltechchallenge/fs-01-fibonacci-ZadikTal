let sequenceInput = 8;
let result = fibcalc(sequenceInput);

function fibcalc(sequence) {
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

let sentence = `The Fibonacci of ${sequenceInput} is ${result}`;
let fibtext = document.getElementById("text");
fibtext.innerHTML = sentence;
