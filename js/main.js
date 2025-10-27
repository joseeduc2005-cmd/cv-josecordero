(function(){
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const menuBtn = document.getElementById("menuBtn");
  const nav = document.getElementById("nav");
  if(menuBtn && nav){
    menuBtn.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(open));
      if(open){ nav.querySelector("a")?.focus(); }
    });
  }

  // Simulación de envío con feedback accesible
  const form = document.querySelector(".contact-form");
  const feedback = document.querySelector(".form-feedback");
  if(form && feedback){
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const nombre = document.getElementById("nombre").value.trim();
      const correo = document.getElementById("correo").value.trim();
      const mensaje = document.getElementById("mensaje").value.trim();

      if(!nombre || !correo || !mensaje){
        feedback.textContent = "Por favor, completa todos los campos.";
        feedback.style.color = "orange";
        return;
      }
      const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
      if(!ok){
        feedback.textContent = "El correo no tiene un formato válido.";
        feedback.style.color = "orange";
        return;
      }
      feedback.textContent = "¡Gracias! Tu mensaje fue enviado (simulado).";
      feedback.style.color = "#93ff7d";
      form.reset();
    });
  }
})();
