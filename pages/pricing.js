import Pricing from "@/components/Pricing";
import Head from "next/head";

export default function pricingPages() {
  return (
    <>
      <Head>
        <title>Pricing Twite Soft</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mt-12 pt-12">
        <Pricing />
      </div>
    </>
  );
}
