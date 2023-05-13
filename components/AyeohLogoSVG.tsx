import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
interface myProps extends JSX.HTMLAttributes<SVGSVGElement> {
  stroke?: string;
}
export function AyeohLogoSVG(props: myProps) {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      class={`icon icon-tabler ${props.stroke}`}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M5.21,7.5C2.74,8,2.79,6,2,4.87,2,4.87,5,4.76,5.21,7.5Z" />
      <polyline points="1.9 17.62 1.59 16.91 2.69 16.48 2.99 17.17" />
      <polyline points="1.9 17.62 1.59 16.91 2.69 16.48 2.99 17.17" />
      <polyline points="10.94 17.67 11.02 17.19 9.95 16.75 9.65 17.21" />
      <polyline points="20.24 17.71 19.86 17.34 19.15 17.76 19.27 18.36" />
      <polyline points="23.03 12.75 22.36 13.18 22.31 13.67 23.03 13.86" />
      <polyline points="18.76 8.13 18.83 8.94 19.32 9.04 19.62 8.34" />
      <path d="M0,18.22c1.62,0,3.4-2.15,7.36-1.6S13.43,19.83,17.45,19c4.24-.75,7.47-5.3,4.32-9.17-4.21-4.29-9.43,3.88-16.56-2.3" />
      <path d="M11.54,12.79c.43-1.4.74-2.57,1-3.53,2-9-4.63-.64-6.08,3.6" />
    </svg>
  );
}
