import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";

import { useEffect } from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import { UserProvider } from "@auth0/nextjs-auth0";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <UserProvider>
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
}

export default MyApp;
