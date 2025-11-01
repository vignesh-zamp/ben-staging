import type { SVGProps } from 'react';

export function ClutchLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="130"
      height="42"
      viewBox="0 0 130 42"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <text
        x="0"
        y="15"
        fontFamily="Inter, sans-serif"
        fontSize="24"
        fontWeight="bold"
        letterSpacing="0.05em"
      >
        clutch
      </text>
      <text
        x="100"
        y="12"
        fontFamily="Inter, sans-serif"
        fontSize="8"
        fontWeight="bold"
        fill="#888"
      >
        ●
      </text>
      <text
        x="0"
        y="36"
        fontFamily="Inter, sans-serif"
        fontSize="12"
        fontWeight="normal"
        letterSpacing="0.2em"
      >
        STAGING
      </text>
    </svg>
  );
}
