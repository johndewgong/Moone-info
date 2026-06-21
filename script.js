// Contact form confirmation
const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = String(formData.get("name") || "").trim();

    formStatus.textContent = name
      ? `Thanks, ${name}. Your message has been noted for this prototype.`
      : "Thanks. Your message has been noted for this prototype.";

    contactForm.reset();
  });
}
