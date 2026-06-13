/// <reference types="astro/client" />

interface Window {
  /** Guarda para inicializar el tema una sola vez (ver BaseHead). */
  __themeInit?: boolean;
  /** Guarda para inicializar los listeners de navegación una sola vez (ver Layout). */
  __navInit?: boolean;
  /** Guarda para el cierre del selector de idioma al hacer clic fuera. */
  __langInit?: boolean;
  /** Guarda para el listener de scroll de la cabecera (una sola vez). */
  __headerInit?: boolean;
}
