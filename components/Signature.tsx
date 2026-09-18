import { useId } from "react";

/** Keeps the source intact; an SVG filter makes fine ink readable at logo size. */
export default function Signature({ className = "" }: { className?: string }) {
  const inkFilter = useId();
  return (
    <svg
      className={`signature ${className}`}
      viewBox="104 78 775 421"
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
          <feMorphology operator="dilate" radius="1.5" />
          <feComponentTransfer result="ink">
            <feFuncA type="linear" slope="5" />
          </feComponentTransfer>
          <feFlood floodColor="white" />
          <feComposite operator="in" in2="ink" />
        </filter>
      </defs>
      <image
        href="/branding/asad-signature.png"
        width="925"
        height="556"
        filter={`url(#${inkFilter})`}
      />
    </svg>
  );
}
