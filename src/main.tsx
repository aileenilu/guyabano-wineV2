import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

(window as any).Tawk_API = (window as any).Tawk_API || {};
(window as any).Tawk_LoadStart = new Date();

const s1 = document.createElement('script');
s1.async = true;
s1.src = 'https://embed.tawk.to/6acdcc6a23deea34c26b4bba/1k4pud04i';
s1.charset = 'UTF-8';
s1.setAttribute('crossorigin', '*');
const s0 = document.getElementsByTagName('script')[0];
s0.parentNode?.insertBefore(s1, s0);
