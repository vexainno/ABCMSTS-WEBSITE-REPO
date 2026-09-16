import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div
      className={`bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden ${
        hover ? "transition-all duration-300 hover:shadow-xl hover:-translate-y-1" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
