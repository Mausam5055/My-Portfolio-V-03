import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, Send, Mail, Phone, Github, Linkedin, Twitter, Instagram,
  ChevronDown, AlertCircle, CheckCircle, Loader2
} from 'lucide-react';
import { cn } from '../lib/utils';
import type { ContactInfo, FAQ } from '../types';

const contactInfo: ContactInfo = {
  title: "Let's Connect",
  description: "I'm always excited to collaborate on new projects and explore creative opportunities. Whether you have a question, want to discuss a project, or just want to say hello, feel free to reach out!",
  location: { 
    address: "Kalain, Cachar, Assam, Pin-788815",
    coordinates: {
      lat: 40.7128,
      lng: -74.0060
    }
  },
  email: "rikikumkar@gmail.com",
  phone: "+91 86385 45574",
  socials: [
    { platform: "GitHub", url: "https://github.com/Mausam5055", icon: "Github" },
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/mausam-kar-6388861a7/", icon: "Linkedin" },
    { platform: "Twitter", url: "https://x.com/kar_mausam", icon: "Twitter" },
    { platform: "Instagram", url: "https://www.instagram.com/_mausam__kar___/", icon: "Instagram" }
  ],
  faqs: [
    {
      question: "What is your typical response time?",
      answer: "I usually respond within 24 hours during business days."
    },
    {
      question: "Do you take on remote projects?",
      answer: "Yes, I work with clients globally and am comfortable with remote collaboration."
    },
    {
      question: "What is your preferred method of communication?",
      answer: "Email is best for initial contact, then we can schedule video calls as needed."
    }
  ]
};

