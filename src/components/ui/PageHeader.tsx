import type { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  image: string;
  children?: ReactNode;
}

export default function PageHeader({ title, subtitle, image, children }: PageHeaderProps) {
  return (
    <section className="relative min-h-[45vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={image} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/85 via-red-900/75 to-red-900/85" />
      </div>
      <div className="relative z-10 text-center px-4 py-24 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg md:text-xl text-red-100 leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
