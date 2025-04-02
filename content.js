// Check if the domain contains "production" or "prod"
const hostname = window.location.hostname;
if (hostname.includes("production") || hostname.includes("prod")) {
  // Create a red bar element
  const warningBar = document.createElement("div");
  warningBar.textContent = "WARNING: You are in a production environment!";
  warningBar.style.position = "fixed"; // Changed to fixed position
  warningBar.style.bottom = "0"; // Moved to bottom instead of top
  warningBar.style.left = "0";
  warningBar.style.width = "100%";
  warningBar.style.backgroundColor = "red";
  warningBar.style.color = "white";
  warningBar.style.textAlign = "center";
  warningBar.style.zIndex = "9999";
  warningBar.style.padding = "10px";
  warningBar.style.fontSize = "16px";
  warningBar.style.display = "flex";
  warningBar.style.justifyContent = "center";
  warningBar.style.alignItems = "center";

  // Create close button
  const closeButton = document.createElement("span");
  closeButton.textContent = "✕";
  closeButton.style.position = "absolute";
  closeButton.style.right = "20px";
  closeButton.style.top = "50%";
  closeButton.style.transform = "translateY(-50%)";
  closeButton.style.cursor = "pointer";
  closeButton.style.fontWeight = "bold";
  closeButton.style.fontSize = "14px";
  closeButton.style.padding = "0 5px";

  // Add click event to close button
  closeButton.addEventListener("click", function() {
    warningBar.remove();
  });

  // Add the close button to the warning bar
  warningBar.appendChild(closeButton);

  // Add the red bar to the page (still using prepend since it's just adding to DOM)
  document.body.prepend(warningBar);
}
// Check if the domain contains "integration" or "int"
else if (hostname.includes("integration") || hostname.includes("int") || hostname.includes("dev")) {
  // Create a yellow bar element for integration environments
  const warningBar = document.createElement("div");
  warningBar.textContent = "NOTICE: Integration environment";
  warningBar.style.position = "fixed";
  warningBar.style.bottom = "0";
  warningBar.style.left = "0";
  warningBar.style.width = "100%";
  warningBar.style.backgroundColor = "#FFCC00"; // Yellow color
  warningBar.style.color = "black"; // Better contrast with yellow
  warningBar.style.textAlign = "center";
  warningBar.style.zIndex = "9999";
  warningBar.style.padding = "5px"; // Smaller padding
  warningBar.style.fontSize = "12px"; // Smaller font
  warningBar.style.display = "flex";
  warningBar.style.justifyContent = "center";
  warningBar.style.alignItems = "center";

  // Create close button
  const closeButton = document.createElement("span");
  closeButton.textContent = "✕";
  closeButton.style.position = "absolute";
  closeButton.style.right = "20px";
  closeButton.style.top = "50%";
  closeButton.style.transform = "translateY(-50%)";
  closeButton.style.cursor = "pointer";
  closeButton.style.fontWeight = "bold";
  closeButton.style.fontSize = "12px"; // Smaller font for close button
  closeButton.style.padding = "0 3px"; // Smaller padding

  // Add click event to close button
  closeButton.addEventListener("click", function() {
    warningBar.remove();
  });

  // Add the close button to the warning bar
  warningBar.appendChild(closeButton);

  // Add the yellow bar to the page
  document.body.prepend(warningBar);
}
