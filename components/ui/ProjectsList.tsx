import { projects } from "@/app/constants/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Easing, LazyMotion, domAnimation, m as motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";

const easing = [0.25, 0.8, 0.25, 1] as Easing;

const ProjectsList = ({ limit }: { limit?: number }) => {
  return (
    <LazyMotion features={domAnimation}>
      <ul className="flex flex-col gap-8">
        {projects
          .slice(0, limit)
          .map(
            ({ name, description, github, desktopImg, mobileImg, preview, technologies }, i) => {
              const isEven = i % 2 === 0;

              const imageClasses = `
              w-full h-[500px] md:h-[420px] lg:h-[400px] object-cover rounded-lg
              ${
                isEven
                  ? "lg:col-start-2 lg:row-start-1 lg:row-end-3"
                  : "lg:col-start-1 lg:row-start-1 lg:row-end-3"
              }
            `;

              const contentCol = isEven ? "lg:col-start-1" : "lg:col-start-2";

              return (
                <motion.li
                  key={name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: easing, delay: i * 0.15 }}
                  className="hover:scale-[1.015] transition-transform duration-300 ease-out hover:shadow-lg background rounded-2xl "
                >
                  <Card className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-[0.5fr_1fr] p-3 pt-6 sm:p-4 sm:pt-8 md:p-6 md:pt-8 lg:p-5  lg:gap-8 items-center bg-inherit">
                    {/* Title + Tech */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2, ease: easing }}
                      viewport={{ once: true }}
                      className={`w-full flex flex-col items-center ${contentCol} lg:row-start-1 lg:items-start lg:self-end max-sm:px-0`}
                    >
                      <h3 className="text-2xl font-semibold mb-2">{name}</h3>
                      <ul className="flex gap-2 flex-wrap">
                        {technologies.map((tech) => (
                          <li key={tech}>
                            <Badge variant={"secondary"}>{tech}</Badge>
                          </li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* Description + Buttons */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4, ease: easing }}
                      viewport={{ once: true }}
                      className={`flex flex-col items-center gap-5 ${contentCol} lg:row-start-2 max-sm:p-0`}
                    >
                      <p className="text-center text lg:text-start">
                        {description}
                      </p>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.6, ease: easing }}
                        viewport={{ once: true }}
                        className="flex justify-center gap-10 w-full my-3 lg:justify-start"
                      >
                        <Link href={github} target="_blank">
                          <Button>
                            <FaGithub /> View Github
                          </Button>
                        </Link>
                        <Link href={preview} target="_blank">
                          <Button>
                            <MdOutlineArrowOutward /> View project
                          </Button>
                        </Link>
                      </motion.div>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.3, ease: easing }}
                      viewport={{ once: true }}
                      className={imageClasses}
                    >
                      <Image
                        width={800}
                        height={800}
                        placeholder="blur"
                        aria-label="card-image"
                        alt={name}
                        src={desktopImg}
                        className="w-full h-full object-cover object-top-left rounded-lg hidden sm:block sm:object-center"
                      />
                      <Image
                        width={400}
                        height={400}
                        placeholder="blur"
                        aria-label="card-image"
                        alt={name}
                        src={mobileImg}
                        className="w-full h-full object-cover object-top rounded-lg sm:hidden"
                      />
                    </motion.div>
                  </Card>
                </motion.li>
              );
            }
          )}
      </ul>
    </LazyMotion>
  );
};

export default ProjectsList;
