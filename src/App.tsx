import { type MouseEventHandler, useCallback, useState } from 'react';
import viteLogo from '/vite.svg';
import reactLogo from './assets/react.svg';
import './App.css';
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {
  const [count, setCount] = useState(0);
  const handleClick = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      const button = event.target as HTMLButtonElement;
      button.setAttribute('data-number-of-click', (count + 1).toString());
      setCount((count) => count + 1);
    },
    [count],
  );

  return (
    <>
      <nav className="navbar navbar-expand-md sticky-top position-absolute top-0 end-0 w-100 bg-body-tertiary">
        <div className="container-fluid d-flex flex-row flex-row-reverse">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMenu"
            aria-controls="navbarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse d-flex flex-row flex-row-reverse"
            id="navbarMenu"
          >
            <ul className="navbar-nav d-flex flex-row flex-wrap ms-md-auto">
              <li className="nav-item dropdown">
                <ThemeSwitcher />
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section className="text-center py-2 w-100 container-fluid">
        <div>
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React + Biome</h1>
        <div className="card">
          <button onClick={handleClick} type="button">
            count is {count}
            <i className="bi bi-alarm ms-2" />
          </button>
          <p className="text-info">
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs text-white">Click on the Vite and React logos to learn more</p>
      </section>
    </>
  );
}

export default App;
