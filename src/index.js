import React from 'react';
import ReactDOM from 'react-dom';
import { Kennel } from './components/Kennel';
import './index.css';
import { BrowserRouter as Router } from "react-router-dom"


ReactDOM.render(
    <React.StrictMode>
        <Router>
          <Kennel />
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);
