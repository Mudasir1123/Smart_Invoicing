'use client'

import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { PageTransition } from '@/components/providers/PageTransition'
import { motion } from 'framer-motion'
import { AnimatedCard } from '@/components/AnimatedCard'
import { useEffect, useState } from 'react'

export default function Blog() {
  

  const blogPosts = [
    {
      id: 1,
      title: 'FBR Digital Invoicing Compliance in Pakistan',
      excerpt: 'Learn about the new FBR requirements for digital invoicing and how to stay compliant.',
      content: 'Digital invoicing is now mandatory for all businesses in Pakistan. Our Smart Invoicing system is fully compliant with FBR requirements, ensuring seamless integration and automatic filing.',
      date: 'May 15, 2026',
      author: 'Muhammed Asif',
      category: 'Compliance',
    },
    {
      id: 2,
      title: 'Streamline Your VAT Filing Process',
      excerpt: 'Discover how digital solutions can simplify VAT registration and filing.',
      content: 'VAT filing can be complex, but with the right tools, it becomes straightforward. Our cloud-based system eliminates manual entry errors and provides real-time reporting.',
      date: 'May 10, 2026',
      author: 'Muhammed Raza',
      category: 'VAT',
    },
    {
      id: 3,
      title: 'Cloud-Based Accounting: The Future of Finance',
      excerpt: 'Explore the benefits of moving your accounting to the cloud.',
      content: 'Cloud-based accounting offers flexibility, security, and real-time access from anywhere in the world. No more installation required, no more data loss risks.',
      date: 'May 5, 2026',
      author: 'Muhammed Asif',
      category: 'Accounting',
    },
    {
      id: 4,
      title: 'Top 5 Invoicing Mistakes to Avoid',
      excerpt: 'Common invoicing errors that cost businesses money.',
      content: 'From incorrect invoice numbering to missing tax details, small mistakes can lead to compliance issues and payment delays. Learn how to avoid them.',
      date: 'April 28, 2026',
      author: 'Muhammed Raza',
      category: 'Tips',
    },
    {
      id: 5,
      title: 'Integration with FBR: What You Need to Know',
      excerpt: 'A comprehensive guide to FBR integration requirements.',
      content: 'FBR integration is no longer optional. Understand the requirements, timelines, and how our system handles everything automatically.',
      date: 'April 20, 2026',
      author: 'Muhammed Asif',
      category: 'Integration',
    },
    {
      id: 6,
      title: 'Secure Your Financial Data with Cloud Technology',
      excerpt: 'Security measures to protect your business invoicing data.',
      content: 'Your financial data is critical. Our cloud infrastructure uses enterprise-level encryption and security protocols to keep your data safe 24/7.',
      date: 'April 15, 2026',
      author: 'Muhammed Raza',
      category: 'Security',
    },
  ]

  return (
    <PageTransition>
      <main className="w-full overflow-x-hidden pt-20 bg-transparent text-foreground">
        <Navbar />

        {/* Blog Header */}
        <section className="relative pt-24 pb-12 px-6 lg:px-16 text-center">
          <div className="relative z-10 mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-6 inline-block rounded-full px-5 py-2 text-xs font-bold uppercase tracking-widest border"
              style={{ color: '#1E9AD8', borderColor: 'rgba(30,154,216,0.4)', background: 'rgba(30,154,216,0.1)' }}
            >
              Latest Insights
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-black text-foreground tracking-tight leading-none mb-6">
              SMART INVOICING{' '}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #1E9AD8, #00A266)' }}>
                KNOWLEDGE BASE.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed font-semibold">
              Stay ahead with professional tips, VAT regulations, and official FBR digital compliance guides.
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="pb-32 px-6 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post, index) => (
                <AnimatedCard
                  key={post.id}
                  index={index}
                  direction="bottom"
                  neonBorder={true}
                  className="h-full flex flex-col"
                >
                  <div className="p-8 flex flex-col h-full justify-between">
                    <div>
                      <div className="mb-4 flex items-center justify-between text-xs font-bold uppercase tracking-widest text-muted-foreground">
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">{post.category}</span>
                        <span>{post.date}</span>
                      </div>
                      <h2 className="mb-4 text-2xl font-black text-foreground hover:text-primary transition-colors cursor-pointer leading-tight">
                        {post.title}
                      </h2>
                      <p className="mb-6 text-sm text-muted-foreground leading-relaxed font-semibold">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-black/5 dark:border-white/5">
                      <span className="text-xs font-bold text-muted-foreground/80">
                        By {post.author}
                      </span>
                      <span className="text-xs font-black text-primary hover:text-primary-dark transition-colors cursor-pointer uppercase tracking-widest">
                        Read More →
                      </span>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </PageTransition>
  )
}
