import React from 'react';
import ReactDOM from 'react-dom/client'; // ✅ Correct import for React 18
import './assets/css/style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import Font Awesome
import '@fortawesome/fontawesome-free/css/all.min.css';

// ✅ Ensure that 'root' exists before rendering
const container = document.getElementById('root');
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Error: Root container (#root) not found in index.html");
}

reportWebVitals();
