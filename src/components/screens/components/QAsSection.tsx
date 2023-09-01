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
          "flex flex-col gap-4 px-8 py-28 sm:px-16",
          "font-normal"
        )}
      >
        {props.QAsList.map((item) => (
          <article key={item.q} className="flex flex-col gap-1 text-[2rem]">
            <h2 className="font-semibold leading-10 text-black">{item.q}</h2>
            <p className="leading-relaxed text-black">{item.a}</p>
          </article>
        ))}
      </div>
    </section>
  );
}