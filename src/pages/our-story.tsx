import Head from "next/head";
import OurStoryScreen from "~/components/screens/OurStory";

export default function OurStoryPage() {
  return (
    <>
      <Head>
        <title>Our Story</title>
        <meta name="description" content="Nabi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <OurStoryScreen />
    </>
  );
}

export const config = {
  runtime: "experimental-edge", // or "nodejs"
};
