import Head from "next/head";
import FAQsScreen from "~/components/screens/FAQs";

export default function FAQsPage() {
  return (
    <>
      <Head>
        <title>FAQs</title>
      </Head>

      <FAQsScreen />
    </>
  );
}

// export const config = {
//   runtime: "experimental-edge", // or "nodejs"
// };
