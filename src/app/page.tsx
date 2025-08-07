"use client";

import Aurora from "@/components/Aurora";
import ContactForm from "@/components/ContactForm";
import MagicBento from "@/components/MagicBento";
import { Button } from "@/components/ui/button";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Briefcase,
  Calendar,
  CheckCircle2,
  Code,
  CreditCard,
  Database,
  Github,
  Globe,
  GraduationCap,
  LineChart,
  Linkedin,
  Lock,
  Mail,
  MessageSquare,
  Wallet
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const openContactForm = () => setIsContactFormOpen(true);
  const closeContactForm = () => setIsContactFormOpen(false);

  const skillsCards = [
    {
      title: "Frontend Development",
      description:
        "Building responsive, interactive user interfaces with React, TypeScript, and modern CSS frameworks.",
      label: "UI/UX",
      icon: <CreditCard className="h-6 w-6 text-cyan-400" />,
      color: "rgba(255, 255, 255, 0.05)",
      gradient:
        "linear-gradient(135deg, rgba(34, 211, 238, 0.1) 0%, rgba(34, 211, 238, 0.05) 100%)",
    },
    {
      title: "Backend Development",
      description:
        "Scalable server architectures using Node.js, databases, APIs, and cloud infrastructure.",
      label: "Server",
      icon: <LineChart className="h-6 w-6 text-violet-400" />,
      color: "rgba(255, 255, 255, 0.05)",
      gradient:
        "linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(139, 92, 246, 0.05) 100%)",
    },
    {
      title: "Problem Solving",
      description:
        "Analytical thinking and creative solutions to complex technical challenges and user experience problems.",
      label: "Logic",
      icon: <Lock className="h-6 w-6 text-cyan-400" />,
      color: "rgba(255, 255, 255, 0.05)",
      gradient:
        "linear-gradient(135deg, rgba(34, 211, 238, 0.1) 0%, rgba(34, 211, 238, 0.05) 100%)",
    },
  ];

  const projectsCards = [
    {
      title: "E-Commerce Platform",
      description:
        "Modern e-commerce solution with React, Node.js, and Stripe integration.",
      label: "Full Stack",
      icon: <Globe className="h-6 w-6 text-cyan-400" />,
      color: "rgba(255, 255, 255, 0.05)",
      gradient:
        "linear-gradient(135deg, rgba(34, 211, 238, 0.1) 0%, rgba(139, 92, 246, 0.05) 100%)",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management with real-time updates and team features.",
      label: "Frontend",
      icon: <Briefcase className="h-6 w-6 text-violet-400" />,
      color: "rgba(255, 255, 255, 0.05)",
      gradient:
        "linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(34, 211, 238, 0.05) 100%)",
    },
    {
      title: "Weather API Service",
      description:
        "RESTful API service with weather data aggregation and caching.",
      label: "API",
      icon: <Database className="h-6 w-6 text-cyan-400" />,
      color: "rgba(255, 255, 255, 0.05)",
      gradient:
        "linear-gradient(135deg, rgba(34, 211, 238, 0.1) 0%, rgba(139, 92, 246, 0.05) 100%)",
    },
  ];

  const testimonialsCards = [
    {
      title: "Exceptional Platform",
      description:
        "Suman delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise made the project a huge success.",
      label: "Sarah Johnson",
      icon: <MessageSquare className="h-6 w-6 text-cyan-400" />,
      color: "rgba(255, 255, 255, 0.05)",
      gradient:
        "linear-gradient(135deg, rgba(34, 211, 238, 0.1) 0%, rgba(34, 211, 238, 0.05) 100%)",
    },
    {
      title: "Great Communicator",
      description:
        "Working with Suman was a pleasure. He&apos;s not just a skilled developer but also a great communicator who understands business requirements.",
      label: "Mike Chen",
      icon: <MessageSquare className="h-6 w-6 text-violet-400" />,
      color: "rgba(255, 255, 255, 0.05)",
      gradient:
        "linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(139, 92, 246, 0.05) 100%)",
    },
    {
      title: "Outstanding Code Quality",
      description:
        "Suman's code quality is outstanding. He writes clean, maintainable code and always follows best practices. A true professional.",
      label: "Alex Rodriguez",
      icon: <MessageSquare className="h-6 w-6 text-cyan-400" />,
      color: "rgba(255, 255, 255, 0.05)",
      gradient:
        "linear-gradient(135deg, rgba(34, 211, 238, 0.1) 0%, rgba(34, 211, 238, 0.05) 100%)",
    },
  ];

  const educationCards = [
    {
      title: "Bachelor's in Computer Science",
      description:
        "Focused on software engineering, data structures, and web technologies. Completed senior project on distributed systems.",
      label: "University of Technology",
      icon: <GraduationCap className="h-6 w-6 text-cyan-400" />,
      color: "rgba(255, 255, 255, 0.05)",
      gradient:
        "linear-gradient(135deg, rgba(34, 211, 238, 0.1) 0%, rgba(34, 211, 238, 0.05) 100%)",
    },
    {
      title: "AWS Certified Developer",
      description:
        "Demonstrated expertise in developing and maintaining applications on AWS platform.",
      label: "Amazon Web Services",
      icon: <Award className="h-6 w-6 text-violet-400" />,
      color: "rgba(255, 255, 255, 0.05)",
      gradient:
        "linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(139, 92, 246, 0.05) 100%)",
    },
  ];

  const blogCards = [
    {
      title: "Building Scalable React Applications with TypeScript",
      description:
        "Learn how to structure large React applications using TypeScript for better maintainability and developer experience.",
      label: "React",
      icon: <Code className="h-6 w-6 text-cyan-400" />,
      color: "rgba(255, 255, 255, 0.05)",
      gradient:
        "linear-gradient(135deg, rgba(34, 211, 238, 0.1) 0%, rgba(139, 92, 246, 0.05) 100%)",
    },
    {
      title: "Optimizing Node.js Performance for Production",
      description:
        "Best practices for deploying Node.js applications with optimal performance and security in production environments.",
      label: "Node.js",
      icon: <Database className="h-6 w-6 text-violet-400" />,
      color: "rgba(255, 255, 255, 0.05)",
      gradient:
        "linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(34, 211, 238, 0.05) 100%)",
    },
    {
      title: "My Journey from Junior to Senior Developer",
      description:
        "Reflections on growth, challenges, and lessons learned during my career progression in software development.",
      label: "Career",
      icon: <Briefcase className="h-6 w-6 text-cyan-400" />,
      color: "rgba(255, 255, 255, 0.05)",
      gradient:
        "linear-gradient(135deg, rgba(34, 211, 238, 0.1) 0%, rgba(34, 211, 238, 0.05) 100%)",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link className="flex items-center space-x-2 font-bold" href="/">
            <Wallet className="h-6 w-6 text-cyan-400" />
            <span>D_a_r_k_l_o_v_3</span>
          </Link>
          <nav className="hidden space-x-6 md:flex">
            <Link
              className="text-sm hover:text-cyan-400 transition-colors"
              href="#about"
            >
              About
            </Link>
            <Link
              className="text-sm hover:text-cyan-400 transition-colors"
              href="#skills"
            >
              Skills
            </Link>
            <Link
              className="text-sm hover:text-cyan-400 transition-colors"
              href="#projects"
            >
              Projects
            </Link>
            <Link
              className="text-sm hover:text-cyan-400 transition-colors"
              href="#experience"
            >
              Experience
            </Link>
            <Link
              className="text-sm hover:text-cyan-400 transition-colors"
              href="#contact"
            >
              Contact
            </Link>
          </nav>
          <Button
            onClick={openContactForm}
            className="bg-gradient-to-r from-cyan-400 to-violet-500 px-3 py-2 text-sm text-black hover:from-cyan-500 hover:to-violet-600 sm:px-4 sm:text-base"
          >
            Contact
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
        {/* Aurora Background */}
        <div className="absolute inset-0 z-[1]">
          <Aurora
            colorStops={["#22d3ee", "#8b5cf6", "#22d3ee"]}
            blend={0.5}
            amplitude={1.0}
            speed={0.5}
          />
        </div>

        {/* Content */}
        <div className="container relative z-[3] mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mx-auto max-w-4xl space-y-6 sm:space-y-8"
          >
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Full-Stack Developer & Creative Innovator
            </h1>
            <p className="mx-auto max-w-2xl text-base text-gray-400 sm:text-lg md:text-xl">
              Crafting digital experiences with modern technologies. Specialized
              in React, Node.js, and cloud solutions that bring ideas to life.
            </p>
            <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button className="bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-3 text-base text-black hover:from-cyan-500 hover:to-violet-600 sm:text-lg">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <a
                href="https://drive.google.com/file/d/1mHdj_CGc2X_aGz1XZAu9Ecb8LzB9795d/view?usp=drive_link"
                download target="_blank"
                className="border border-white/10 px-6 py-1.5 text-base text-white hover:bg-white/10 sm:text-lg rounded-md transition-colors inline-block"
              >
                Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Me Section */}
      <section
        id="about"
        className="relative z-10 border-t border-white/10 bg-black py-16 sm:py-20 lg:py-24"
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl mb-6">
                About Me
              </h2>
              <div className="space-y-4 text-gray-400">
                <p className="text-base sm:text-lg">
                  I&apos;m a passionate full-stack developer with over 3 years
                  of experience building web applications that solve real-world
                  problems. I love working with modern technologies and am
                  always eager to learn new tools and frameworks.
                </p>
                <p className="text-base sm:text-lg">
                  My journey started with curiosity about how websites work,
                  which led me to dive deep into both frontend and backend
                  development. I enjoy the entire development process, from
                  ideation and design to deployment and optimization.
                </p>
                <p className="text-base sm:text-lg">
                  When I&apos;m not coding, you can find me exploring new
                  technologies, contributing to open source projects, or sharing
                  knowledge with the developer community.
                </p>
              </div>
              <div className="mt-8">
                {/* <Button className="bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-3 text-black hover:from-cyan-500 hover:to-violet-600">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button> */}
                <a
                href="https://drive.google.com/file/d/1mHdj_CGc2X_aGz1XZAu9Ecb8LzB9795d/view?usp=drive_link"
                download target="_blank"
                className="rounded-md bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-3 text-black hover:from-cyan-500 hover:to-violet-600 border-rounded-md"
              >
                Download CV
              </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <Code className="h-6 w-6 text-cyan-400" />
                    <span className="text-lg font-semibold">
                      3+ Years Experience
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="h-6 w-6 text-violet-400" />
                    <span className="text-lg font-semibold">
                      15+ Projects Delivered
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-6 w-6 text-cyan-400" />
                    <span className="text-lg font-semibold">
                      Clean Code Advocate
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="relative z-10 border-t border-white/10 bg-black py-16 sm:py-20 lg:py-24"
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 text-center sm:mb-16"
          >
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
              Skills & Tech Stack
            </h2>
            <p className="mt-4 text-base text-gray-400 sm:text-lg">
              Technologies I work with daily
            </p>
          </motion.div>
          <MagicBento
            cards={skillsCards}
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={12}
            glowColor="34, 211, 238"
          />
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="relative z-10 border-t border-white/10 bg-black py-16 sm:py-20 lg:py-24"
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 text-center sm:mb-16"
          >
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
              Featured Projects
            </h2>
            <p className="mt-4 text-base text-gray-400 sm:text-lg">
              Some of my recent work that I&apos;m proud of
            </p>
          </motion.div>
          <MagicBento
            cards={projectsCards}
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={12}
            glowColor="139, 92, 246"
          />
          <div className="mt-12 text-center">
            <Button
              variant="outline"
              className="border-white/10 px-6 py-3 text-white hover:bg-white/10"
            >
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="relative z-10 border-t border-white/10 bg-black py-16 sm:py-20 lg:py-24"
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center sm:mb-16">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
              Experience
            </h2>
            <p className="mt-4 text-base text-gray-400 sm:text-lg">
              My professional journey
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-cyan-400 to-violet-500 sm:left-8" />

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative pl-12 pb-12 sm:pl-20"
              >
                <div className="absolute left-2 top-0 h-4 w-4 rounded-full bg-cyan-400 sm:left-6" />
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold">
                        Senior Full Stack Developer
                      </h3>
                      <p className="text-cyan-400">TechCorp Solutions</p>
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Calendar className="mr-2 h-4 w-4" />
                      2022 - Present
                    </div>
                  </div>
                  <p className="text-gray-400 mb-4">
                    Led development of multiple client projects using React,
                    Node.js, and cloud technologies. Mentored junior developers
                    and implemented best practices across the team.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-cyan-400/20 px-3 py-1 text-xs text-cyan-300">
                      React
                    </span>
                    <span className="rounded-full bg-violet-400/20 px-3 py-1 text-xs text-violet-300">
                      Node.js
                    </span>
                    <span className="rounded-full bg-cyan-400/20 px-3 py-1 text-xs text-cyan-300">
                      AWS
                    </span>
                    <span className="rounded-full bg-violet-400/20 px-3 py-1 text-xs text-violet-300">
                      TypeScript
                    </span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative pl-12 pb-12 sm:pl-20"
              >
                <div className="absolute left-2 top-0 h-4 w-4 rounded-full bg-violet-400 sm:left-6" />
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold">Frontend Developer</h3>
                      <p className="text-violet-400">StartupXYZ</p>
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Calendar className="mr-2 h-4 w-4" />
                      2021 - 2022
                    </div>
                  </div>
                  <p className="text-gray-400 mb-4">
                    Developed responsive web applications and improved user
                    experience for B2B SaaS platform. Collaborated with design
                    team to implement pixel-perfect UIs.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-violet-400/20 px-3 py-1 text-xs text-violet-300">
                      React
                    </span>
                    <span className="rounded-full bg-cyan-400/20 px-3 py-1 text-xs text-cyan-300">
                      JavaScript
                    </span>
                    <span className="rounded-full bg-violet-400/20 px-3 py-1 text-xs text-violet-300">
                      CSS
                    </span>
                    <span className="rounded-full bg-cyan-400/20 px-3 py-1 text-xs text-cyan-300">
                      Figma
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="relative z-10 border-t border-white/10 bg-black py-16 sm:py-20 lg:py-24"
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 text-center sm:mb-16"
          >
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
              Education
            </h2>
            <p className="mt-4 text-base text-gray-400 sm:text-lg">
              Academic background and certifications
            </p>
          </motion.div>
          <MagicBento
            cards={educationCards}
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={12}
            glowColor="139, 92, 246"
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="relative z-10 border-t border-white/10 bg-black py-16 sm:py-20 lg:py-24"
      >
        {/* <div
          style={{ position: "absolute", height: "500px", overflow: "hidden" }}
        >
          <RippleGrid
            enableRainbow={false}
            gridColor="#000060"
            rippleIntensity={0.05}
            gridSize={10}
            gridThickness={55}
            mouseInteraction={true}
            mouseInteractionRadius={1.2}
            opacity={0.8}
            z-index={999}
          />
        </div> */}
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 text-center sm:mb-16"
          >
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
              Testimonials
            </h2>
            <p className="mt-4 text-base text-gray-400 sm:text-lg">
              What clients and colleagues say
            </p>
          </motion.div>
          <MagicBento
            cards={testimonialsCards}
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={12}
            glowColor="34, 211, 238"
          />
        </div>
      </section>

      {/* Blog Section */}
      <section
        id="blog"
        className="relative z-10 border-t border-white/10 bg-black py-16 sm:py-20 lg:py-24"
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 text-center sm:mb-16"
          >
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
              Latest Articles
            </h2>
            <p className="mt-4 text-base text-gray-400 sm:text-lg">
              Thoughts on development, technology, and more
            </p>
          </motion.div>
          <MagicBento
            cards={blogCards}
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={12}
            glowColor="34, 211, 238"
          />
          <div className="mt-12 text-center">
            <Button
              variant="outline"
              className="border-white/10 px-6 py-3 text-white hover:bg-white/10"
            >
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative z-10 border-t border-white/10 bg-black py-16 sm:py-20 lg:py-24"
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center sm:mb-16">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
              Let&apos;s Work Together
            </h2>
            <p className="mt-4 text-base text-gray-400 sm:text-lg">
              Ready to bring your ideas to life? Let&apos;s discuss your next
              project.
            </p>
          </div>
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-cyan-950/50 to-violet-950/50 p-8 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="rounded-full bg-cyan-400/20 p-3">
                      <Mail className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <Link
                        href="mailto:suman.sathiaseelan@gmail.com"
                        className="text-cyan-400 hover:text-cyan-300"
                      >
                        suman.sathiaseelan@gmail.com
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="rounded-full bg-violet-400/20 p-3">
                      <svg
                        className="h-6 w-6 text-violet-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <Link
                        href="tel:+919047597303"
                        className="text-violet-400 hover:text-violet-300"
                      >
                        +91 9047597303
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="rounded-full bg-violet-400/20 p-3">
                      <Linkedin className="h-6 w-6 text-violet-400" />
                    </div>
                    <div>
                      <p className="font-semibold">LinkedIn</p>
                      <Link
                        href="https://www.linkedin.com/in/suman-s-fd/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-violet-400 hover:text-violet-300"
                      >
                        linkedin.com/in/suman-s-fd
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="rounded-full bg-cyan-400/20 p-3">
                      <Github className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div>
                      <p className="font-semibold">GitHub</p>
                      <Link
                        href="https://github.com/Suman-seelan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300"
                      >
                        github.com/Suman-seelan
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-6">Why Work With Me?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-cyan-400 mt-0.5" />
                    <div>
                      <p className="font-semibold">Clean, Maintainable Code</p>
                      <p className="text-sm text-gray-400">
                        Following best practices and industry standards
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-violet-400 mt-0.5" />
                    <div>
                      <p className="font-semibold">Fast Communication</p>
                      <p className="text-sm text-gray-400">
                        Regular updates and transparent progress tracking
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-cyan-400 mt-0.5" />
                    <div>
                      <p className="font-semibold">Modern Tech Stack</p>
                      <p className="text-sm text-gray-400">
                        Using the latest tools and technologies
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-violet-400 mt-0.5" />
                    <div>
                      <p className="font-semibold">Long-term Partnership</p>
                      <p className="text-sm text-gray-400">
                        Ongoing support and maintenance after delivery
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="mt-8">
                  <Button
                    onClick={openContactForm}
                    className="w-full bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-3 text-black hover:from-cyan-500 hover:to-violet-600"
                  >
                    Start a Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black py-6 sm:py-8">
        <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between space-y-4 px-4 sm:px-6 md:flex-row md:space-y-0 lg:px-8">
          <div className="flex items-center space-x-2">
            <Wallet className="h-5 w-5 text-cyan-400 sm:h-6 sm:w-6" />
            <span className="font-bold">D_a_r_k_l_o_v_3</span>
          </div>
          <p className="text-xs text-gray-400 sm:text-sm">
            © 2025 D_a_r_k_l_o_v_3. All rights reserved.
          </p>
          <div className="flex space-x-4 sm:space-x-6">
            <Link
              className="text-xs text-gray-400 hover:text-cyan-400 sm:text-sm"
              href="https://www.linkedin.com/in/suman-s-fd/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
            <Link
              className="text-xs text-gray-400 hover:text-cyan-400 sm:text-sm"
              href="https://github.com/Suman-seelan"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
          </div>
        </div>
      </footer>

      {/* Contact Form Popup */}
      <ContactForm isOpen={isContactFormOpen} onClose={closeContactForm} />

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </div>
  );
}
