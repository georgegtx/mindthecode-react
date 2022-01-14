import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Example from './routes/example/Example';
import Home from './routes/home/Home';
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

export const AppRoutes = [
  {
      name: 'Home',
      component: <Home />,
      href: '/'
  },
  {
      name: 'Example',
      component: <Example />,
      href: '/example'
  },
]

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      {
        AppRoutes
          .map(el => (<Route 
                        key={el.href} 
                        path={el.href} 
                        element={el.component} />))
      }
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
