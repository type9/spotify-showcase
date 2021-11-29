import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Routes
import App from './App';
import Landing from './routes/landing';
import Profile from './routes/profile';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
        <Route path='/' element={<App />}>
            <Route index element={<Landing />} />
            <Route path=':spotifyId' element={<Profile />}/>
        </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
