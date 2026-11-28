import { motion, useScroll, useTransform } from 'framer-motion';

export function Nav() {
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 0.9]);
  const borderOpacity = useTransform(scrollY, [0, 100], [0, 1]);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {/* Blur background on scroll */}
        <motion.div
          className="absolute inset-0 bg-bg-primary/80 backdrop-blur-xl"
          style={{ opacity: bgOpacity }}
        />
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px bg-border-subtle"
          style={{ opacity: borderOpacity }}
        />

        <div className="relative max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo / Brand */}
          <a href="/" className="flex items-center gap-3 group">
            <span className="font-heading font-bold text-xl text-text-primary group-hover:text-brand transition-colors">
              AUGMENTED
            </span>
          </a>

          {/* CTA Button */}
          <a
            href="https://human3.ai/courses"
            className="px-5 py-2.5 rounded-lg font-heading font-medium text-sm bg-brand hover:bg-brand-light text-white transition-all duration-300 shadow-lg shadow-brand/20 hover:shadow-brand/40 hover:scale-105"
          >
            Get the Course
          </a>
        </div>
      </motion.nav>

    </>
  );
}
