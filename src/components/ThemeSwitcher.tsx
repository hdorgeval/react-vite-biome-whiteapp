import type React from 'react';
import { type MouseEventHandler, useCallback, useEffect, useMemo, useState } from 'react';

// ThemeSwitcher component to toggle between light and dark themes
const ThemeSwitcher: React.FC = () => {
  // State to manage the current theme
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  const switchThemeToDark = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      setTheme('dark');
    },
    [],
  );
  const switchThemeToLight = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      setTheme('light');
    },
    [],
  );

  const isLigthTheme = useMemo(() => theme === 'light', [theme]);
  const isDarkTheme = useMemo(() => theme === 'dark', [theme]);

  // Effect to update the body's data-bs-theme attribute whenever the theme changes
  useEffect(() => {
    document.body.setAttribute('data-bs-theme', theme);
  }, [theme]);

  return (
    <>
      <button
        type="button"
        className="nav-link dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i className={`bi bi-${theme === 'light' ? 'sun' : 'moon-stars-fill'}`} />
      </button>
      <ul className="dropdown-menu dropdown-menu-end">
        <li>
          <button
            type="button"
            className={`dropdown-item d-flex flex-row align-items-center ${isLigthTheme ? 'active' : ''}`}
            aria-pressed={isLigthTheme}
            onClick={switchThemeToLight}
          >
            <i className="bi bi-sun me-2" />
            <span className="flex-grow-1">Switch to light theme</span>
            {isLigthTheme && <i className="bi bi-check2 " />}
          </button>
        </li>
        <li>
          <button
            type="button"
            className={`dropdown-item d-flex flex-row align-items-center ${isDarkTheme ? 'active' : ''}`}
            aria-pressed={isDarkTheme}
            onClick={switchThemeToDark}
          >
            <i className="bi bi-moon-stars-fill me-2" />
            <span className="flex-grow-1">Switch to dark theme</span>
            {isDarkTheme && <i className="bi bi-check2 " />}
          </button>
        </li>
      </ul>
    </>
  );
};

export default ThemeSwitcher;
