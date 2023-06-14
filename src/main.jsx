import './index.css';

import * as React from 'react';

import * as ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Root from './routes/root';
import ShortUrl, { loader } from './routes/shorturl';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
  },{
    path:"/:shorturl",
    element:<ShortUrl></ShortUrl>,
    loader: loader
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);