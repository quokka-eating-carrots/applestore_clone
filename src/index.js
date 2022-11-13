import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import clayful from 'clayful/client-js';
import axios from 'axios';

clayful.config({
  client: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjMzNjY2Y2ZkYzViZWJjNDdjYTY5OGQzZDdhMGU3ZmM4ODFkODk0OTIyYjY0ZTBkYjI2MWUzZWM4ZWRkNjBlMzEiLCJyb2xlIjoiY2xpZW50IiwiaWF0IjoxNjY4MzE5ODMxLCJzdG9yZSI6IjlHRlVHQ1FZRDRaUC45VlBORUxZN0JaSDgiLCJzdWIiOiJCRE43V1NWUEJTNjgifQ.o5rgZAOAkPIojiIK5q6AvPhaU6TeXNQUXQP-jH2e7RY'
});

clayful.install('request', require('clayful/plugins/request-axios')(axios));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
