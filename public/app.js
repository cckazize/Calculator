let outputScreen = document.getElementById('display')
let displayValue = "";

function appendToDisplay(value) {
  displayValue += value;
  outputScreen.value = displayValue

}
function clearDisplay() {
  displayValue = "";
  outputScreen.value = displayValue;
}

function calculateResult() {
  try {
    let result = 0;
    if (displayValue.includes('+')) {
      let parts = displayValue.split('+');
      result = parseFloat(parts[0]) + parseFloat(parts[1])
    }
    else if (displayValue.includes('-')) {
      let parts = displayValue.split('-')
      result = parseFloat(parts[0]) - parseFloat(parts[1])
    }
    else if (displayValue.includes('*')) {
      let parts = displayValue.split('*')
      result = parseFloat(parts[0]) * parseFloat(parts[1])

    }
    else if (displayValue.includes('/')) {
      let parts = displayValue.split('/')
      result = parseFloat(parts[0]) / parseFloat(parts[1])

    }

    displayValue = result.toString()
    outputScreen.value = displayValue

  }
  catch {
    displayValue.value = "!error";
    outputScreen.value = displayValue

  }
}