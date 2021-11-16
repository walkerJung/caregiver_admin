import React from "react";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.3.0";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HelmetProvider } from "react-helmet-async";
import GlobalStyles from "components/GlobalStyles";
import "./assets/css/admin.css";

import Routes from "./config/Routes";

import { ApolloProvider, useReactiveVar } from "@apollo/client";
import { client, isLoggedInVar } from "./apollo";

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return (
    <>
      <GlobalStyles />
      <ApolloProvider client={client}>
        <HelmetProvider>
          <BrowserRouter>
            <Routes isLoggedIn={true} />
          </BrowserRouter>
        </HelmetProvider>
      </ApolloProvider>
    </>
  );
}

export default App;
