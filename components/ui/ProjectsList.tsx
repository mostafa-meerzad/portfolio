import React from "react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";
import Image from "next/image";
import { projects } from "@/app/constants/constants";

const ProjectsList = ({ limit }: { limit?: number }) => {
  return (
    <ul className="flex flex-col gap-8">
      {projects
        .slice(0, limit)
        .map(({ name, description, github, img, preview, technologies }, i) => {
          const isEven = i % 2 === 0;

          const imageClasses = `
        w-full h-[300px] md:h-[400px] lg:h-[340px] object-cover rounded-lg
        ${
          isEven
            ? "lg:col-start-2 lg:row-start-1 lg:row-end-3" // image on right
            : "lg:col-start-1 lg:row-start-1 lg:row-end-3"
        } // image on left
      `;

          const contentCol = isEven ? "lg:col-start-1" : "lg:col-start-2";

          return (
            <li key={name}>
              <Card className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-[0.5fr_1fr] p-3 pt-6 sm:p-4 sm:pt-8 md:p-6 md:pt-8 lg:p-5  lg:gap-8 background">
                <CardHeader
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
                </CardHeader>

                <CardContent
                  className={`flex flex-col items-center gap-5 ${contentCol} lg:row-start-2 max-sm:p-0`}
                >
                  <p className="text-center lg:text-start">{description}</p>
                  <CardAction className="flex justify-center gap-10 w-full my-3 lg:justify-start">
                    <Link href={github}>
                      <Button>
                        {" "}
                        <FaGithub /> View Github
                      </Button>
                    </Link>
                    <Link href={preview}>
                      <Button>
                        {" "}
                        <MdOutlineArrowOutward /> View project
                      </Button>
                    </Link>
                  </CardAction>
                </CardContent>

                <Image
                  aria-label="card-image"
                  alt={name}
                  src={img}
                  className={imageClasses}
                />
              </Card>
            </li>
          );
        })}
    </ul>
  );
};

export default ProjectsList;
