"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Award, BookOpen, Briefcase, GraduationCap, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-sky-50 py-12">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl font-bold text-teal-800 mb-8 text-center"
          variants={fadeIn}
          initial="initial"
          animate="animate"
        >
          About Victoria McKenna
        </motion.h1>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            className="md:col-span-2"
            variants={fadeIn}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-teal-700">
                  My Story
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  With over a decade of experience in direct response
                  copywriting, I've honed my skills in crafting compelling
                  narratives that drive action. My journey began in the
                  fast-paced world of digital marketing agencies, where I
                  quickly realized the power of words in converting prospects
                  into loyal customers.
                </p>
                <p className="mb-4">
                  Throughout my career, I've had the privilege of working with a
                  diverse range of clients, from scrappy startups to Fortune 500
                  companies. This varied experience has given me a unique
                  perspective on how to tailor messaging to different audiences
                  and industries.
                </p>
                <p>
                  My passion lies in helping businesses connect with their
                  audience on a deeper level. I believe that great copy doesn't
                  just sell a product or service – it tells a story, solves a
                  problem, and creates a lasting relationship between brand and
                  consumer.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.4 }}
          >
            <Card className="bg-teal-700 text-white">
              <CardHeader>
                <CardTitle className="text-2xl">Quick Facts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Briefcase className="mr-2" />
                  <span>10+ years in copywriting</span>
                </div>
                <div className="flex items-center">
                  <Users className="mr-2" />
                  <span>200+ satisfied clients</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="mr-2" />
                  <span>1000+ projects completed</span>
                </div>
                <div className="flex items-center">
                  <GraduationCap className="mr-2" />
                  <span>MA in Communications</span>
                </div>
                <div className="flex items-center">
                  <Award className="mr-2" />
                  <span>3x Copywriting Award Winner</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          className="mt-12"
          variants={fadeIn}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-teal-800 mb-6">
            Areas of Expertise
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Email Marketing",
              "Landing Pages",
              "Ad Copy",
              "Product Descriptions",
              "Sales Letters",
              "Website Copy",
              "Social Media Content",
              "Video Scripts",
            ].map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-sm">
                {skill}
              </Badge>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-12 grid md:grid-cols-2 gap-8"
          variants={fadeIn}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.8 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-teal-700">
                My Approach
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Deep dive into your brand and target audience</li>
                <li>Thorough market and competitor research</li>
                <li>Crafting compelling hooks and headlines</li>
                <li>Storytelling that resonates with your audience</li>
                <li>Data-driven optimization for maximum conversions</li>
                <li>Continuous testing and refinement</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-teal-700">
                Industries Served
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>E-commerce and Retail</li>
                <li>SaaS and Technology</li>
                <li>Health and Wellness</li>
                <li>Finance and Fintech</li>
                <li>Education and E-learning</li>
                <li>Travel and Hospitality</li>
                <li>Non-profit and Charity</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          variants={fadeIn}
          initial="initial"
          animate="animate"
          transition={{ delay: 1 }}
        >
          <h2 className="text-3xl font-bold text-teal-800 mb-6">
            Let's Create Something Amazing Together
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Ready to take your copy to the next level? Let's collaborate and
            craft messages that truly resonate with your audience and drive
            results.
          </p>
          <Button className="bg-teal-600 hover:bg-teal-700 text-white transition-colors">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </motion.div>

        <motion.div
          className="mt-16 flex justify-center"
          variants={fadeIn}
          initial="initial"
          animate="animate"
          transition={{ delay: 1.2 }}
        >
          <Image
            src="/avatar.png"
            alt="Victoria McKenna"
            width={200}
            height={200}
            className="rounded-full border-4 border-teal-600 shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  );
}
