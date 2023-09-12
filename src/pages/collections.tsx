import Head from "next/head";
import CollectionsScreen from "~/components/screens/Collections";

export default function CollectionsPage() {
  return (
    <>
      <Head>
        <title>Collections</title>
      </Head>

      <CollectionsScreen />
    </>
  );
}

// export const config = {
//   runtime: "experimental-edge", // or "nodejs"
// };
