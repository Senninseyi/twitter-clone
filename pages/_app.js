import { ThemeProvider } from "next-themes";
import { DarkMode } from "../components/dark";
import Layout from "../components/layout/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider attribute="class" enableSystem={false}>
        {/* <div className="absolute bottom-1/2 z-10 right-4">
          <DarkMode />
        </div> */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
