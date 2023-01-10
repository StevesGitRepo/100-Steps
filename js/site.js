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
  // and give hints to the min/max integer ranges of the loop
  if (startValue === -100 && endValue === 200) {
    alert(
      "Congratulations! You discovered this loop's limits of time and space. I hope you have enjoyed exploring these conditional statements. Have a nice day! :)"
    );
    displayNumbers(numbers);
  }
  if (startValue < -100 || endValue > 200) {
    alert('Value limits exceeded. Please try again.');
    return false;
  }
  if (
    (startValue < 1 || endValue > 100) &&
    startValue !== -100 &&
    endValue !== 200
  ) {
    alert(
      'A wider range of values still exist. Can you find the both edges of the number range?'
    );
  }
  if (
    (startValue < 1 || endValue > 100) &&
    (startValue === -100 || endValue === 200) &&
    !(startValue === -100 && endValue === 200)
  ) {
    alert(
      'Well done! You have found one of the range limits. One down, one to go!'
    );
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
