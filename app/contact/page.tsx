"use client";

import { CardContent, CardHeader } from "@/components/ui/card";
import { LazyMotion, domAnimation, easeOut, m as motion } from "framer-motion";
import ContactForm from "./ContactForm";
import SocialMedia from "./SocialMedia";

// Animation Variants
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

const ContactPage = () => {
  return (
    <LazyMotion features={domAnimation}>
      <motion.section
        className="text-center my-10 flex flex-col gap-12"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={container}
      >
        <motion.h2 variants={fadeInUp} className="h2 sm:px-8">
          Let’s Build Something Great Together
        </motion.h2>

        <motion.div
          variants={fadeInUp}
          className="background grid lg:grid-cols-[0.9fr_1fr] xl:grid-cols-[0.6fr_1fr] gap-4 items-center lg:gap-2 xl:gap-8 rounded-xl p-4"
        >
          <motion.div variants={fadeInUp}>
            <CardHeader>
              <motion.p
                variants={container}
                className="text-lg lg:text-start lg:text-2xl leading-relaxed"
              >
                <motion.span
                  variants={fadeInUp}
                  className="block text-3xl lg:text-4xl font-semibold mb-2 lg:mb-4"
                >
                  <span className="lg:block">Have a</span> project in mind?
                </motion.span>
                <motion.span variants={fadeInUp} className="block lg:mb-2">
                  Got feedback or{" "}
                  <span className="font-semibold text-3xl">opportunities?</span>
                </motion.span>
                <motion.span variants={fadeInUp} className="block mx-5 sm:mx-0">
                  Drop me a <span className="font-semibold">message</span> — I’ll get back to you as soon as I can.
                </motion.span>
              </motion.p>
            </CardHeader>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <CardContent className="lg:col-start-2 lg:col-end-3">
              <ContactForm />
            </CardContent>
          </motion.div>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <SocialMedia />
        </motion.div>
      </motion.section>
    </LazyMotion>
  );
};

export default ContactPage;
