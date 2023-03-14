import Head from "next/head";
import "@/styles/animate.css";
import "@/styles/tailwindcss.css";
import "@/styles/globals.css";
import Script from "next/script";
import Layout from "../components/Layout";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Head>
          <link rel="shortcut icon" href="../images/blue-icon.png" />
        </Head>
        <Script src="../js/script.js" />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
