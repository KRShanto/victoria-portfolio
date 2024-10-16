"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Zap,
  Target,
  PenTool,
  Megaphone,
  BarChart,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const services = [
  {
    title: "Direct Response Copywriting",
    description:
      "Persuasive copy that compels your audience to take immediate action.",
    icon: Zap,
    features: ["Email campaigns", "Sales letters", "Landing pages", "Ad copy"],
    cta: "Boost Conversions Now",
  },
  {
    title: "Content Strategy",
    description:
      "Comprehensive content plans aligned with your business goals.",
    icon: Target,
    features: [
      "Audience analysis",
      "Content calendars",
      "SEO optimization",
      "Brand voice development",
    ],
    cta: "Craft Your Strategy",
  },
  {
    title: "Website Copywriting",
    description: "Engaging web copy that tells your story and drives results.",
    icon: PenTool,
    features: [
      "Homepage copy",
      "About pages",
      "Product descriptions",
      "Service pages",
    ],
    cta: "Elevate Your Web Presence",
  },
  {
    title: "Brand Messaging",
    description:
      "Develop a consistent and compelling brand voice across all channels.",
    icon: Megaphone,
    features: [
      "Brand story",
      "Taglines",
      "Mission statements",
      "Value propositions",
    ],
    cta: "Define Your Brand",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-sky-50 py-12">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl font-bold text-teal-800 mb-4 text-center"
          variants={fadeIn}
          initial="initial"
          animate="animate"
        >
          My Services
        </motion.h1>
        <motion.p
          className="text-xl text-gray-600 mb-12 text-center max-w-2xl mx-auto"
          variants={fadeIn}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.2 }}
        >
          Elevate your brand with compelling copy that drives action and
          delivers results.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeIn}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.2 * (index + 1) }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <service.icon className="h-8 w-8 text-teal-600" />
                    <Badge variant="secondary">Popular</Badge>
                  </div>
                  <CardTitle className="text-2xl text-teal-700">
                    {service.title}
                  </CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-teal-500 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white transition-colors">
                    {service.cta}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16"
          variants={fadeIn}
          initial="initial"
          animate="animate"
          transition={{ delay: 1 }}
        >
          <Card className="bg-teal-700 text-white">
            <CardHeader>
              <CardTitle className="text-2xl">
                Why Choose My Services?
              </CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-3 gap-4">
              <div className="flex items-start">
                <BarChart className="h-6 w-6 mr-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Data-Driven Approach</h3>
                  <p className="text-teal-100">
                    Copy optimized based on analytics and user behavior.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Target className="h-6 w-6 mr-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Targeted Messaging</h3>
                  <p className="text-teal-100">
                    Tailored content that resonates with your specific audience.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Zap className="h-6 w-6 mr-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Quick Turnaround</h3>
                  <p className="text-teal-100">
                    Efficient process to deliver high-quality copy on time.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          variants={fadeIn}
          initial="initial"
          animate="animate"
          transition={{ delay: 1.2 }}
        >
          <h2 className="text-3xl font-bold text-teal-800 mb-4">
            Ready to Transform Your Copy?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's work together to create compelling content that drives
            engagement and boosts your bottom line.
          </p>
          <Button className="bg-teal-600 hover:bg-teal-700 text-white transition-colors text-lg px-8 py-6">
            Schedule a Consultation
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
