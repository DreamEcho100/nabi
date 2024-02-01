import type { SVGProps } from "react";

export default function MagnifierGlass(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_378_1343)">
        <path
          d="M9.5 18.5C14.4706 18.5 18.5 14.4706 18.5 9.5C18.5 4.52944 14.4706 0.5 9.5 0.5C4.52944 0.5 0.5 4.52944 0.5 9.5C0.5 14.4706 4.52944 18.5 9.5 18.5Z"
          stroke="#212B39"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 18L23 23"
          stroke="#212B39"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_378_1343">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
