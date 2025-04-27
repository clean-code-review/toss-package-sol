import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ErrorBoundary } from 'react-error-boundary';
import { Error } from '@saul-atomrigs/design-system';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary fallbackRender={() => <Error />}>
      <App />
    </ErrorBoundary>
  </StrictMode>
);
