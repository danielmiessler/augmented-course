import { motion } from 'framer-motion';
import { Brain, Cpu, Sparkles, Target } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: "What's Coming",
    description: "Understand the future of AI, how it will impact jobs and society, and how to prepare yourself for the transformation ahead.",
    color: 'from-purple-500/20 to-purple-600/10'
  },
  {
    icon: Sparkles,
    title: "Skillsets & Mental Frames",
    description: "Develop the post-AI learning mindset. Practical advice for young people and career changers navigating the AI revolution.",
    color: 'from-blue-500/20 to-blue-600/10'
  },
  {
    icon: Cpu,
    title: "Personal AI Infrastructure",
    description: "Build your own AI microservices, agents, and OS integrations. Create workflows that amplify your capabilities.",
    color: 'from-cyan-500/20 to-cyan-600/10'
  },
  {
    icon: Target,
    title: "Human 3.0",
    description: "Understand the Human 3.0 concept, calculate your H3 score, and build a personalized plan to become fully augmented.",
    color: 'from-emerald-500/20 to-emerald-600/10'
  }
];

export function Features() {
  return (
    <section id="features" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-accent font-heading text-sm font-medium tracking-wider uppercase mb-4 block">
            Course Overview
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-text-primary mb-6">
            Four Modules to{' '}
            <span className="text-gradient">Transform</span>
            {' '}Your Future
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            A comprehensive curriculum designed to take you from AI-curious to AI-augmented.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative"
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative overflow-hidden rounded-2xl border border-border-subtle bg-bg-secondary/50 backdrop-blur-sm p-8 transition-all duration-300 group-hover:border-brand/40 group-hover:bg-bg-tertiary/50">
                {/* Icon */}
                <div className="relative mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-brand/10 border border-brand/20 text-brand group-hover:bg-brand/20 transition-colors duration-300">
                  <feature.icon size={28} />
                </div>

                {/* Content */}
                <h3 className="relative font-heading text-xl font-bold text-text-primary mb-3 group-hover:text-brand transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="relative text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
