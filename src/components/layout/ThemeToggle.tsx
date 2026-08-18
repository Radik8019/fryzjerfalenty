import { useTheme } from '../../context/ThemeProvider'
import { useI18n } from '../../hooks/useI18n'

export function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const { t } = useI18n()
  const dark = theme === 'dark'

  return (
    <button
      type="button"
      className="icon-btn"
      aria-pressed={dark}
      aria-label={dark ? t.chrome.switchToLight : t.chrome.switchToDark}
      title={dark ? t.chrome.themeLight : t.chrome.themeDark}
      onClick={toggle}
    >
      {dark ? (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 3v2M12 19v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M3 12h2M19 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M17.5 14.5A7 7 0 0 1 9.5 6.5 7 7 0 1 0 17.5 14.5z" />
        </svg>
      )}
    </button>
  )
}
