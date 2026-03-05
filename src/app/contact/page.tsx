"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStatus("success");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    { label: "Email", value: "info@cafe-de-anatolia.com", href: "mailto:info@cafe-de-anatolia.com" },
    { label: "Booking", value: "bookings@cafe-de-anatolia.com", href: "mailto:bookings@cafe-de-anatolia.com" },
    { label: "Press", value: "press@cafe-de-anatolia.com", href: "mailto:press@cafe-de-anatolia.com" },
  ];

  const socialLinks = [
    { name: "Facebook", url: "https://www.facebook.com/CafeDeAnatolia/" },
    { name: "Instagram", url: "https://www.instagram.com/cafedeanatolia/" },
    { name: "YouTube", url: "https://www.youtube.com/channel/UC1Tr6S-XLBk1NzNX1jErWMg" },
    { name: "SoundCloud", url: "https://soundcloud.com/cafedeanatolia" },
    { name: "Twitter", url: "https://twitter.com/cafedeanatolia" },
  ];

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gold">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white/5 rounded-lg p-8 border border-white/10">
            <h2 className="text-2xl font-bold mb-6 text-white">Send us a Message</h2>
            
            {status === "success" && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400">
                Thank you! Your message has been sent successfully.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-gold transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-gold transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-gold transition-colors"
                >
                  <option value="" className="bg-primary">Select a subject</option>
                  <option value="booking" className="bg-primary">Booking Inquiry</option>
                  <option value="press" className="bg-primary">Press & Media</option>
                  <option value="collaboration" className="bg-primary">Collaboration</option>
                  <option value="other" className="bg-primary">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-gold transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-3 bg-gold text-primary font-bold rounded-lg hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Contact Details */}
            <div className="bg-white/5 rounded-lg p-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-6 text-white">Get in Touch</h2>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div key={info.label}>
                    <span className="text-sm text-gray-400">{info.label}</span>
                    <a
                      href={info.href}
                      className="block text-gold hover:text-white transition-colors"
                    >
                      {info.value}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/5 rounded-lg p-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-6 text-white">Follow Us</h2>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm transition-colors"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="bg-white/5 rounded-lg p-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-4 text-white">Location</h2>
              <p className="text-gray-400">
                Based in Turkey<br />
                Serving artists and audiences worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
