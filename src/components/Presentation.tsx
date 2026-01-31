"use client";

import { useState, useCallback, useEffect, Children } from "react";
import Image from "next/image";

interface PresentationProps {
  children: React.ReactNode;
}

export function Presentation({ children }: PresentationProps) {
  const slides = Children.toArray(children);
  const totalSlides = slides.length;
  const [currentSlide, setCurrentSlide] = useState(0);

  const goNext = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
  }, [totalSlides]);

  const goPrev = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goNext, goPrev]);

  useEffect(() => {
    const handleGoToFirst = () => setCurrentSlide(0);
    window.addEventListener("goToFirstSlide", handleGoToFirst);
    return () => window.removeEventListener("goToFirstSlide", handleGoToFirst);
  }, []);

  useEffect(() => {
    const handleGoToSlide = (e: Event) => {
      const detail = (e as CustomEvent<{ index: number }>).detail;
      const index = Math.max(0, Math.min(detail?.index ?? 0, totalSlides - 1));
      setCurrentSlide(index);
    };
    window.addEventListener("goToSlide", handleGoToSlide);
    return () => window.removeEventListener("goToSlide", handleGoToSlide);
  }, [totalSlides]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Logo */}
      <div className="absolute top-6 left-6 z-20">
        <Image src="/logoglovo.png" alt="Glovo" width={48} height={48} className="object-contain drop-shadow-md" />
      </div>

      {/* Main content - carousel */}
      <div className="flex-1 w-full flex items-center justify-center py-20 pt-24 overflow-x-hidden px-4">
        <div className="w-full overflow-hidden" style={{ maxWidth: "min(100%, 1400px)" }}>
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              width: `${totalSlides * 100}%`,
              transform: `translateX(-${(currentSlide / totalSlides) * 100}%)`,
            }}
          >
            {slides.map((slide, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center justify-center px-4 md:px-8"
                style={{ width: `${100 / totalSlides}%` }}
              >
                <div className="w-full max-w-4xl mx-auto">{slide}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none px-2 md:px-4">
        <div className="pointer-events-auto flex flex-col items-center gap-2">
          {currentSlide > 0 && (
            <>
          <button
            onClick={goPrev}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-glovo-teal text-white flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity"
            aria-label="Slide anterior"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
            <button
              onClick={() => setCurrentSlide(1)}
              className="w-7 h-7 rounded-full bg-glovo-dark/15 text-glovo-dark/40 flex items-center justify-center hover:bg-glovo-dark/25 hover:text-glovo-dark/60 transition-all"
              aria-label="Go to menu"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </button>
            </>
          )}
        </div>
        <button
          onClick={goNext}
          disabled={currentSlide === totalSlides - 1}
          className="pointer-events-auto w-12 h-12 md:w-14 md:h-14 rounded-full bg-glovo-teal text-white flex items-center justify-center shadow-lg hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed transition-opacity"
          aria-label="Siguiente slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Progress bar */}
      <div className="fixed bottom-0 left-0 right-0 h-2 bg-white/50 z-20">
        <div
          className="h-full bg-glovo-teal transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
        />
      </div>

      {/* Slide counter */}
      <div className="fixed bottom-4 right-4 bg-glovo-dark/80 text-white px-3 py-1 rounded-lg text-sm font-medium z-20">
        {currentSlide + 1} / {totalSlides}
      </div>
    </div>
  );
}
