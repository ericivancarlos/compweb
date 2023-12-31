import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Layout from './comps/layout';


export default function App({ Component, pageProps }) {

  return(
    <Layout>

    <Component {...pageProps} />
  </Layout>



  );
  
}
