import React from 'react';
import ReactDOM from 'react-dom/client';
// 在没有构建工具的情况下，本地运行必须带上文件后缀
import App from './App.tsx';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);