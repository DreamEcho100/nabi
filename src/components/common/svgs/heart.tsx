import type { SVGProps } from "react";

export default function HeartSVG(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 22"
      fill="none"
      {...props}
    >
      <path
        d="M21.5031 11.2224L20.7351 11.9904L11.9031 20.8224L3.07115 11.9904L2.30315 11.2224C-0.192848 8.72641 -0.192848 4.79041 2.30315 2.39041C3.55115 1.14241 5.18315 0.566406 6.71915 0.566406C8.35115 0.566406 9.88713 1.14241 11.1351 2.39041L11.9031 3.15841L12.6711 2.39041C13.9191 1.14241 15.5511 0.566406 17.0871 0.566406C18.7191 0.566406 20.2551 1.14241 21.5031 2.39041C23.9991 4.79041 23.9991 8.72641 21.5031 11.2224Z"
        stroke="#212B39"
        stroke-width="0.96"
        stroke-miterlimit="10"
        stroke-linejoin="round"
      />
    </svg>
  );
}
