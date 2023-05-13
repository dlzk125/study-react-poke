import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import Gift from './pages/gift/_index';
import MyPage from './pages/mypage/index';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './api/index';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "gift/:id",
        element: <Gift />,
      },
    ],
  },
  {
    path: "/mypage",
    element: <MyPage />
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
