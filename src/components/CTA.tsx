import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

export function CTA() {
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
                <BookOpen size={16} />
                Available Now
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
              Get the full slide decks from the AUGMENTED course, every version, through Human 3.0.
            </motion.p>

            <motion.a
              href="https://human3.ai/courses"
              className="inline-block px-8 py-4 rounded-xl font-heading font-semibold text-lg bg-brand hover:bg-brand-light text-white transition-all duration-300 shadow-lg shadow-brand/30 hover:shadow-brand/50 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Get the Course
            </motion.a>
          </motion.div>
        </div>
      </section>

    </>
  );
}
