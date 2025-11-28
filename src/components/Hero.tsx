import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface HeroProps {
  imageSrc?: string;
}

export function Hero({ imageSrc = '/hero.png' }: HeroProps) {
  const [isBlinking, setIsBlinking] = useState(false);

  // Erratic blink effect every few seconds
  useEffect(() => {
    const triggerBlink = () => {
      // Random interval between 3-8 seconds
      const nextBlink = 3000 + Math.random() * 5000;

      setTimeout(() => {
        // Quick erratic blink sequence
        setIsBlinking(true);
        setTimeout(() => setIsBlinking(false), 50);
        setTimeout(() => setIsBlinking(true), 100);
        setTimeout(() => setIsBlinking(false), 150);
        setTimeout(() => setIsBlinking(true), 250);
        setTimeout(() => setIsBlinking(false), 300);

        triggerBlink();
      }, nextBlink);
    };

    triggerBlink();
  }, []);

  return (
    <section className="relative pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Hero Image - Centered at Top */}
        <motion.div
          className="relative mb-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={imageSrc}
            alt="AUGMENTED - AI Enhanced Human"
            className="w-full max-w-3xl mx-auto h-auto"
          />
        </motion.div>

        {/* Title Block - Title and Subtitle together */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
          style={{ opacity: isBlinking ? 0 : 1 }}
        >
          {/* Main Title */}
          <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl uppercase tracking-[0.15em] leading-none">
            <span className="text-brand">A</span>
            <sup className="text-brand text-3xl sm:text-4xl lg:text-5xl" style={{ verticalAlign: 'super' }}>i</sup>
            <span className="text-brand">UGMENT</span>
            <span className="text-text-primary">ED</span>
          </h1>

          {/* Subtitle - nested right under, white, same width */}
          <p className="font-sans text-lg sm:text-xl lg:text-2xl tracking-[0.3em] uppercase text-text-primary mt-3">
            How to Integrate AI into Life and Work
          </p>
        </motion.div>

        {/* Course Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="max-w-2xl mx-auto mb-10">
            <p className="text-text-secondary text-xl mb-4 font-body">
              I run a course focused around upgrading yourself with AI.
            </p>
            <p className="text-text-tertiary text-lg mb-6 font-body">
              The expanded on-demand course will be available for purchase online in early 2026. Stay tuned!
            </p>
            <p className="text-text-secondary text-xl font-body">
              Here's what you'll learn:
            </p>
          </div>

          <a
            href="#features"
            className="inline-block px-8 py-4 rounded-xl font-heading font-semibold text-lg bg-brand hover:bg-brand-light text-white transition-all duration-300 shadow-lg shadow-brand/30 hover:shadow-brand/50 hover:scale-105"
          >
            Explore the Course
          </a>
        </motion.div>
      </div>
    </section>
  );
}
