import { motion } from 'framer-motion';
import { Twitter, Github, Youtube, ExternalLink } from 'lucide-react';

const socialLinks = [
  {
    name: 'Twitter',
    href: 'https://twitter.com/DanielMiessler',
    icon: Twitter
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/@unsupervised-learning',
    icon: Youtube
  },
  {
    name: 'GitHub',
    href: 'https://github.com/danielmiessler',
    icon: Github
  }
];

export function Footer() {
  return (
    <footer className="relative py-16 px-6 border-t border-border-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <a href="/" className="font-heading font-bold text-xl text-text-primary hover:text-brand transition-colors">
              AUGMENTED
            </a>
            <p className="text-text-tertiary text-sm mt-2">
              by{' '}
              <a
                href="https://unsupervised-learning.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-brand transition-colors inline-flex items-center gap-1"
              >
                Unsupervised Learning
                <ExternalLink size={12} />
              </a>
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-bg-secondary border border-border-subtle text-text-secondary hover:text-brand hover:border-brand/40 transition-all duration-300"
                aria-label={link.name}
              >
                <link.icon size={20} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          className="mt-12 pt-8 border-t border-border-subtle text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-text-tertiary text-sm">
            &copy; {new Date().getFullYear()} Daniel Miessler. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
