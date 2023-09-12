import Head from "next/head";
import HomeScreen from "~/components/screens/Home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nabi</title>
      </Head>

      <HomeScreen />
    </>
  );
}

export const config = {
  runtime: "experimental-edge", // or "nodejs"
};
