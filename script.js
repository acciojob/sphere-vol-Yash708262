function volume_sphere(event) {
    event.preventDefault(); // Stop the form from reloading the page

    const radiusInput = document.getElementById("radius");
    const volumeOutput = document.getElementById("volume");

    const r = parseFloat(radiusInput.value); // Convert input to number

    // Check for invalid input: non-numeric or negative
    if (isNaN(r) || r < 0) {
        volumeOutput.value = "NaN";
        return;
    }

    // Calculate the volume: (4/3) * π * r³
    const volume = (4 / 3) * Math.PI * Math.pow(r, 3);

    // Display volume rounded to 4 decimal places
    volumeOutput.value = volume.toFixed(4);
}

// Attach the function when the page loads
window.onload = function () {
    document.getElementById("MyForm").onsubmit = volume_sphere;
};
