import '../styles/globals.scss';
import ReactGA from 'react-ga';

ReactGA.initialize("UA-207192105-1");

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
