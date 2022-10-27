import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter as Router } from "react-router-dom"
import Index from "./index.css"

ReactDOM.render(
    <Router>
      <App />
    </Router>,
  document.getElementById("root"));



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter>
//         <App />
//   </BrowserRouter>
// );


