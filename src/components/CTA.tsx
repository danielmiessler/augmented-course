import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Bell } from 'lucide-react';

export function CTA() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <section className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="relative overflow-hidden rounded-3xl border border-border-subtle bg-gradient-to-br from-bg-secondary to-bg-tertiary p-8 sm:p-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand/20 rounded-full blur-[100px] -z-10" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-heading font-medium mb-6">
                <Bell size={16} />
                Coming Early 2026
              </span>
            </motion.div>

            <motion.h2
              className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-text-primary mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Ready to Become{' '}
              <span className="text-gradient">Augmented</span>?
            </motion.h2>

            <motion.p
              className="text-text-secondary text-lg mb-8 max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              The expanded on-demand course is coming in early 2026. Be among the first to know when registration opens.
            </motion.p>

            <motion.button
              onClick={() => setShowPopup(true)}
              className="px-8 py-4 rounded-xl font-heading font-semibold text-lg bg-brand hover:bg-brand-light text-white transition-all duration-300 shadow-lg shadow-brand/30 hover:shadow-brand/50 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Notify Me
            </motion.button>
          </motion.div>
        </div>
      </section>

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
                  Follow{' '}
                  <a
                    href="https://twitter.com/DanielMiessler"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand hover:text-brand-light transition-colors"
                  >
                    @DanielMiessler
                  </a>
                  {' '}on X for updates.
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
