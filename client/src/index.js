import React from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { TransactionsProvider } from "./context/TransactionContext";
import { Navbar, Welcome, Footer, Services, Transactions, Menu } from "./components";
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);

// ReactDOM.render(
root.render(
  <BrowserRouter>
  <TransactionsProvider>
    <Routes>
      <Route path="/" element={<App />} >
        <Route path="menu" element={<Menu />} />
        <Route path="welcome" element={<Welcome />} />
        <Route path="services" element={<Services />} />
        <Route path="/" element={<Welcome/>} />
      </Route>
    </Routes>
    </TransactionsProvider>,
  </BrowserRouter>,
  // document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
