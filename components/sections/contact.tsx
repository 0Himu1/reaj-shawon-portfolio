'use client'

import React from "react"

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="py-20 md:py-32 px-6 md:px-8 bg-[#0F1419] text-[#F8FAFC]">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">
            Ready to Scale Your Business?
          </h2>
          <p className="text-sm md:text-base text-[#94A3B8] font-light">
            Let's discuss how we can use data-driven Meta Ads to grow your revenue.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold mb-4 tracking-tight">Get In Touch</h3>
              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="text-[#10B981] text-lg mt-0.5">📧</div>
                  <div>
                    <p className="font-semibold mb-0.5 text-[#F8FAFC] text-sm">Email</p>
                    <a href="mailto:reajshawon601412@gmail.com" className="text-[#94A3B8] hover:text-[#10B981] transition-colors font-light text-xs">
                      reajshawon601412@gmail.com
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3">
                  <div className="text-[#10B981] text-lg mt-0.5">📱</div>
                  <div>
                    <p className="font-semibold mb-0.5 text-[#F8FAFC] text-sm">WhatsApp</p>
                    <a href="https://wa.me/8801883964319" className="text-[#94A3B8] hover:text-[#10B981] transition-colors font-light text-xs">
                      +880 1883-964319
                    </a>
                  </div>
                </div>

                {/* Portfolio */}
                <div className="flex items-start gap-3">
                  <div className="text-[#10B981] text-lg mt-0.5">💼</div>
                  <div>
                    <p className="font-semibold mb-0.5 text-[#F8FAFC] text-sm">Location</p>
                    <p className="text-[#94A3B8] font-light text-xs">
                      Tejgaon, Dhaka, Bangladesh
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick stats */}
            <div className="bg-[#1A1E27] rounded-lg p-4 border border-[#2A2E37]">
              <h4 className="font-bold mb-3 text-[#F8FAFC] text-sm">Quick Facts</h4>
              <ul className="space-y-2 text-xs text-[#94A3B8] font-light">
                <li className="flex items-center gap-2">
                  <span className="text-[#10B981] text-xs">✓</span> BBA in Marketing, University of Dhaka
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#10B981] text-xs">✓</span> AI Chatbot & Meta Marketing Specialist
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#10B981] text-xs">✓</span> Content Writing & Graphic Design Expert
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#10B981] text-xs">✓</span> Video Editing (Adobe Premiere Pro & After Effects)
                </li>
              </ul>
            </div>
          </div>

          {/* Contact form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4 bg-[#1A1E27] rounded-lg p-6 border border-[#2A2E37]">
              {submitted && (
                <div className="bg-[#10B981]/10 border border-[#10B981] rounded-lg p-3 text-[#10B981] font-light text-xs">
                  ✓ Thank you! I'll get back to you soon.
                </div>
              )}

              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-xs font-semibold mb-1.5 text-[#F8FAFC]">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full bg-[#0F1419] border border-[#2A2E37] rounded-lg px-4 py-3 text-[#F8FAFC] placeholder-[#64748B] focus:outline-none focus:border-[#10B981] transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-[#F8FAFC]">
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full bg-[#0F1419] border border-[#2A2E37] rounded-lg px-4 py-3 text-[#F8FAFC] placeholder-[#64748B] focus:outline-none focus:border-[#10B981] transition-colors"
                />
              </div>

              {/* Budget */}
              <div>
                <label htmlFor="budget" className="block text-sm font-semibold mb-2 text-[#F8FAFC]">
                  Estimated Budget
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full bg-[#0F1419] border border-[#2A2E37] rounded-lg px-4 py-3 text-[#F8FAFC] focus:outline-none focus:border-[#10B981] transition-colors"
                >
                  <option value="">Select a budget range</option>
                  <option value="under-500">Under $500</option>
                  <option value="500-1000">$500 - $1,000</option>
                  <option value="1000-5000">$1,000 - $5,000</option>
                  <option value="5000-plus">$5,000+</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-semibold mb-1.5 text-[#F8FAFC]">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project, goals, and what you're looking to achieve..."
                  rows={4}
                  className="w-full bg-[#0F1419] border border-[#2A2E37] rounded-lg px-3 py-2 text-sm text-[#F8FAFC] placeholder-[#64748B] focus:outline-none focus:border-[#10B981] transition-colors resize-none"
                />
              </div>

              {/* Submit button */}
              <Button
                type="submit"
                className="w-full bg-[#10B981] hover:bg-[#059669] text-[#0F1419] font-semibold py-2 text-sm rounded-lg transition-all hover:shadow-lg hover:shadow-[#10B981]/20"
              >
                Send Message
              </Button>

              <p className="text-xs text-[#64748B] text-center font-light">
                I'll respond within 24 hours
              </p>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-[#2A2E37] flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#64748B] font-light">
          <p>© 2024 Reaj Uddin. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#10B981] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#10B981] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#10B981] transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </section>
  )
}
