import Link from "next/link";
import { getSectionInnerContainerClassNames } from "~/components/utils";

export default function MainFooter() {
  return (
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
  );
}
