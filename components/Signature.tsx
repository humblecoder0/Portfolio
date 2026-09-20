import { useId } from "react";

/** Keeps the source intact; an SVG filter makes fine ink readable at logo size. */
export default function Signature({ className = "" }: { className?: string }) {
  const inkFilter = useId();
  return (
    <svg
      className={`signature ${className}`}
      viewBox="145 185 1360 610"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <filter id={inkFilter} colorInterpolationFilters="sRGB">
          <feColorMatrix
            type="matrix"
            values="-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0"
          />
          <feColorMatrix type="luminanceToAlpha" />
          <feComponentTransfer result="ink">
            <feFuncA type="linear" slope="3" intercept="-0.15" />
          </feComponentTransfer>
          <feFlood floodColor="white" />
          <feComposite operator="in" in2="ink" />
        </filter>
      </defs>
      <image
        href="/branding/asad-signature-new.png"
        width="1580"
        height="995"
        filter={`url(#${inkFilter})`}
      />
    </svg>
  );
}
