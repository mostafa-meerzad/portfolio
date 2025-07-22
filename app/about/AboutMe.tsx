"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Easing, LazyMotion, domAnimation, m as motion } from "framer-motion";
import Image from "next/image";
import avatarPlaceHolder from "../../public/avatar-bg-pattern.png";

// Animations
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as Easing,
    },
  },
};

const AboutMe = () => {
  return (
    <LazyMotion features={domAnimation}>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-[0.7fr_1fr] items-center gap-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={container}
      >
        {/* Image Section */}
        <motion.div
          variants={fadeInUp}
          className="col-start-1 col-end-3 md:col-end-2"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <Image
              alt="mostafa"
              src={avatarPlaceHolder}
              className="w-full h-[300px] md:h-[300px] lg:h-[400px] border object-cover rounded-xl"
            />
          </motion.div>
        </motion.div>

        {/* Text Card Section */}
        <motion.div
          className="col-start-1 col-end-3 md:col-start-2 h-full"
          variants={fadeInUp}
        >
          <Card className="h-full background">
            <CardContent className="h-full flex flex-col justify-center">
              <motion.div
                className="text text-center md:text-start"
                variants={container}
              >
                <motion.span
                  variants={fadeInUp}
                  className="block text-4xl mb-4"
                >
                  <span className="block">Hey! I’m</span>
                  <span className="font-bold block text-5xl text-primary">
                    Mostafa Meerzad
                  </span>
                </motion.span>
                <motion.p
                  variants={fadeInUp}
                  className="text-lg leading-relaxed"
                >
                  a self-taught full-stack developer based in Kabul.
                </motion.p>
                <motion.p
                  variants={fadeInUp}
                  className="mt-2 text-base text-muted-foreground"
                >
                  After overcoming adversity, I found purpose in technology.
                </motion.p>
                <motion.p
                  variants={fadeInUp}
                  className="mt-2 text-base text-muted-foreground"
                >
                  I now build web apps with modern tools like Next.js, Prisma, and TypeScript.
                </motion.p>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </LazyMotion>
  );
};

export default AboutMe;
