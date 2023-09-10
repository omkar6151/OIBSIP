document.getElementById("convertBtn").addEventListener("click", function() {
    // Get user input
    const temperature = parseFloat(document.getElementById("temperature").value);
    const unit = document.getElementById("unit").value;

    // Check if the input is a valid number
    if (isNaN(temperature)) {
        alert("Please enter a valid number.");
        return;
    }

    // Perform the conversion
    let result;
    if (unit === "celsius") {
        result = (temperature * 9/5) + 32;
        document.getElementById("result").textContent = `${temperature}°C is ${result.toFixed(2)}°F`;
    } else {
        result = (temperature - 32) * 5/9;
        document.getElementById("result").textContent = `${temperature}°F is ${result.toFixed(2)}°C`;
    }
});
