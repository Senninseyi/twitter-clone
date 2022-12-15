import { DarkMode } from "../components/dark";
import Layout from "../components/layout/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="absolute bottom-14 z-10 right-4">
        <DarkMode />
      </div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
