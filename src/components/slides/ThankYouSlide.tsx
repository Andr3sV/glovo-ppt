"use client";

export function ThankYouSlide() {
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-[500px]">
      <div className="relative w-full max-w-2xl">
        <div className="relative w-full rounded-3xl bg-white shadow-xl overflow-hidden p-12 md:p-16">
          <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-gray-200 to-transparent rounded-tl-3xl" />

          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-glovo-dark mb-6">
              Thank you!
            </h1>
            <p className="text-lg md:text-xl text-glovo-dark">
              Patricia Belestá / Lawyer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
