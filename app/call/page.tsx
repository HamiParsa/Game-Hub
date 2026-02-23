"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageCircle, 
  Twitter, 
  Github, 
  Linkedin,
  Gamepad2,
  Clock,
  CheckCircle,
  AlertCircle
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "alex@gaminghub.com",
      description: "Send me an email anytime",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      description: "Mon-Fri, 9am-6pm PT",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      description: "Based in SF Bay Area",
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "Within 24 hours",
      description: "I'll get back to you quickly",
    },
  ];

  const socialLinks = [
    { icon: Twitter, label: "Twitter", href: "#", username: "@alexgaming" },
    { icon: Github, label: "GitHub", href: "#", username: "alexchen" },
    { icon: Linkedin, label: "LinkedIn", href: "#", username: "alex-chen" },
    { icon: MessageCircle, label: "Discord", href: "#", username: "alex#1234" },
  ];

  const faqs = [
    {
      question: "How quickly do you respond?",
      answer: "I usually respond within 24 hours during weekdays. Weekends might take a bit longer.",
    },
    {
      question: "Can I submit a game for review?",
      answer: "Absolutely! Please include all relevant details and a press kit if available.",
    },
    {
      question: "Do you accept guest posts?",
      answer: "Yes, I'm open to guest contributions. Send me your pitch and writing samples.",
    },
    {
      question: "Business inquiries?",
      answer: "For partnerships and business opportunities, please use the contact form.",
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }, 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]" />
        
        <div className="absolute top-20 left-10 w-250 h-250 bg-green-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-250 h-250 bg-emerald-600/20 rounded-full blur-[120px] animate-pulse delay-1000" />
        
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full mb-6 border border-white/10 backdrop-blur-sm">
            <Mail size={16} className="text-green-500" />
            <span className="text-sm font-medium text-white/80">GET IN TOUCH</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-black mb-6 tracking-tight">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-white/50">
              Lets
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-green-500 via-emerald-500 to-teal-500">
              Connect
            </span>
          </h1>
          
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Have a question, collaboration idea, or just want to chat about games? Id love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section className="max-w-7xl mx-auto px-5 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {contactInfo.map((info) => (
            <div key={info.label} className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
              <info.icon size={24} className="text-green-500 mb-4" />
              <h3 className="text-sm text-white/40 mb-1">{info.label}</h3>
              <p className="text-lg font-bold text-white mb-1">{info.value}</p>
              <p className="text-sm text-white/40">{info.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Send size={24} className="text-green-500" />
                Send Message
              </h2>

              {isSubmitted ? (
                <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-8 text-center">
                  <CheckCircle size={48} className="mx-auto mb-4 text-green-500" />
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-white/60">Thanks for reaching out. Ill get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-white/40 mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-white/40 mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-white/40 mb-2">Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20 transition-all"
                    >
                      <option value="" className="bg-[#1A1A1A]">Select a subject</option>
                      <option value="review" className="bg-[#1A1A1A]">Game Review Request</option>
                      <option value="collaboration" className="bg-[#1A1A1A]">Collaboration</option>
                      <option value="business" className="bg-[#1A1A1A]">Business Inquiry</option>
                      <option value="other" className="bg-[#1A1A1A]">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm text-white/40 mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20 transition-all resize-none"
                      placeholder="Your message here..."
                    />
                  </div>

                  {error && (
                    <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-4 flex items-center gap-3">
                      <AlertCircle size={20} className="text-red-500" />
                      <p className="text-red-500 text-sm">{error}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-4 bg-linear-to-r from-green-600 to-emerald-600 rounded-xl font-bold hover:shadow-xl hover:shadow-green-600/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <>Sending...</>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Social Links */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8">
              <h2 className="text-2xl font-bold mb-6">Social Media</h2>
              <div className="space-y-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <social.icon size={20} className="text-green-500" />
                      <div>
                        <p className="font-medium">{social.label}</p>
                        <p className="text-sm text-white/40">{social.username}</p>
                      </div>
                    </div>
                    <span className="text-white/40 group-hover:text-white/60 transition-colors">→</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* FAQ Preview */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8">
              <h2 className="text-2xl font-bold mb-6">Quick Answers</h2>
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <div key={faq.question} className="border-b border-white/10 last:border-0 pb-4 last:pb-0">
                    <h3 className="font-medium mb-2 text-green-500">{faq.question}</h3>
                    <p className="text-sm text-white/40">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Gaming Status */}
            <div className="bg-linear-to-r from-green-600/20 to-emerald-600/20 rounded-3xl border border-green-500/30 p-8">
              <div className="flex items-center gap-3 mb-4">
                <Gamepad2 size={24} className="text-green-500" />
                <h2 className="text-2xl font-bold">Gaming Status</h2>
              </div>
              <p className="text-white/60 mb-4">Currently playing:</p>
              <p className="text-xl font-bold mb-2">Elden Ring: Shadow of the Erdtree</p>
              <p className="text-sm text-white/40">42 hours played • New Game+</p>
              <div className="mt-4 w-full bg-white/10 rounded-full h-2">
                <div className="w-3/4 bg-linear-to-r from-green-500 to-emerald-500 h-2 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="max-w-7xl mx-auto px-5 pb-24">
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8">
          <div className="flex items-center gap-3 mb-6">
            <MapPin size={24} className="text-green-500" />
            <h2 className="text-2xl font-bold">Find Me</h2>
          </div>
          <div className="relative h-200 rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100949.2442971396!2d-122.44206653923853!3d37.75103490569717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="San Francisco Map"
            />
          </div>
        </div>
      </section>
    </div>
  );
}