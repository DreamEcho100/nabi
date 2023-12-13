import type { SVGProps } from "react";

export default function ShoppingCartSVG(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 22 22"
      fill="none"
      {...props}
    >
      <mask
        id="mask0_378_1353"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="22"
        height="22"
      >
        <path d="M21.5417 0H0.733398V22H21.5417V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_378_1353)">
        <path
          d="M18.6083 7.79297H1.19165V21.543H18.6083V7.79297Z"
          stroke="#212B39"
          stroke-width="0.916667"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M5.7749 5.95898V4.58398C5.7749 2.29232 7.60824 0.458984 9.8999 0.458984C12.1916 0.458984 14.0249 2.29232 14.0249 4.58398V5.95898"
          stroke="#212B39"
          stroke-width="0.916667"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
}
