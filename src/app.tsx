import './app.css';
import preactLogo from './assets/preact.svg';
import viteLogo from '/vite.svg';
import { useState } from 'preact/hooks';

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a
          href="https://vitejs.dev"
          rel="noreferrer"
          target="_blank"
        >
          <img
            alt="Vite logo"
            className="logo"
            src={viteLogo}
          />
        </a>
        <a
          href="https://preactjs.com"
          rel="noreferrer"
          target="_blank"
        >
          <img
            alt="Preact logo"
            className="logo preact"
            src={preactLogo}
          />
        </a>
      </div>
      <h1>Vite + Preact</h1>
      <div className="card">
        <button onClick={() => setCount((counter) => counter + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/app.tsx</code> and save to test HMR
        </p>
      </div>
      <p>
        Check out{' '}
        <a
          href="https://preactjs.com/guide/v10/getting-started#create-a-vite-powered-preact-app"
          rel="noreferrer"
          target="_blank"
        >
          create-preact
        </a>
        , the official Preact + Vite starter
      </p>
      <p className="read-the-docs">
        Click on the Vite and Preact logos to learn more
      </p>
    </>
  );
};
