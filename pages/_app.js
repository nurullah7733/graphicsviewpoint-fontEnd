import Head from "next/head";
import "../styles/globals.css";
import Layout from "../components/layouts/layout";
// react toastify
import "react-toastify/dist/ReactToastify.css";
// fullscreen loader css file
import "../public/assets/css/loader.css";
// Slick slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Provider } from "react-redux";
import store from "../redux/store";
import { ThemeProvider } from "next-themes";
import { ToastContainer } from "react-toastify";
import FullscreenLoader from "../components/common/loader/fullScreenLoader";
import ScrollToTop from "../components/common/scrollToTop/scrollToTop";
import WhatsappChat from "../components/common/whatsappChat/whatsappChat";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider attribute="class">
        <Head>
          {/* Default Statcounter code for Graphis View point
https://graphicsviewpoint.com   */}
          <script type="text/javascript">
            var sc_project=12879903; var sc_invisible=1; var
            sc_security="c157c89b";
          </script>
          <script
            type="text/javascript"
            src="https://www.statcounter.com/counter/counter.js"
            async
          ></script>
          <noscript>
            <div className="statcounter">
              <a
                title="Web Analytics Made Easy - Statcounter"
                href="https://statcounter.com/"
                target="_blank"
              >
                <img
                  className="statcounter"
                  src="https://c.statcounter.com/12879903/0/c157c89b/1/"
                  alt="Web Analytics Made Easy - Statcounter"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </a>
            </div>
          </noscript>
          {/* End of Statcounter Code   */}
        </Head>
        <Layout>
          <Component {...pageProps} />
          <ToastContainer />
          <FullscreenLoader />
          <WhatsappChat />
          <ScrollToTop />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
