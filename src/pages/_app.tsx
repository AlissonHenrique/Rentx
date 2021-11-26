import GlobalStyle from '../../styles/globals';
import Modal from 'react-modal';
Modal.setAppElement('body');
function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
