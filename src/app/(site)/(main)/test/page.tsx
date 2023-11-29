export default function TestPage() {
  return (
    <section className="h-screen max-h-[100rem] min-h-fit bg-special-primary-500">
      {[
        {
          src: "https://pub-e64c0d41da1941878cb722e3371ce7a2.r2.dev/Reel_1_v1.mp4 - Review Link - July 17, 2023 - Frame.io.mp4",
          className: "h-full w-full object-cover sm:hidden",
        },
        {
          src: "https://pub-e64c0d41da1941878cb722e3371ce7a2.r2.dev/Nabi_30_v2_1.mp4",
          className: "h-full w-full object-cover hidden sm:block",
        },
      ].map((item) => (
        <video
          key={item.src}
          className={item.className}
          autoPlay
          loop
          muted
          playsInline
          controls
          // preload="auto"
          // poster="/images/3eda340496860c533c866c4a3619cc26.jpg"
          width={500}
          height={800}
          src={item.src}
          // type="video/mp4"
        />
      ))}
    </section>
  );
}
