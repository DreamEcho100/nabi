import Head from "next/head";
import ReturnPolicyScreen from "~/components/screens/Policies/Return";

export default function ReturnsPolicyPage() {
  return (
    <>
      <Head>
        <title>Return Policy</title>
      </Head>

      <ReturnPolicyScreen />
    </>
  );
}

// export const config = {
//   runtime: "experimental-edge", // or "nodejs"
// };
