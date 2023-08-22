import Head from "next/head";
import Link from "next/link";
import { getSectionInnerContainerClassNames } from "~/components/utils";
import CustomNextImage from "~/components/shared/common/CustomNextImage";
import { useIntersectionObserver } from "~/utils/common/hooks";
import { useEffect } from "react";
import { cx } from "class-variance-authority";

const intersectionObserverCB: IntersectionObserverCallback = (entries) => {
  let entry: IntersectionObserverEntry;
  for (entry of entries) {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains("intersect-show-up-container")) {
        entry.target.querySelectorAll(".intersect-show-up").forEach((elem) => {
          elem.classList.remove("translate-y-full", "opacity-0");
        });
      } else if (entry.target.classList.contains("intersect-show-from-right")) {
        entry.target.classList.remove(
          "opacity-0",
          entry.target.classList.contains("double")
            ? "translate-x-[200%]"
            : "translate-x-full"
        );
      } else if (entry.target.classList.contains("intersect-show-from-left")) {
        entry.target.classList.remove(
          "opacity-0",
          entry.target.classList.contains("double")
            ? "-translate-x-[200%]"
            : "-translate-x-full"
        );
      } else if (entry.target.classList.contains("intersect-show")) {
        entry.target.classList.remove("opacity-0");
      } else if (
        entry.target.classList.contains("intersect-scale-base-from-150")
      ) {
        entry.target.classList.remove("scale-150");
      }
    }
  }
};

const intersectionObserverOptions: IntersectionObserverInit = {
  threshold: 0.1,
};

