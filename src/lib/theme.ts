/* ========================================================================
   theme — Sistema de temas globales (Nebula Desktop / Midnight Terminal)
   Clave de persistencia: 'ligan-theme'
   Aplica data-theme="nebula" | "terminal" en <html>.
   ======================================================================== */

export type Theme = 'nebula' | 'terminal';
export const THEMES: Theme[] = ['nebula', 'terminal'];
export const THEME_STORAGE_KEY = 'ligan-theme';

/** Colores de cada tema (para <meta name="theme-color">). */
export const THEME_COLORS: Record<Theme, string> = {
  nebula: '#1A0D2E',
  terminal: '#120C1C',
};

export function isTheme(value: unknown): value is Theme {
  return value === 'nebula' || value === 'terminal';
}

/**
 * Script inline temprano que se inyecta en el <head> (antes del primer paint)
 * para evitar parpadeo (FOUC). Lee 'ligan-theme'; si no hay valor guardado
 * usa prefers-color-scheme (dark → terminal, light → nebula).
 */
export const THEME_CLIENT_SCRIPT = `
(function() {
  var KEY = 'ligan-theme';
  var THEMES = ['nebula', 'terminal'];
  var theme = null;
  try {
    var stored = localStorage.getItem(KEY);
    if (THEMES.indexOf(stored) > -1) theme = stored;
  } catch (e) {}
  if (!theme) {
    theme = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
      ? 'terminal'
      : 'nebula';
  }
  var root = document.documentElement;
  root.setAttribute('data-theme', theme);
  var meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', theme === 'terminal' ? '#120C1C' : '#1A0D2E');
  window.__liganTheme = {
    get: function() {
      var t = null;
      try { t = localStorage.getItem(KEY); } catch (e) {}
      return (t === 'terminal' || t === 'nebula') ? t : theme;
    },
    set: function(next) {
      if (THEMES.indexOf(next) === -1) return;
      try { localStorage.setItem(KEY, next); } catch (e) {}
      document.documentElement.setAttribute('data-theme', next);
      var m = document.querySelector('meta[name="theme-color"]');
      if (m) m.setAttribute('content', next === 'terminal' ? '#120C1C' : '#1A0D2E');
      var evt = new CustomEvent('theme-change', { detail: next });
      document.dispatchEvent(evt);
    }
  };
})();
`;
