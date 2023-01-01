// get the values from the Page
// starts our controller function
const getValues = () => {
  // get values from the page
  let startValue = document.getElementById('startValue').value;
  let endValue = document.getElementById('endValue').value;

  // We need to validate our input
  //parse into Integers
  startValue = parseInt(startValue);
  endValue = parseInt(endValue);

  if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
    //we call generateNumbers
    let numbers = generateNumbers(startValue, endValue);
    // we call displayNumbers
    displayNumbers(numbers);
  } else {
    alert('You must enter integers');
  }
};

//we call generateNumbers
// numbers = generateNumbers(startValue, endValue);
// generate numbers from startValue to the endValue
// logic functions(s)

// const generateNumbers = (sValue, eValue) => {
//   let numbers = [];

//get all numbers from start to end

//   for (let index = sValue; index <= eValue; index++) {
//     numbers.push(index);
//   }

//   return numbers;
// };

// display the numbers and mark even numbers bold
// display or view functions
const displayNumbers = (numbers) => {
  let templateRow = '';

  for (let i = 0; i <= numbers.length; i++) {
    let number = numbers[index];
  }

  document.getElementById('results').innerHTML = templateRows;
};