export default function Home() {
  const intersectionObserver = useIntersectionObserver(
    intersectionObserverCB,
    intersectionObserverOptions
  );

  useEffect(() => {
    if (!intersectionObserver.isClient) return;

    const intersectElements: Element[] = [];

    document
      .querySelectorAll(".intersect-elem,.intersect-show-up-container")
      .forEach((elem) => intersectElements.push(elem));

    let elem: Element;
    for (elem of intersectElements) {
      intersectionObserver.intersectionObserver.observe(elem);
    }

    return () => {
      let elem: Element;
      for (elem of intersectElements) {
        intersectionObserver.intersectionObserver.unobserve(elem);
      }
    };
  }, [
    intersectionObserver.intersectionObserver,
    intersectionObserver.isClient,
  ]);

  return (
    <>
      <Head>
        <title>Nabi</title>
        <meta name="description" content="Nabi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="h-screen max-h-[100rem] min-h-fit bg-special-primary-500">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          poster="/images/3eda340496860c533c866c4a3619cc26.jpg"
          width={500}
          height={800}
          playsInline
        >
          <source
            src="https://pub-e64c0d41da1941878cb722e3371ce7a2.r2.dev/Nabi.mp4"
            type="video/mp4"
          />
        </video>
      </section>
      <section className="bg-special-primary-300">
        <div
          className={cx(
            `${getSectionInnerContainerClassNames()} flex min-h-[36rem] flex-col items-center justify-center gap-4 px-8 py-36 text-center`,
            "intersect-show-up-container"
          )}
        >
          <p
            className={cx(
              "max-w-[1024px] font-all-round-gothic-w01-xlig text-3xl leading-10",
              "intersect-show-up",
              "translate-y-full opacity-0",
              "transition-all delay-[0.5s] duration-1000"
            )}
          >
            Nabi is a luxury brand for babies and toddlers. We only use organic
            Merino wool and fine silk for our products. This sublime combination
            of fabrics is one that was carefully chosen.
          </p>
          <div
            className={cx(
              "h-20 w-[0.0625rem] bg-special-primary-900",
              "intersect-show-up",
              "translate-y-full opacity-0",
              "transition-all delay-[0.5s] duration-[1.25s]"
            )}
          />
          <p
            className={cx(
              "text-center text-sm font-normal leading-tight text-zinc-800",
              "intersect-show-up",
              "translate-y-full opacity-0",
              "transition-all delay-[0.5s] duration-[1.5s]"
            )}
          >
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
          <div className="max-w-[928px] flex-grow overflow-hidden py-10">
            <div className="intersect-show-up-container w-1/2">
              <CustomNextImage
                className={cx(
                  "w-full",
                  "intersect-show-up",
                  "translate-y-full opacity-0",
                  "transition-all delay-[0.5s] duration-1000"
                )}
                src="/images/c0c5b84f937a87be25263de9c2689dce.jpg"
                width={400}
                height={600}
                alt=""
              />
            </div>
            <div className="intersect-show-up-container flex h-[40rem] max-w-full md:w-1/2">
              <CustomNextImage
                className={cx(
                  "h-[22rem] w-2/5 flex-grow translate-y-[85%] object-cover sm:translate-y-[82%] sm:pl-20 md:w-full",
                  "intersect-show-up",
                  "translate-y-full opacity-0",
                  "transition-all delay-[0.5s] duration-1000"
                )}
                src="/images/eee0eb8f09076922a7b0589c159d306e.jpg"
                width={400}
                alt=""
                height={600}
              />
              <CustomNextImage
                className={cx(
                  "h-[24rem] w-3/5 flex-grow object-cover",
                  "intersect-show-up",
                  "translate-y-full opacity-0",
                  "transition-all delay-[0.75s] duration-1000"
                )}
                src="/images/c526acafcc73a8ac425680a2e7b404f9.jpg"
                width={400}
                height={600}
                alt=""
              />
            </div>
            <div className="intersect-show-up-container h-[25rem] w-3/5 translate-x-[50%] object-cover sm:w-1/2">
              <CustomNextImage
                className={cx(
                  "h-full w-full object-cover",
                  "intersect-show-up",
                  "translate-y-full opacity-0",
                  "transition-all delay-[0.5s] duration-1000"
                )}
                src="/images/0a2f04bd01da4575eb635a90c642061b.jpg"
                width={328}
                height={328}
                alt=""
              />
            </div>
          </div>
          <div className="intersect-show-up-container relative max-w-[928px] flex-grow px-8 pb-16 pt-28 text-white sm:pb-36 sm:pt-36 lg:-translate-x-[5rem]">
            <h2
              className={cx(
                "sticky top-[var(--main-header-h)] flex justify-center font-all-round-gothic-w01-xlig text-[2.5rem] font-normal capitalize",
                "intersect-elem intersect-show-up",
                "translate-y-full opacity-0",
                "transition-all delay-[0.5s] duration-1000"
              )}
            >
              <span className="leading-relaxed sm:whitespace-nowrap">
                Home to beautiful <br />
                pieces and delicate <br /> fabrics
              </span>
            </h2>
          </div>
        </div>
      </section>
      <section className="bg-special-primary-200">
        <div
          className={`${getSectionInnerContainerClassNames()} flex flex-col gap-16 px-8 pb-10 pt-4`}
        >
          <div className="mx-auto flex max-w-[1024px] flex-col gap-4 sm:flex-row">
            <div className="h-[50rem] flex-grow overflow-hidden sm:w-1/2">
              <CustomNextImage
                src="/images/895cda6c8300cb3d38a0b002fea06b76.jpg"
                width={600}
                height={800}
                alt=""
                className={cx(
                  "h-full w-full object-cover",
                  "intersect-elem intersect-scale-base-from-150",
                  "scale-150",
                  "transition-all delay-[0.5s] duration-1000"
                )}
                priority
              />
            </div>
            <div className="h-[50rem] flex-grow overflow-hidden sm:w-1/2">
              <CustomNextImage
                src="/images/2dda775e04b7ae48e51400ca48accc49.jpg"
                width={600}
                height={800}
                alt=""
                className={cx(
                  "h-full w-full object-cover",
                  "intersect-elem intersect-scale-base-from-150",
                  "scale-150",
                  "transition-all delay-[0.5s] duration-1000"
                )}
                priority
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-8 text-center">
            {/* <p className="text-center text-base font-normal leading-loose text-zinc-800">
              Silk has an incredibly soft, smooth, and light texture that feels
              wonderful against your baby&apos;s skin. It is also naturally
              hypoallergenic.
            </p> */}
            <p className="text-center text-sm font-normal leading-7 text-zinc-800">
              Merino wool has the ability to create a microclimate around your
              baby. <br />
              Meaning it will regulate body temperature, keeping your baby
              &apos;warm when it&apos;s cold and cool when it&apos;s hot&apos;.
              <br />
              In cooler temperatures it will trap warm air in to provide warmth.
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
          <div className="intersect-show-up-container">
            <p
              className={cx(
                "text-sm font-semibold leading-7 text-white",
                "intersect-show-up",
                "translate-y-full opacity-0",
                "transition-all delay-[0.5s] duration-1000"
              )}
            >
              @nabibabystore
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <CustomNextImage
              src="/svgs/instagram.svg"
              width={950}
              height={135}
              alt=""
              priority
            />
            <div className="flex flex-wrap items-center justify-center gap-4">
              {[
                { src: "/images/78eacc02985eb7a8aa652f499f4754d5.jpg" },
                { src: "/images/d0b95d5a13d371f41e106dfbfd9de762.jpg" },
                { src: "/images/62d09421965a6fb97df8b7b773cfdd13.jpg" },
                { src: "/images/6f325a7e91cb0694e0c4961085b802d0.jpg" },
                { src: "/images/7439c368bf94e43b57734d9c6957c2cd.jpg" },
                { src: "/images/ae79344fcdb51aa3f86edc0cf2c95359.jpg" },
                { src: "/images/c0c5b84f937a87be25263de9c2689dce.jpg" },
              ].map((item) => (
                <CustomNextImage
                  key={item.src}
                  src={item.src}
                  width={612}
                  height={448}
                  className="aspect-video w-full object-cover sm:aspect-auto sm:h-28 sm:w-32"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export const config = {
  runtime: "edge", // or "nodejs"
};
