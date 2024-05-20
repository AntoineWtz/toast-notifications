import React, { useState } from 'react';
import './App.css';
import Toast from './Toast';

function App() {
  const [toasts, setToasts] = useState([]);

  const addToast = (type, message) => {
    setToasts([...toasts, { id: Date.now(), type, message }]);
  };

  const removeToast = (id) => {
    setToasts(toasts.filter(toast => toast.id !== id));
  };

  return (
    <div className="App">
      <h1>React Toast Notifications</h1>
      <div className="buttons">
        <button onClick={() => addToast('success', 'This is a success message!')}>Show Success</button>
        <button onClick={() => addToast('error', 'This is an error message!')}>Show Error</button>
        <button onClick={() => addToast('warning', 'This is a warning message!')}>Show Warning</button>
        <button onClick={() => addToast('info', 'This is an info message!')}>Show Info</button>
      </div>
      <div className="toast-container">
        {toasts.map(toast => (
          <Toast
            key={toast.id}
            type={toast.type}
            message={toast.message}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
