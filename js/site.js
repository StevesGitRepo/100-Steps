// get the values from the Page
// starts our controller function
const getValues = () => {
  // get values from the page
  let startValue = document.getElementById('startValue').value;
  let endValue = document.getElementById('endValue').value;
  //we call generateNumbers
  alert('The Start Value: ' + startValue);
  //we call generateNumbers
  let numbers = generateNumbers(startValue, endValue);
};

// generate numbers from startValue to the endValue
// logic functions(s)

const generateNumbers = (sValue, eValue) => {
  let numbers = [];

  //get all numbers from start to end

  for (let i = sValue; i <= eValue; i++) {
    numbers.push(index);
  }

  return numbers;
};

// display the numbers and mark even numbers bold
// display or view functions
const displayNumbers = () => {};
