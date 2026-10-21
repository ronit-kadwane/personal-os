import type { SVGProps } from 'react';

interface LogoProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export function Logo({ size = 32, className = '', ...props }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Ronit Kadwane Logo"
      {...props}
    >
      <defs>
        <linearGradient id="rkComponentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366F1" />
          <stop offset="50%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      <rect
        x="6"
        y="6"
        width="88"
        height="88"
        rx="24"
        fill="#121215"
        stroke="url(#rkComponentGrad)"
        strokeWidth="3"
      />
      <path
        d="M 28 26 L 28 74 M 28 26 L 46 26 C 54 26 58 31 58 38 C 58 45 54 50 46 50 L 28 50 M 44 50 L 59 74"
        stroke="url(#rkComponentGrad)"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 64 26 L 64 74 M 82 28 L 65 50 L 83 74"
        stroke="#F4F4F5"
        strokeWidth="6.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="82" cy="28" r="3.5" fill="#06B6D4" />
    </svg>
  );
}
