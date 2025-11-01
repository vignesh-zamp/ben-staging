import type { SVGProps } from 'react';

export function ClutchLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="100"
      height="32"
      viewBox="0 0 100 32"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <text
        x="50%"
        y="50%"
        dominantBaseline="central"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontSize="24"
        fontWeight="bold"
        letterSpacing="0.05em"
      >
        clutch
      </text>
    </svg>
  );
}
