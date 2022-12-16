import { ThemeProvider } from "next-themes";
import Layout from "../components/layout/layout";
import { store, wrapper } from "../redux/store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider attribute="class" enableSystem={false}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
