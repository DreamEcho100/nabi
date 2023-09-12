import Head from "next/head";
import ContactScreen from "~/components/screens/Contact";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <ContactScreen />
    </>
  );
}

export const config = {
  runtime: "experimental-edge", // or "nodejs"
};
