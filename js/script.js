function convert() {
  // Retrieving temperature value and unit type from HTML elements
  var temperature = parseFloat(document.getElementById('inputTemp').value);
  var unit = document.getElementById('tempUnit').value;
  var result;
  
  // Checking the unit type and performing the appropriate conversion
  if (unit === 'celsius') {
      // Conversion formula from Celsius to Fahrenheit
      result = (temperature * 9/5) + 32;
      // Displaying the result on the webpage
      document.getElementById('result').innerText = temperature + '°C = ' + result.toFixed(2) + '°F';
  } else if (unit === 'fahrenheit') {
      // Conversion formula from Fahrenheit to Celsius
      result = (temperature - 32) * 5/9;
      // Displaying the result on the webpage
      document.getElementById('result').innerText = temperature + '°F = ' + result.toFixed(2) + '°C';
  }
}
