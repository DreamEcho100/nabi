import { cx } from "class-variance-authority";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { api } from "~/utils/api";
import { fontsClasses } from "~/utils/core/fonts";

const defaults = {
  "max-w": "max-w-main",
  mx: "mx-auto",
  w: "w-full",
};
const getSectionInnerContainerClassNames = (params?: {
  mx?: string;
  w?: string;
  "max-w"?: string;
}) =>
  `${params?.["max-w"] ?? defaults["max-w"]} ${params?.w ?? defaults.w} ${
    params?.mx ?? defaults.mx
  }`;

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Nabi</title>
        <meta name="description" content="Nabi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header
        id="main-header"
        className={cx(
          "fixed left-0 right-0 top-0 isolate z-[2] flex h-main-header-h flex-col backdrop-blur-sm transition-all duration-300",
          fontsClasses
        )}
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(var(--color-special-primary-500) / 0.15), rgba(var(--color-special-primary-500) / 0.1)",
        }}
      >
        <div className="mx-auto flex h-full w-full max-w-main items-center justify-between px-8 text-white">
          <ul className="flex gap-4">
            <li>
              <Link href="#" className="explore">
                Our story
              </Link>
            </li>
            <li>
              <Link href="#" className="explore">
                Services
              </Link>
            </li>
            <li>
              <Link href="#" className="explore">
                Meet the team
              </Link>
            </li>
            <li>
              <Link href="#" className="explore">
                Career
              </Link>
            </li>
            <li>
              <Link href="#" className="explore">
                Rewards
              </Link>
            </li>
          </ul>

          <Link href="#">
            <Image
              src="/images/2ef897a2406c34255a69b2b3b8c42337.png"
              width={500}
              height={500}
              alt="logo"
              className="logo h-8 w-16 object-contain"
            />
          </Link>

          <ul className="flex gap-4">
            <li>
              <Link href="#" className="explore">
                Journal
              </Link>
            </li>
            <li>
              <Link href="#" className="explore">
                Press
              </Link>
            </li>
            <li>
              <Link href="#" className="explore">
                Get in touch
              </Link>
            </li>
            <li>
              <Link href="#" className="explore">
                Book appointment
              </Link>
            </li>
          </ul>
        </div>
      </header>
      {/* <div
        className="h-main-header-h"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(var(--color-special-primary-500) / 0.95), rgba(var(--color-special-primary-500) / 0.85)",
        }}
      /> */}

      <main
        className={cx(
          "flex flex-grow flex-col bg-special-primary-200",
          fontsClasses
        )}
      >
        <section className="max-h-fit min-h-fit bg-special-primary-500">
          <video
            className="h-full w-full"
            autoPlay
            muted
            loop
            placeholder="/images/3eda340496860c533c866c4a3619cc26.jpg"
            width={500}
            height={800}
          >
            <source
              src="https://assets.frame.io/encode/d1ff8fc8-ad1a-4cae-ac9c-2fe0dea01c24/h264_1080_best.mp4?x-amz-meta-project_id=dcbbdb01-35eb-4f03-8bdf-8569deabfadb&amp;x-amz-meta-request_id=F3wbwITB1lMvreoIvn6E&amp;x-amz-meta-project_id=dcbbdb01-35eb-4f03-8bdf-8569deabfadb&amp;x-amz-meta-resource_type=asset&amp;x-amz-meta-resource_id=d1ff8fc8-ad1a-4cae-ac9c-2fe0dea01c24&amp;Expires=1692316800&amp;Signature=g1hlpLJgkFGStbi90NdEK9cupe4ne8tWzixSDbgqOdcGEuVNuzNox0tPQjuXjZqG4UO7o4UQnbD~mwq6sSrAdE5m~dY-yIxwFHo7iRxBI7tGH1fBrQEs3XUPX9Y-AB4pRe72ybwN0l5ViabKbGMkfn4~Ju5h~pikXWHJOQhkNQ3ta6vw9UISyhnjuPfgw-4KgGWqIdB~RcHUP4rcL6-6BUsIzLFTjFNq~v9v~IaHwa~PzPh2vK2WVlSJp7sQPxjfGGZSa76w~xZxQUgWj716lLIwL2W4DY51D54n38HGoRwctJrcAtPJ~akq8VnXnIdGakmtRPLfGDSmNQicaD~o8g__&amp;Key-Pair-Id=K1XW5DOJMY1ET9"
              type="video/mp4"
            />
          </video>
        </section>
        <section className="bg-special-primary-300">
          <div
            className={`${getSectionInnerContainerClassNames()} flex min-h-[36rem] flex-col items-center justify-center gap-8 px-8 py-36 text-center`}
          >
            <p className="max-w-[1024px] font-antic-didone text-3xl leading-10">
              Nabi is a luxury brand for babies and toddlers. We only use
              organic Merino wool and fine silk for our products. This sublime
              combination of fabrics is one that was carefully chosen.
            </p>
            <p className="text-center font-work-sans text-sm font-normal leading-tight text-zinc-800">
              Scroll to discover <br />
              more about us
            </p>
          </div>
        </section>
        <section className="bg-special-primary-800">
          <div
            className={`${getSectionInnerContainerClassNames({
              "max-w": "",
              w: "",
            })} lg:text-align-initial flex min-h-[36rem] flex-col-reverse justify-center text-center lg:flex-row`}
          >
            <div className="max-w-[928px] flex-grow py-10">
              <Image
                className="w-1/2"
                src="/images/c0c5b84f937a87be25263de9c2689dce.jpg"
                width={400}
                height={600}
                alt=""
              />
              <div className="flex h-[40rem] w-1/2 max-w-full">
                <Image
                  className="h-[22rem] w-full flex-grow translate-y-[80%] object-cover pl-20"
                  src="/images/eee0eb8f09076922a7b0589c159d306e.jpg"
                  width={400}
                  alt=""
                  height={600}
                />
                <Image
                  className="h-[24rem] w-3/5 flex-grow object-cover"
                  src="/images/c526acafcc73a8ac425680a2e7b404f9.jpg"
                  width={400}
                  height={600}
                  alt=""
                />
              </div>
              <Image
                className="h-[25rem] w-1/2 translate-x-full object-cover"
                src="/images/0a2f04bd01da4575eb635a90c642061b.jpg"
                width={328}
                height={328}
                alt=""
              />
            </div>
            <div className="max-w-[928px] flex-grow px-8 py-36 text-white">
              <h2 className="font-antic-didone text-5xl font-normal capitalize">
                <span className="leading-relaxed">
                  Home to beautiful <br />
                  pieces and delicate <br /> fabrics
                </span>
              </h2>
            </div>
          </div>
        </section>
        <section className="bg-special-primary-200">
          <div
            className={`${getSectionInnerContainerClassNames()} flex flex-col gap-16 px-8 py-4`}
          >
            <div className="mx-auto flex max-w-[1024px] gap-4">
              <Image
                src="/images/895cda6c8300cb3d38a0b002fea06b76.jpg"
                width={600}
                height={800}
                alt=""
                className="w-1/2 flex-grow object-cover"
              />
              <Image
                src="/images/2dda775e04b7ae48e51400ca48accc49.jpg"
                width={600}
                height={800}
                alt=""
                className="w-1/2 flex-grow object-cover"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-8 text-center">
              <p className="text-center text-base font-normal leading-loose text-zinc-800">
                Silk has an incredibly soft, smooth, and light texture that
                feels wonderful against your baby&apos;s skin. It is also
                naturally hypoallergenic.
              </p>
              <p className="text-center text-sm font-normal leading-7 text-zinc-800">
                Merino wool has the ability to create a microclimate around your
                baby. <br />
                Meaning it will regulate body temperature, keeping your baby
                &apos;warm when it&apos;s cold and cool when it&apos;s
                hot&apos;.
                <br />
                In cooler temperatures it will trap warm air in to provide
                warmth.
              </p>
              <Link
                href="#"
                className="explore leading-7s text-center text-sm font-normal text-zinc-800 underline"
              >
                Read more about our story
              </Link>
            </div>
          </div>
        </section>
        <section className="bg-special-primary-700/40">
          <div
            className={`${getSectionInnerContainerClassNames({
              "max-w": "max-w-[1088px]",
            })} flex flex-col gap-8 px-8 py-36`}
          >
            <p className="text-sm font-semibold leading-7 text-white">
              @nabibabystore
            </p>
            <div className="flex flex-col gap-8">
              <Image
                src="/svgs/instagram.svg"
                width={950}
                height={135}
                alt=""
                priority
              />
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Image
                  src="/images/78eacc02985eb7a8aa652f499f4754d5.jpg"
                  width={256}
                  height={224}
                  alt=""
                  className="h-28 w-32 object-cover"
                />
                <Image
                  src="/images/d0b95d5a13d371f41e106dfbfd9de762.jpg"
                  width={256}
                  height={224}
                  alt=""
                  className="h-28 w-32 object-cover"
                />
                <Image
                  src="/images/62d09421965a6fb97df8b7b773cfdd13.jpg"
                  width={256}
                  height={224}
                  alt=""
                  className="h-28 w-32 object-cover"
                />
                <Image
                  src="/images/6f325a7e91cb0694e0c4961085b802d0.jpg"
                  width={256}
                  height={224}
                  alt=""
                  className="h-28 w-32 object-cover"
                />
                <Image
                  src="/images/7439c368bf94e43b57734d9c6957c2cd.jpg"
                  width={256}
                  height={224}
                  alt=""
                  className="h-28 w-32 object-cover"
                />
                <Image
                  src="/images/ae79344fcdb51aa3f86edc0cf2c95359.jpg"
                  width={256}
                  height={224}
                  alt=""
                  className="h-28 w-32 object-cover"
                />
                <Image
                  src="/images/c0c5b84f937a87be25263de9c2689dce.jpg"
                  width={256}
                  height={224}
                  alt=""
                  className="h-28 w-32 object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-special-primary-700/70">
        <div
          className={`${getSectionInnerContainerClassNames()} flex flex-wrap justify-between gap-16 px-8 pb-16 pt-6`}
        >
          <div>
            <address className="text-sm font-normal not-italic leading-tight">
              Maasstraat 143, 1079 BE Amsterdam
            </address>
            <a
              href="tel:+0628344314"
              className="explore text-sm font-normal leading-tight underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              06 283 443 14
            </a>
          </div>

          <ul className="flex flex-wrap gap-8 capitalize">
            <li>
              <Link href="#" className="explore">
                collection
              </Link>
            </li>
            <li>
              <Link href="#" className="explore">
                instagram
              </Link>
            </li>
            <li>
              <Link href="#" className="explore">
                contacts
              </Link>
            </li>
            <li>
              <Link href="#" className="explore">
                privacy policy
              </Link>
            </li>
            <li>
              <Link href="#" className="explore">
                cookie policy
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
