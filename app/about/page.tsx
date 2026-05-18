'use client'

import { motion } from 'framer-motion'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { PageTransition } from '@/components/providers/PageTransition'
import { TextReveal } from '@/components/TextReveal'
import { AnimatedCard } from '@/components/AnimatedCard'
import { Users, Target, Award } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Mission',
      description:
        'To empower businesses with intelligent invoicing solutions that save time and unlock growth.',
    },
    {
      icon: Users,
      title: 'Community',
      description:
        'Building a community of forward-thinking businesses that embrace automation and innovation.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description:
        'Delivering exceptional service with the highest standards of quality and security.',
    },
  ]

  const team = [
    { name: 'Sarah Chen', role: 'CEO & Co-Founder', expertise: 'Product Strategy' },
    { name: 'Marcus Johnson', role: 'CTO & Co-Founder', expertise: 'Engineering' },
    { name: 'Elena Rodriguez', role: 'Head of Design', expertise: 'UX/UI Design' },
    { name: 'David Park', role: 'VP Sales', expertise: 'Business Development' },
  ]

  return (
    <PageTransition>
      <main className="w-full overflow-x-hidden">
        <Navbar />

      {/* About Hero */}
      <section className="relative min-h-[60vh] overflow-hidden pt-32 pb-16 px-6 lg:px-16">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-primary/5" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8 inline-block rounded-full bg-glass-light px-4 py-2 text-sm font-medium text-primary border border-glass-border"
          >
            Our Story
          </motion.div>

          <TextReveal
            text="Building the Future of Invoicing"
            as="h1"
            className="text-5xl font-bold text-navy md:text-6xl"
          />

          <TextReveal
            text="Smart Invoicing was founded in 2020 with a simple mission: to automate the tedious, time-consuming invoicing process and help businesses focus on growth."
            as="p"
            className="mt-6 text-lg text-gray-600 md:text-xl"
            delay={0.3}
          />
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <TextReveal
            text="Our Core Values"
            as="h2"
            className="text-center text-4xl font-bold text-navy md:text-5xl"
          />

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <AnimatedCard
                  key={index}
                  index={index}
                  direction="bottom"
                  className="p-8"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-success">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-navy">
                    {value.title}
                  </h3>
                  <p className="mt-4 text-gray-600">
                    {value.description}
                  </p>
                </AnimatedCard>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <TextReveal
            text="Meet Our Team"
            as="h2"
            className="text-center text-4xl font-bold text-navy md:text-5xl"
          />

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                }}
                viewport={{ once: false }}
                className="text-center"
              >
                <motion.div
                  className="mb-4 h-48 rounded-2xl bg-gradient-to-br from-primary/20 to-success/20"
                  whileHover={{ scale: 1.05 }}
                />
                <h3 className="text-lg font-semibold text-navy">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-primary">{member.role}</p>
                <p className="mt-2 text-sm text-gray-600">
                  {member.expertise}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 px-6 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-4 text-center">
            {[
              { number: '4+', label: 'Years in Business' },
              { number: '10K+', label: 'Active Users' },
              { number: '50+', label: 'Team Members' },
              { number: '15', label: 'Countries Served' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  damping: 15,
                  delay: index * 0.1,
                }}
                viewport={{ once: false }}
              >
                <p className="text-5xl font-bold text-primary">
                  {stat.number}
                </p>
                <p className="mt-2 text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
    </PageTransition>
  )
}
