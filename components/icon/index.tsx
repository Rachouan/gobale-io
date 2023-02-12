import clsx from "clsx";
import React from "react";

export interface IconProps {
  size?: number | string;
  strokeWidth?: number;
  viewBox?: string;
  styles?: any;
  className?: string;
  fill?: string;
  children?: React.ReactNode;
  rest?: any;
}

export function Icon({
  children,
  size = "1em",
  viewBox = "0 0 24 24",
  styles,
  fill = "none",
  className,
  strokeWidth = 2,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={viewBox}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ ...styles }}
      className={clsx("w-4 h-4", className)}
    >
      {children}
    </svg>
  );
}
