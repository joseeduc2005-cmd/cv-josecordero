README — Portafolio Profesional de José Cordero (TXT)
===========================================================

Título del repositorio
----------------------
Versión final del portafolio José Cordero

Descripción
-----------
Sitio web personal accesible y responsivo que incluye:
- Presentación (nombre, foto y breve biografía)
- Portafolio/experiencia (proyectos destacados)
- Contacto (formulario + redes sociales)
- Buenas prácticas de UX/UI (jerarquía visual, navegación clara, feedback)
- Accesibilidad (alt en imágenes, roles ARIA, foco visible, labels correctas)
- Diseño responsivo con Flexbox y CSS Grid

Estructura del proyecto
-----------------------
mi-portfolio/
├─ index.html
├─ css/
│  ├─ styles.css
│  └─ cv.css            (estilos del CV imprimible)
├─ js/
│  └─ main.js
├─ img/
│  └─ jose.jpg          (reemplazar por tu foto 600x600 aprox.)
├─ cv.html              (currículum imprimible estilo profesional)
└─ docs/
   └─ accesibilidad-ux.md  (documentación de UX/Accesibilidad y pruebas)

Tecnologías
-----------
- HTML5 semántico (header, main, section, footer)
- CSS3 (variables, Flexbox, Grid, media queries)
- JavaScript (interacciones básicas; menú móvil; feedback de formulario)

Accesibilidad aplicada
----------------------
- Texto alternativo (alt) en imagen de perfil
- Enlace “Saltar al contenido” para navegación por teclado
- Roles ARIA básicos: banner, navigation, main, contentinfo
- Etiquetas de formulario con label/for y legend/fieldset
- Mensaje de estado accesible (role="status", aria-live="polite")
- Foco visible con :focus-visible
- Respeto a prefers-reduced-motion
- Contraste adecuado de colores

Cómo ejecutar localmente
------------------------
Opción 1) VS Code + Live Server:
  - Clic derecho sobre index.html → “Open with Live Server”

Opción 2) Python (3.x):
  - python -m http.server 8080
  - Abrir http://localhost:8080

Opción 3) Node (sin instalar global):
  - npx serve -l 8080
  - Abrir http://localhost:8080

Publicación (GitHub Pages)
--------------------------
1. Subir a rama main del repo.
2. En GitHub: Settings → Pages → Branch: main / (root) → Save.
3. La página quedará disponible en:
   https://USUARIO.github.io/NOMBRE-DEL-REPO/

Guía rápida de Git
------------------
git init
git add .
git commit -m "Versión final del portafolio José Cordero"
git branch -M main
git remote add origin https://github.com/joseeduc2005-cmd/cv-josecordero.git
git push -u origin main

Checklist de la rúbrica (cumplimiento)
--------------------------------------
[✓] Estructura semántica: header, main, section, footer
[✓] Secciones: Presentación, Portafolio/Experiencia, Contacto
[✓] Responsivo con Flex/Grid (3→2→1 columnas; menú móvil)
[✓] Accesibilidad: alt, labels, roles ARIA, foco, contraste, teclado
[✓] UX/UI: jerarquía tipográfica, navegación clara, coherencia visual
[✓] Feedback visual: hover/focus y mensaje de formulario
[✓] Pruebas/documentación: docs/accesibilidad-ux.md

Créditos / Autor
----------------
José Eduardo Cordero Segarra
Universidad Católica de Cuenca (UCACUE)
Contacto: joseeduc.2005@gmail.com  |  Tel: +593 98 357 4354
Ubicación: Cuenca, Ecuador
