import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Custom cursor effect
const CursorEffect = () => {
  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor') as HTMLElement;
    if (!cursor) return;

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const growCursor = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
    };

    const shrinkCursor = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    };

    // Add event listeners
    document.addEventListener('mousemove', moveCursor);
    
    // Change cursor size on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', growCursor);
      el.addEventListener('mouseleave', shrinkCursor);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', growCursor);
        el.removeEventListener('mouseleave', shrinkCursor);
      });
    };
  }, []);

  return null;
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CursorEffect />
    <App />
  </StrictMode>
);