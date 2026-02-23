"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Autoplay, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    bg: "https://wallpapercave.com/uwp/uwp4226832.jpeg",
    title: "God of War Ragnarök",
    subtitle: "Kratos and Atreus face their destiny across the Nine Realms",
    accent: "purple",
  },
  {
    id: 2,
    bg: "https://wallpapercave.com/wp/wp15445510.png",
    title: "Cyberpunk 2077",
    subtitle: "Night City awaits in the ultimate futuristic adventure",
    accent: "cyan",
  },
  {
    id: 3,
    bg: "https://wallpapercave.com/wp/wp15113351.jpg",
    title: "The Last of Us",
    subtitle: "Survive the apocalypse in a story of hope and redemption",
    accent: "violet",
  },
  {
    id: 4,
    bg: "https://wallpapercave.com/wp/wp13611839.jpg",
    title: "Red Dead Redemption 2",
    subtitle: "The wild west awaits in the ultimate outlaw experience",
    accent: "amber",
  },
];

export default function FutureOrbitSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [progress, setProgress] = useState(0);
  const progressInterval = useRef<NodeJS.Timeout>(null);
  const isMounted = useRef(true);

  // Cleanup on unmount
  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  // Handle progress interval
  useEffect(() => {
    if (!swiperInstance) return;

    // Clear previous interval
    if (progressInterval.current) {
      clearInterval(progressInterval.current);
    }

    // Start new progress interval
    progressInterval.current = setInterval(() => {
      // Only update if component is mounted
      if (isMounted.current) {
        setProgress((prev) => {
          if (prev >= 99.5) {
            // Use requestAnimationFrame to ensure we're not in render phase
            requestAnimationFrame(() => {
              if (swiperInstance && isMounted.current) {
                swiperInstance.slideNext();
              }
            });
            return 0;
          }
          return prev + 0.5;
        });
      }
    }, 25);

    return () => {
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
    };
  }, [activeIndex, swiperInstance]);

  const handleSlideChange = useCallback((swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
    setProgress(0);
  }, []);

  const handlePrev = useCallback(() => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
      setProgress(0);
    }
  }, [swiperInstance]);

  const handleNext = useCallback(() => {
    if (swiperInstance) {
      swiperInstance.slideNext();
      setProgress(0);
    }
  }, [swiperInstance]);

  const handleIndicatorClick = useCallback(
    (index: number) => {
      if (swiperInstance) {
        swiperInstance.slideToLoop(index);
        setProgress(0);
      }
    },
    [swiperInstance],
  );

  const getAccentColor = (accent: string) => {
    const colors: Record<string, string> = {
      purple: "from-purple-500 to-purple-600",
      cyan: "from-cyan-500 to-cyan-600",
      violet: "from-violet-500 to-fuchsia-600",
      amber: "from-amber-500 to-rose-600",
    };
    return colors[accent] || colors.purple;
  };

  const getGradientClass = (accent: string) => {
    const gradients: Record<string, string> = {
      purple: "from-purple-600/20 to-blue-600/20",
      cyan: "from-cyan-600/20 to-emerald-600/20",
      violet: "from-violet-600/20 to-fuchsia-600/20",
      amber: "from-amber-600/20 to-rose-600/20",
    };
    return gradients[accent] || gradients.purple;
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <Swiper
        modules={[EffectCreative, Autoplay, Pagination]}
        effect="creative"
        creativeEffect={{
          prev: {
            translate: ["-120%", 0, -500],
            rotate: [0, 0, -30],
            opacity: 0,
          },
          next: {
            translate: ["120%", 0, -500],
            rotate: [0, 0, 30],
            opacity: 0,
          },
        }}
        slidesPerView={1}
        autoplay={false}
        loop={true}
        speed={1000}
        onSlideChange={handleSlideChange}
        onSwiper={setSwiperInstance}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full overflow-hidden">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slide.bg})`,
                }}
              />

              {/* Animated Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-linear-to-t ${getGradientClass(slide.accent)} mix-blend-overlay`}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-black/30" />

              {/* Animated Lines */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/50 to-transparent animate-slide" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/50 to-transparent animate-slide-reverse" />
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
                {/* Title */}
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-black max-w-5xl mb-6 leading-tight animate-fade-in-up animation-delay-200">
                  {slide.title.split(" ").map((word, i) => (
                    <span
                      key={i}
                      className="inline-block hover:scale-105 transition-transform hover:text-transparent hover:bg-clip-text hover:bg-linear-to-r from-white to-gray-300"
                    >
                      {word}{" "}
                    </span>
                  ))}
                </h2>

                {/* Subtitle */}
                <p className="text-lg md:text-xl lg:text-2xl max-w-2xl mb-10 text-white/70 font-light tracking-wide animate-fade-in-up animation-delay-400">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Progress Bar */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 w-64">
        <div className="relative h-1 bg-white/20 rounded-full overflow-hidden">
          <div
            className={`absolute left-0 top-0 h-full bg-linear-to-r ${getAccentColor(slides[activeIndex]?.accent || "purple")} transition-all duration-100 ease-linear`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Custom Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => handleIndicatorClick(idx)}
            className="group relative"
          >
            <div
              className={`
              h-2 rounded-full transition-all duration-500
              ${
                idx === activeIndex
                  ? `w-12 bg-linear-to-r ${getAccentColor(slide.accent)}`
                  : "w-2 bg-white/30 group-hover:bg-white/50"
              }
            `}
            />
          </button>
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-8 right-8 z-20">
        <div className="flex items-center gap-2 text-white/60">
          <span className="text-2xl font-light">
            {String(activeIndex + 1).padStart(2, "0")}
          </span>
          <span className="text-sm font-light">/</span>
          <span className="text-sm font-light">
            {String(slides.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 hover:border-white/40 transition-all group"
      >
        <span className="text-2xl font-light group-hover:-translate-x-0.5 transition-transform">
          ←
        </span>
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 hover:border-white/40 transition-all group"
      >
        <span className="text-2xl font-light group-hover:translate-x-0.5 transition-transform">
          →
        </span>
      </button>

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        @keyframes slideReverse {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide {
          animation: slide 8s linear infinite;
        }
        .animate-slide-reverse {
          animation: slideReverse 8s linear infinite;
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
          opacity: 0;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </div>
  );
}