const getSocialIcon = (iconName: string) => {
  const icons: { [key: string]: React.ComponentType } = {
    Github, Linkedin, Twitter, Instagram
  };
  return icons[iconName] || Mail;
};

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [captchaValue, setCaptchaValue] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!captchaValue) {
      setFormState('error');
      return;
    }

    setFormState('loading');
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setFormState('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setCaptchaValue('');
    
    // Reset form state after showing success message
    setTimeout(() => setFormState('idle'), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    return { question: `${num1} + ${num2} = ?`, answer: (num1 + num2).toString() };
  };

  const [captcha] = useState(generateCaptcha());

  const mapUrl = `assets/location.png`;
  
  const googleMapsUrl = `https://www.google.com/maps/place/Kalain,+Assam+788815/@24.970105,92.5576313,15.25z/data=!4m6!3m5!1s0x374fd3c8c0cfe905:0x3ea3a2b3a7d61847!8m2!3d24.9681463!4d92.5718122!16s%2Fg%2F11cjjznjsj?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoJLDEwMjExMjM0SAFQAw%3D%3D`;

  return (
    <section
    id=""
    className="py-20 bg-white dark:bg-[radial-gradient(circle_at_center,_#000000_0%,_#111827_100%)] relative overflow-hidden transition-colors duration-300"
    style={{
      backgroundColor: "rgba(255, 255, 204, 0.2)" // Slightly more visible light yellow accent
    }}
  >
      <div className="container mx-auto">
         <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-100px" }}
                          className="mb-16 text-center space-y-4"
                        >
                          <motion.h2
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl md:text-5xl font-bold text-black dark:text-white" // Set to black in light mode and white in dark mode
                          >
                            Contact Me
                          </motion.h2>
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "120px" }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mx-auto rounded-full"
                          />
                        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
         {/* Left Side: Info and Map */}
<motion.div
  initial={{ opacity: 0, x: -20 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  className="space-y-8"
>
  <div className="prose dark:prose-invert">
    <h3 className="text-2xl font-semibold text-purple-600 dark:text-purple-400">
      {contactInfo.title}
    </h3>
    <p className="text-gray-600 dark:text-gray-400">
      {contactInfo.description}
    </p>
  </div>

  <div className="space-y-4">
    {/* Email */}
    <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
      <Mail className="w-5 h-5 text-blue-500 transition-transform duration-200 hover:scale-110" />
      <a 
        href={`mailto:${contactInfo.email}`} 
        className="hover:text-blue-500 transition-colors"
        aria-label={`Email me at ${contactInfo.email}`}
      >
        {contactInfo.email}
      </a>
    </div>

    {/* Phone */}
    <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
      <Phone className="w-5 h-5 text-blue-500 transition-transform duration-200 hover:scale-110" />
      <a 
        href={`tel:${contactInfo.phone}`} 
        className="hover:text-blue-500 transition-colors"
        aria-label={`Call me at ${contactInfo.phone}`}
      >
        {contactInfo.phone}
      </a>
    </div>

    {/* Address */}
    <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
      <MapPin className="w-5 h-5 text-blue-500 transition-transform duration-200 hover:scale-110" />
      <span>{contactInfo.location.address}</span>
    </div>
  </div>

  {/* Social Links */}
  <div className="flex space-x-4">
    {contactInfo.socials.map((social) => {
      const Icon = getSocialIcon(social.icon);
      return (
        <motion.a
          key={social.platform}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={cn(
            "p-2 rounded-full",
            "bg-blue-100 dark:bg-blue-900",
            "text-blue-500 dark:text-blue-400",
            "hover:bg-blue-200 dark:hover:bg-blue-800",
            "transition-colors duration-200"
          )}
          aria-label={`Visit ${social.platform}`}
        >
          <Icon className="w-5 h-5" />
        </motion.a>
      );
    })}
  </div>

  {/* Map */}
  <div className="rounded-lg border border-gray-300 dark:border-gray-700 overflow-hidden shadow-lg transition-transform duration-200 transform hover:scale-105">
    <a
      href={googleMapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block relative group"
    >
      <img
        src={mapUrl}
        alt="Location Map"
        className="w-full h-[250px] md:h-[300px] object-cover transition-shadow duration-200 group-hover:shadow-xl"
      />
      <div className={cn(
        "absolute inset-0 bg-black/20 group-hover:bg-black/40", // Darker overlay on hover
        "flex items-center justify-center",
        "transition-all duration-200"
      )}>
        <MapPin
          size={40}
          className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200 transform scale-75 group-hover:scale-100" // Scale effect on hover
        />
      </div>
  </a>
</div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6 bg-blue-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg"
            >
              {/* ... (all form fields keep same structure, only color changes) */}
              <div>
  <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">
    Name
  </label>
  <motion.input
    whileFocus={{ scale: 1.01 }}
    type="text"
    id="name"
    name="name"
    value={formData.name}
    onChange={handleChange}
    required
    className={cn(
      "w-full px-4 py-2 rounded-lg",
      "bg-white dark:bg-gray-900",
      "border border-blue-100 dark:border-gray-700",
      "focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400",
      "focus:border-transparent",
      "transition-all duration-200",
      "text-gray-900 dark:text-white" // Add this line for text color
    )}
  />
</div>
              {/* ... (other form fields with same structure) */}
              <div>
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={cn(
                    "w-full px-4 py-2 rounded-lg",
                    "bg-white dark:bg-gray-900",
                    "border border-blue-100 dark:border-gray-700",
                    "focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400",
                    "focus:border-transparent",
                    "transition-all duration-200",
                    "text-gray-900 dark:text-white" // Add this line for text color
                  )}
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={cn(
                    "w-full px-4 py-2 rounded-lg",
                    "bg-white dark:bg-gray-900",
                    "border border-blue-100 dark:border-gray-700",
                    "focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400",
                    "focus:border-transparent",
                    "transition-all duration-200",
                    "text-gray-900 dark:text-white" // Add this line for text color
                  )}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.01 }}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={cn(
                    "w-full px-4 py-2 rounded-lg",
                    "bg-white dark:bg-gray-900",
                    "border border-blue-100 dark:border-gray-700",
                    "focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400",
                    "focus:border-transparent",
                    "transition-all duration-200",
                    "text-gray-900 dark:text-white" // Add this line for text color
                  )}
                />
              </div>

{/* Simple CAPTCHA */}
<div>
                <label htmlFor="captcha" className="block text-gray-700 dark:text-gray-300 mb-2">
                  Verify you're human: {captcha.question}
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="text"
                  id="captcha"
                  value={captchaValue}
                  onChange={(e) => setCaptchaValue(e.target.value)}
                  required
                  className={cn(
                    "w-full px-4 py-2 rounded-lg",
                    "bg-white dark:bg-gray-900",
                    "border border-blue-100 dark:border-gray-700",
                    "focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400",
                    "focus:border-transparent",
                    "transition-all duration-200",
                    "text-gray-900 dark:text-white" // Add this line for text color
                  )}
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={formState === 'loading'}
                className={cn(
                  "w-full px-6 py-3 rounded-lg",
                  "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700",
                  "text-white font-medium",
                  "flex items-center justify-center gap-2",
                  "transition-all duration-200",
                  formState === 'loading' && "cursor-not-allowed opacity-70"
                )}
              >
               
               {formState === 'loading' ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

              {/* Form Status Messages */}
              <AnimatePresence mode="wait">
                {formState === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 text-purple-600 dark:text-purple-400"
                  >
                    <CheckCircle className="w-5 h-5" />
                    <span>Message sent successfully!</span>
                  </motion.div>
                )}

                {formState === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 text-red-600 dark:text-red-400"
                  >
                    <AlertCircle className="w-5 h-5" />
                    <span>Please complete the verification.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>

        {/* FAQ Section */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="mt-16"
>
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    className="mb-16 text-center space-y-4"
  >
    <motion.h2
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="text-4xl md:text-5xl font-bold text-black dark:text-white"
    >
      Frequently Asked Questions
    </motion.h2>
  </motion.div>

  <div className="max-w-2xl mx-auto space-y-4">
    {contactInfo.faqs.map((faq) => (
      <motion.div
        key={faq.question}
        initial={false}
        animate={{ backgroundColor: expandedFAQ === faq.question ? 'rgba(147, 197, 253, 0.1)' : 'transparent' }}
        className="rounded-lg overflow-hidden shadow-md transition-shadow duration-200"
      >
        <button
          onClick={() => setExpandedFAQ(expandedFAQ === faq.question ? null : faq.question)}
          className={cn(
            "w-full px-6 py-4 text-left",
            "flex items-center justify-between",
            "hover:bg-blue-50 dark:hover:bg-gray-800",
            "transition-colors duration-200 focus:outline-none"
          )}
          aria-expanded={expandedFAQ === faq.question}
          aria-controls={`faq-answer-${faq.question.replace(/\s+/g, '-').toLowerCase()}`}
        >
          <span className="font-medium text-gray-700 dark:text-gray-300">
            {faq.question}
          </span>
          <ChevronDown
            className={cn(
              "w-5 h-5 text-gray-500 transition-transform duration-200",
              expandedFAQ === faq.question && "transform rotate-180"
            )}
          />
        </button>
        <AnimatePresence initial={false}>
          {expandedFAQ === faq.question && (
            <motion.div
              id={`faq-answer-${faq.question.replace(/\s+/g, '-').toLowerCase()}`}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="px-6 py-4 text-gray-600 dark:text-gray-400">
                {faq.answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    ))}
 
          </div>
        </motion.div>
      </div>
    </section>
  );
};