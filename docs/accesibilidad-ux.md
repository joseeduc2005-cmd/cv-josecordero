# Documentación: Accesibilidad, UX/UI y Pruebas

## Accesibilidad implementada
- **Texto alternativo (`alt`)** en imagen de perfil.
- **Enlace Saltar al contenido** para lectores de pantalla y teclado.
- **Roles ARIA**: `banner`, `navigation`, `main`, `contentinfo`.
- **Estados de foco visibles** (`:focus-visible`) con alto contraste.
- **Etiquetas de formulario** (`label for=`) y ayuda con `aria-describedby`.
- **Mensajes de estado** con `role="status"` y `aria-live="polite"`.
- **Movimiento reducido** respetado (`prefers-reduced-motion`).
- **Contraste**: paleta pensada para buena legibilidad.
- **Navegación con teclado**: todo es alcanzable y el foco es visible.

## UX/UI
- **Jerarquía visual** con `h1h3`, subtítulos y tarjetas.
- **Responsivo**: Grid en portafolio (321), Flex en cabecera y pie.
- **Menú móvil** con botón accesible (`aria-expanded`).
- **Consistencia**: botones, badges y espaciados coherentes.
- **Feedback**: validación mínima del formulario con mensaje visible.

## Pruebas sugeridas
- **Navegadores**: Chrome, Firefox y Edge.
- **Resoluciones**: 320640, 7681024, 1366768, 19201080.
- **Teclado**: `Tab` para navegar; `Enter` activa botones/enlaces.
- **Herramientas**: Lighthouse y WAVE para auditorías.
## Evidencias de pruebas
- **Chrome 128 / 19201080**: sin desbordes; Lighthouse Access.  95.
- **Firefox 118 / 1366768**: menú móvil correcto; foco visible en tabs.
- **Edge 128 / 375667 (móvil)**: grid 1 columna; botón Ver más no se superpone a badges.

## Observaciones de accesibilidad (WAVE/Lighthouse)
- Contraste: OK en texto y botones.
- Enfoque teclado: visible en nav, tarjetas y formulario.
- Roles/landmarks: banner, navigation, main, contentinfo detectados.
