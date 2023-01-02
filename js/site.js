// get the values from the Page
// starts our controller function
function getValues() {
  // get values from the page
  let startValue = document.getElementById('startValue').value;
  let endValue = document.getElementById('endValue').value;
  let numbers = generateNumbers(startValue, endValue);

  // alert('The Start Value is ' + startValue);
  // alert('The End Value is ' + endValue);
  // We need to validate our input
  //parse into Integers
  startValue = parseInt(startValue);
  endValue = parseInt(endValue);
  // alert('The Combined Value is ' + (startValue + endValue));

  if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
    //we call generateNumbers
  } else {
    alert('You must enter integers');
  }

  // we call displayNumbers
  displayNumbers(numbers);
}

function generateNumbers(sValue, eValue) {
  let numbers = [];
  for (let index = sValue; index <= eValue; index++) {
    numbers.push(index);
  }

  return numbers;
}

function displayNumbers(numbers) {
  let templateRows = '';

  for (let index = 0; index < numbers.length; index++) {
    let className = 'even';
    let number = numbers[index];

    if (number % 2 === 0) {
      className = 'even';
    } else {
      className = 'odd';
    }

    templateRows += `<tr><td class="${className}">${number}</td></tr>`;
  }

  document.getElementById('results').innerHTML = templateRows;
}
