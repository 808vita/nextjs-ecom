import 'bootstrap/dist/css/bootstrap.css'; 
import '../styles/globals.css'

import { useEffect } from 'react';
import Header from '../components/Header';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);

  return <><Header/> <Component {...pageProps} /></> 
}

export default MyApp
