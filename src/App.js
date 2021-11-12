import React from "react";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.3.0";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HelmetProvider } from "react-helmet-async";

import Routes from "./config/Routes";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes isLoggedIn={true} />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
