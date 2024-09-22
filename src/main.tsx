import { App } from './app.tsx';
import './index.css';
import { render } from 'preact';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
render(<App />, document.querySelector('#app')!);
