import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { ErrorBoundary } from 'react-error-boundary';
import { Error } from '@saul-atomrigs/design-system';
import { Routes } from '@generouted/react-router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary fallbackRender={() => <Error />}>
      <Routes />
    </ErrorBoundary>
  </StrictMode>
);
