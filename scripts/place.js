function calculateWindChill(tempC, speedKmh) {
  return 13.12 + 0.6215 * tempC - 11.37 * Math.pow(speedKmh, 0.16) + 0.3965 * tempC * Math.pow(speedKmh, 0.16);
}

function displayFooterInfo() {
  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('last-modified').textContent = document.lastModified;
}

function displayWindChill() {
  const temp = parseFloat(document.getElementById("temperature").textContent);
  const windSpeed = parseFloat(document.getElementById("wind-speed").textContent);

  if (temp <= 10 && windSpeed > 4.8) {
    const chill = calculateWindChill(temp, windSpeed);
    document.getElementById("windchill").textContent = `${chill.toFixed(1)} °C`;
  } else {
    document.getElementById("windchill").textContent = "N/A";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  displayFooterInfo();
  displayWindChill();
});
