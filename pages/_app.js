import { ThemeProvider } from "next-themes";
import { DarkMode } from "../components/dark";
import Layout from "../components/layout/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider attribute="class" enableSystem={true}>
        <div className="absolute bottom-14 z-10 right-4">
          <DarkMode />
        </div>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
