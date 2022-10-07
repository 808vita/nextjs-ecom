import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";

import { useEffect } from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import { UserProvider } from "@auth0/nextjs-auth0";
import GlobalContextProvider from "../context/GlobalContext";
import Toasts from "../components/Toasts";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <UserProvider>
      <GlobalContextProvider>
        <Header />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Toasts />
      </GlobalContextProvider>
    </UserProvider>
  );
}

export default MyApp;
