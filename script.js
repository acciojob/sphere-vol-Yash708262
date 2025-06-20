function volume_sphere() {
     const radiusInput = document.getElementById("radius");
    const volumeOutput = document.getElementById("volume");

    const r = parseFloat(radiusInput.value);

    if (isNaN(r) || r < 0) {
        volumeOutput.value = "NaN";
        return;
    }

    const volume = (4 / 3) * Math.PI * Math.pow(r, 3);
    volumeOutput.value = volume.toFixed(4);
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
