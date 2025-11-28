import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const modules = [
  {
    number: '01',
    title: "What's Coming",
    topics: [
      'The future of AI and its trajectory',
      'Job market transformation',
      'Societal changes ahead',
      'How to prepare yourself'
    ]
  },
  {
    number: '02',
    title: 'Skillsets and Mental Frames',
    topics: [
      'Post-AI learning strategies',
      'Career advice for the AI age',
      'Building adaptable mindsets',
      'Continuous learning frameworks'
    ]
  },
  {
    number: '03',
    title: 'Your Personal AI Infrastructure',
    topics: [
      'Building AI microservices',
      'Creating personal agents',
      'OS and app integrations',
      'Workflow automation'
    ]
  },
  {
    number: '04',
    title: 'Human 3.0',
    topics: [
      'Understanding the H3 concept',
      'Calculating your H3 score',
      'Building your H3 roadmap',
      'Achieving full augmentation'
    ]
  }
];

export function Modules() {
  return (
    <section id="modules" className="relative py-24 px-6 bg-bg-secondary/30">
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
            Curriculum
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-text-primary mb-6">
            Deep Dive Into{' '}
            <span className="text-gradient">Each Module</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Structured learning that builds on each concept, taking you step-by-step toward becoming AI-augmented.
          </p>
        </motion.div>

        {/* Modules List */}
        <div className="space-y-6">
          {modules.map((module, index) => (
            <motion.div
              key={module.number}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl border border-border-subtle bg-bg-secondary/50 backdrop-blur-sm p-6 sm:p-8 transition-all duration-300 hover:border-brand/40 hover:bg-bg-tertiary/50">
                <div className="flex flex-col sm:flex-row gap-6">
                  {/* Module Number */}
                  <div className="flex-shrink-0">
                    <span className="font-heading text-5xl sm:text-6xl font-bold text-gradient opacity-50 group-hover:opacity-100 transition-opacity">
                      {module.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-text-primary mb-4 group-hover:text-brand transition-colors">
                      {module.title}
                    </h3>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {module.topics.map((topic, i) => (
                        <li key={i} className="flex items-start gap-2 text-text-secondary">
                          <ChevronRight size={18} className="flex-shrink-0 mt-0.5 text-brand/60" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
