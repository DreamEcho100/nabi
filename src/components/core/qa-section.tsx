import { cx } from "class-variance-authority";
import React from "react";
import { getSectionInnerContainerClassNames } from "~/components/utils";

export type TQAsList = { q: string; a: string }[];

type Props = {
  QAsList: TQAsList;
};

export default function QAsSection(props: Props) {
  return (
    <section className="bg-special-primary-100 font-medium leading-loose text-gray-800">
      <div
        className={cx(
          getSectionInnerContainerClassNames({ "max-w": "max-w-[1150px]" }),
          "flex flex-col gap-4",
          "py-12",
          "px-8 sm:px-16 md:px-20 xl:px-36",
          "font-normal",
        )}
      >
        {props.QAsList.map((item) => (
          <article
            key={item.q}
            className={cx("flex flex-col gap-1", "text-sm sm:text-xl")}
          >
            <h2 className="font-semibold leading-10 text-black">{item.q}</h2>
            <p className="leading-relaxed text-black">{item.a}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
