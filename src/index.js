import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import App1 from './App1';
import App4 from './App4';
import App5 from './App5';
import App6 from './App6';
import App7 from './App7';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App7 />
  </StrictMode>
);
