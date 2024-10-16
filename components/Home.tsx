"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { motion, useAnimation } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  FileText,
  Globe,
  Mail,
  MessageCircle,
  MessageSquare,
  Newspaper,
  Pen,
  Phone,
  X,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const FloatingShape = ({
  children,
  initialX,
  initialY,
}: {
  children: React.ReactNode;
  initialX: number;
  initialY: number;
}) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: [initialX, initialX + 10, initialX - 10, initialX],
      y: [initialY, initialY - 10, initialY + 10, initialY],
      transition: {
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      },
    });
  }, [controls, initialX, initialY]);

  return (
    <motion.div
      className="absolute text-teal-200 opacity-20"
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

export function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-sky-50 overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <FloatingShape initialX={50} initialY={100}>
          <Pen className="w-16 h-16" />
        </FloatingShape>
        <FloatingShape initialX={200} initialY={300}>
          <FileText className="w-24 h-24" />
        </FloatingShape>
        <FloatingShape
          initialX={typeof window !== "undefined" ? window.innerWidth - 100 : 0}
          initialY={200}
        >
          <Newspaper className="w-20 h-20" />
        </FloatingShape>
        <FloatingShape
          initialX={typeof window !== "undefined" ? window.innerWidth - 250 : 0}
          initialY={400}
        >
          <Globe className="w-32 h-32" />
        </FloatingShape>
      </div>

      <motion.header
        className="relative bg-teal-600 text-white overflow-hidden py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div
              className="mb-8 md:mb-0 text-center md:text-left"
              variants={fadeIn}
              initial="initial"
              animate="animate"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                Victoria McKenna
              </h1>
              <p className="text-xl md:text-2xl text-teal-100">
                Direct Response Copywriting Specialist
              </p>
            </motion.div>
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              <Image
                src="/avatar.png"
                alt="Victoria McKenna"
                width={200}
                height={200}
                className="rounded-full border-4 border-white shadow-lg"
              />
            </motion.div>
          </div>
          <motion.p
            className="mt-8 text-center md:text-left text-lg md:text-xl max-w-2xl"
            variants={fadeIn}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.4 }}
          >
            Crafting compelling copy that pulls your prospects across the finish
            line & closes the sale
          </motion.p>
        </div>
        <svg
          className="absolute bottom-0 w-full h-16 text-teal-50"
          viewBox="0 0 1440 64"
          preserveAspectRatio="none"
        >
          <path fill="currentColor" d="M0,64L1440,0L1440,64L0,64Z"></path>
        </svg>
      </motion.header>

      <main className="container mx-auto px-4">
        <motion.section
          className="my-32"
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-teal-800 mb-12">
            My Expertise
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Pen,
                title: "Focused Content",
                description:
                  "Strategic, tailored content that engages your audience and drives measurable results.",
              },
              {
                icon: FileText,
                title: "Press Releases",
                description:
                  "Impactful press releases that capture media attention and enhance your brand visibility.",
              },
              {
                icon: Newspaper,
                title: "Editorial Services",
                description:
                  "Professional editing and content curation to elevate your publications.",
              },
              {
                icon: Globe,
                title: "Website Copy",
                description:
                  "Persuasive, SEO-optimized website copy that converts visitors into loyal customers.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold flex items-center text-teal-700">
                      <item.icon className="mr-2" />
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="my-32"
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-teal-800 mb-12">
            Why Work With Me?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Results-Driven Approach",
                description:
                  "I focus on creating copy that not only engages but also converts, driving real business results.",
              },
              {
                title: "Industry Expertise",
                description:
                  "With years of experience in direct response marketing, I bring valuable insights to your projects.",
              },
              {
                title: "Tailored Solutions",
                description:
                  "I create customized strategies that align perfectly with your unique business goals and target audience.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-teal-100 rounded-full p-3 inline-block mb-4">
                  <ArrowRight className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-teal-700">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="bg-white p-8 rounded-lg shadow-lg my-32"
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-teal-800 mb-6 text-center">
            Ready to Elevate Your Content?
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Let&apos;s collaborate to create content that not only speaks to
            your audience but also drives tangible business growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="bg-teal-600 hover:bg-teal-700 text-white transition-colors">
              <Phone className="mr-2 h-4 w-4" />
              Schedule a Call
            </Button>
            <Button
              variant="outline"
              className="border-teal-600 text-teal-600 hover:bg-teal-50 transition-colors"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Send a Message
            </Button>
          </div>
        </motion.section>

        <motion.section
          className="my-32"
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-teal-800 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                question: "What is direct response copywriting?",
                answer:
                  "Direct response copywriting is a type of writing that aims to compel the reader to take immediate action, such as making a purchase, signing up for a newsletter, or requesting more information.",
              },
              {
                question: "How can your services benefit my business?",
                answer:
                  "My services can help increase your conversion rates, improve customer engagement, and ultimately drive more sales by creating compelling, targeted content that speaks directly to your audience's needs and desires.",
              },
              {
                question: "What industries do you work with?",
                answer:
                  "I have experience working with a wide range of industries, including e-commerce, SaaS, health and wellness, finance, and more. My approach is adaptable to various sectors and business models.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader
                    className="cursor-pointer flex flex-row items-center justify-between"
                    onClick={() =>
                      setExpandedFaq(expandedFaq === index ? null : index)
                    }
                  >
                    <CardTitle>{item.question}</CardTitle>
                    <ChevronDown
                      className={`h-5 w-5 transition-transform ${
                        expandedFaq === index ? "transform rotate-180" : ""
                      }`}
                    />
                  </CardHeader>
                  {expandedFaq === index && (
                    <CardContent>
                      <p>{item.answer}</p>
                    </CardContent>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="my-32"
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-teal-800 mb-8 text-center">
            Stay Informed
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to my newsletter for the latest insights on direct
            response copywriting and content strategy.
          </p>
          <form className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Input
              type="email"
              placeholder="Enter your email"
              className="max-w-sm bg-white"
              aria-label="Email for  newsletter"
            />
            <Button
              type="submit"
              className="bg-teal-600 hover:bg-teal-700 text-white transition-colors"
            >
              <Mail className="mr-2 h-4 w-4" />
              Subscribe
            </Button>
          </form>
        </motion.section>
      </main>

      {/* Chatbot Icon */}
      <motion.div
        className="fixed bottom-4 right-4 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
      >
        <Button
          className="bg-teal-600 hover:bg-teal-700 text-white rounded-full p-3 shadow-lg transition-colors"
          onClick={() => setIsChatOpen(!isChatOpen)}
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      </motion.div>

      {/* Chat Message Box */}
      {isChatOpen && (
        <motion.div
          className="fixed bottom-20 right-4 bg-white rounded-lg shadow-xl p-4 w-80 z-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-teal-800">Chat with Victoria</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsChatOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="h-40 overflow-y-auto mb-4 bg-gray-50 p-2 rounded">
            <p className="text-gray-600">Hello! How can I help you today?</p>
          </div>
          <div className="flex">
            <Input placeholder="Type your message..." className="mr-2" />
            <Button className="bg-teal-600 hover:bg-teal-700 text-white transition-colors">
              Send
            </Button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
