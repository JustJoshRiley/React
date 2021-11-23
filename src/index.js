import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App/App.js';
import About from './Components/About/About';
import POPOSList from './Components/POPOSList/POPOSList.js';
import POPOSDetails from './Components/POPOSDetails/POPOSDetails.js';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<POPOSList />} />
        <Route path="about" element={<About />} />
        <Route path="details/:id" element={<POPOSDetails />} />
      </Route>
    </Routes>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
