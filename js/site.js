// get the values from the page, starts our controller function
const getValues = () => {
  // get values from the page
  let startValue = document.getElementById('startValue').value;
  let endValue = document.getElementById('endValue').value;
  let numbers = generateNumbers(startValue, endValue);

  // We need to validate our input
  //parse into Integers
  startValue = parseInt(startValue);
  endValue = parseInt(endValue);

  // this script checks for integers, run before and after the parseInt:
  // alert('The Combined Value is ' + (startValue + endValue));

  if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
    //we call generateNumbers
  } else {
    alert('You must enter integers');
  }

  // these scripts alert the user that they are exceeding the scope of the project
  if (startValue === -99 && endValue === 199) {
    alert(
      "Congratulations! You have located this loop's extreme limits of time and space. Have a nice day! :)"
    );
    displayNumbers(numbers);
  }
  if (startValue < -99 || endValue > 199) {
    alert('Error: Value limits exceeded. Please try again.');
    return false;
  }
  if (
    (startValue < 1 || endValue > 100) &&
    startValue !== -99 &&
    endValue !== 199
  ) {
    alert(
      'These value work and a wider range of values still exist. Can you find the both edges of the number range?'
    );
  }
  if (
    (startValue < 1 || endValue > 100) &&
    (startValue === -99 || endValue === 199) &&
    !(startValue === -99 && endValue === 199)
  ) {
    alert('You found one of the range limits. One more to go!');
  }

  // we call displayNumbers
  displayNumbers(numbers);
};

const generateNumbers = (sValue, eValue) => {
  let numbers = [];

  for (let index = sValue; index <= eValue; index++) {
    numbers.push(index);
  }

  return numbers;
};

const displayNumbers = (numbers) => {
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
  // the following console.log script is used for debugging
  // console.log(numbers);
  document.getElementById('results').innerHTML = templateRows;
};
