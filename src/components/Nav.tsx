import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { X } from 'lucide-react';

export function Nav() {
  const [showPopup, setShowPopup] = useState(false);
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
          <button
            onClick={() => setShowPopup(true)}
            className="px-5 py-2.5 rounded-lg font-heading font-medium text-sm bg-brand hover:bg-brand-light text-white transition-all duration-300 shadow-lg shadow-brand/20 hover:shadow-brand/40 hover:scale-105"
          >
            Register Today
          </button>
        </div>
      </motion.nav>

      {/* Coming Soon Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setShowPopup(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal */}
            <motion.div
              className="relative bg-bg-secondary border border-border-default rounded-2xl p-8 max-w-md w-full shadow-2xl"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              {/* Close button */}
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-4 right-4 p-2 rounded-lg text-text-tertiary hover:text-text-primary hover:bg-bg-tertiary transition-colors"
              >
                <X size={20} />
              </button>

              {/* Content */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-brand/20 flex items-center justify-center">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="font-heading font-bold text-2xl text-text-primary mb-3">
                  Coming Soon
                </h3>
                <p className="text-text-secondary text-lg mb-6">
                  Expanded on-demand course coming in early 2026.
                </p>
                <p className="text-text-tertiary text-sm">
                  Sign up for updates to be notified when registration opens.
                </p>
                <button
                  onClick={() => setShowPopup(false)}
                  className="mt-6 px-6 py-3 rounded-lg font-heading font-medium bg-bg-tertiary hover:bg-bg-elevated text-text-primary transition-colors w-full"
                >
                  Got it
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
