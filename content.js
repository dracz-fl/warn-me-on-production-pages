// Check if the URL contains "production" or "prod"
if (window.location.href.includes("production") || window.location.href.includes("prod")) {
  // Create a red bar element
  const warningBar = document.createElement("div");
  warningBar.textContent = "WARNING: You are in a production environment!";
  warningBar.style.position = "relative"; // Changed from fixed to relative
  warningBar.style.top = "0";
  warningBar.style.left = "0";
  warningBar.style.width = "100%";
  warningBar.style.backgroundColor = "red";
  warningBar.style.color = "white";
  warningBar.style.textAlign = "center";
  warningBar.style.zIndex = "9999";
  warningBar.style.padding = "10px";
  warningBar.style.fontSize = "16px";

  // Add the red bar to the page
  document.body.prepend(warningBar);
}
