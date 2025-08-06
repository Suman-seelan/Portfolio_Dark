"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, RotateCcw, Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import emailjs from '@emailjs/browser';
import { emailConfig } from '@/config/email';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        from_mobile: formData.mobile,
        subject: formData.subject,
        message: formData.message,
        to_email: emailConfig.toEmail,
      };

      await emailjs.send(
        emailConfig.serviceId, 
        emailConfig.templateId, 
        templateParams, 
        emailConfig.publicKey
      );
      
      setIsLoading(false);
      setIsSuccess(true);
      
      // Auto close after 2 seconds
      setTimeout(() => {
        handleClear();
        setIsSuccess(false);
        onClose();
      }, 2000);
      
    } catch (error) {
      console.error('Error sending email:', error);
      setIsLoading(false);
      // You can add error handling UI here if needed
    }
  };

  const handleClear = () => {
    setFormData({
      name: "",
      mobile: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={handleOverlayClick}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          
          {/* Form Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-md max-h-[90vh] flex items-center justify-center"
          >
            {/* Glassy Form */}
            <div className="relative rounded-2xl border border-white/20 bg-black/40 p-6 backdrop-blur-xl shadow-2xl overflow-y-auto max-h-[80vh] scrollbar-hide">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Header */}
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-white">Get In Touch</h2>
                <p className="mt-2 text-sm text-gray-300">
                  Let&apos;s discuss your project and bring your ideas to life.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSend} className="space-y-4">
                {/* Name Field */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-white">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm transition-all focus:border-cyan-400/50 focus:bg-white/15 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                    placeholder="Your full name"
                  />
                </div>

                {/* Mobile Field */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-white">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm transition-all focus:border-cyan-400/50 focus:bg-white/15 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                    placeholder="Your mobile number"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-white">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm transition-all focus:border-cyan-400/50 focus:bg-white/15 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                    placeholder="your.email@example.com"
                  />
                </div>
                {/* Subject Field */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-white">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm transition-all focus:border-cyan-400/50 focus:bg-white/15 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                    placeholder="Subject of your message"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-white">
                    Tell Us About Project *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full resize-none rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm transition-all focus:border-cyan-400/50 focus:bg-white/15 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                    placeholder="Tell me about your project, requirements, timeline, and budget..."
                  />
                </div>

                {/* Success Message */}
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-center gap-2 rounded-lg bg-green-500/20 border border-green-500/30 px-4 py-3 text-green-400"
                  >
                    <CheckCircle className="h-5 w-5" />
                    <span className="font-medium">Message sent successfully!</span>
                  </motion.div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button
                    type="submit"
                    disabled={isLoading || isSuccess}
                    className="flex-1 bg-gradient-to-r from-cyan-400 to-violet-500 px-4 py-3 text-black transition-all hover:from-cyan-500 hover:to-violet-600 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : isSuccess ? (
                      <>
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Sent!
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                  {!isLoading && !isSuccess && (
                    <Button
                      type="button"
                      onClick={handleClear}
                      variant="outline"
                      className="border-white/20 bg-white/10 px-4 py-3 text-white backdrop-blur-sm transition-all hover:bg-white/20"
                    >
                      <RotateCcw className="mr-2 h-4 w-4" />
                      Clear
                    </Button>
                  )}
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
