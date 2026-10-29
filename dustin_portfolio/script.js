// Update the footer year automatically.
document.getElementById("year").textContent = new Date().getFullYear();

// Contact form opens a pre-filled email draft. Replace this with your own address if needed.
const portfolioEmail = "panliliodustin40@gmail.com";

document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("visitorName").value.trim();
  const email = document.getElementById("visitorEmail").value.trim();
  const message = document.getElementById("visitorMessage").value.trim();
  const subject = encodeURIComponent(`Portfolio message from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
  window.location.href = `mailto:${portfolioEmail}?subject=${subject}&body=${body}`;
});
