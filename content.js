// Check if the domain contains "production" or "prod"
const hostname = window.location.hostname;
if (hostname.includes("production") || hostname.includes("prod")) {
  // Create a red bar element
  const warningBar = document.createElement("div");
  warningBar.textContent = "WARNING: You are in a production environment!";
  warningBar.style.position = "relative";
  warningBar.style.top = "0";
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

  // Add the red bar to the page
  document.body.prepend(warningBar);
}
