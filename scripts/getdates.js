// Set the current year
document.querySelector("#currentyear").textContent = new Date().getFullYear();

// Set the last modified date
document.querySelector("#lastModified").textContent = `Last modified: ${document.lastModified}`;
