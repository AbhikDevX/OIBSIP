document.getElementById("btn").addEventListener("click", function () {
    const temperature = parseFloat(document.getElementById("Temperature").value);
    const unit = document.getElementById("units").value;
    let convertedTemperature;
  
    if (isNaN(temperature)) {
      document.getElementById("result").textContent = "Please enter a valid number.";
      return;
    }
  
    if (unit === "Celsius") {
      convertedTemperature = (temperature * 9/5) + 32;
      document.getElementById("result").textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} °F`;
    } else if (unit === "Fahrenheit") {
      convertedTemperature = (temperature - 32) * 5/9;
      document.getElementById("result").textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} °C`;
    } else if (unit === "Kelvin") {
      convertedTemperature = temperature + 273.15;
      document.getElementById("result").textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} K`;
    }
  });
