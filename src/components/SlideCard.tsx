"use client";

import Image from "next/image";

interface SlideCardProps {
  children: React.ReactNode;
  header?: string;
  headerBadge?: string | number;
  className?: string;
}

export function SlideCard({ children, header, headerBadge, className = "" }: SlideCardProps) {
  return (
    <div className={`relative bg-white rounded-3xl shadow-xl p-8 md:p-10 min-h-[500px] flex flex-col ${className}`}>
      {/* Folded corner effect */}
      <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-gray-200 to-transparent rounded-tl-3xl" />
      
      {/* Window dots */}
      <div className="absolute top-6 right-8 flex gap-1">
        <span className="w-2 h-2 rounded-full bg-glovo-teal" />
        <span className="w-2 h-2 rounded-full bg-glovo-teal" />
        <span className="w-2 h-2 rounded-full bg-glovo-teal" />
      </div>

      {(header || headerBadge) && (
        <div className="flex items-center justify-center gap-3 mb-6 w-full">
          {headerBadge !== undefined && (
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-glovo-teal text-white font-bold text-lg shrink-0">
              {headerBadge}
            </span>
          )}
          {header && (
            <h2 className="text-2xl md:text-3xl font-bold text-glovo-dark text-center">{header}</h2>
          )}
        </div>
      )}

      <div className="flex-1 overflow-auto w-full flex flex-col min-h-0">{children}</div>
    </div>
  );
}

export function PhaseBanner({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full rounded-2xl bg-glovo-teal text-white font-bold text-xl md:text-2xl py-4 px-6 text-center mb-6">
      {children}
    </div>
  );
}

export function GlovoLogo() {
  return (
    <div className="absolute top-6 left-6 z-10">
      <Image src="/logoglovo.png" alt="Glovo" width={40} height={40} className="object-contain" />
    </div>
  );
}
