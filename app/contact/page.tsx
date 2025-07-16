import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ContactForm from "./ContactForm";
import { socialMedia } from "../constants/constants";
import Link from "next/link";

const ContactPage = () => {
  return (
    <section className="text-center my-10 flex flex-col gap-12">
      <h2 className="h2 sm:px-8">Let’s Build Something Great Together</h2>
      <Card className=" background grid lg:grid-cols-[0.9fr_1fr] xl:grid-cols-[0.6fr_1fr] gap-4 items-center lg:gap-2 xl:gap-8">
        <CardHeader>
          <p className="lg:col-start-1 lg:col-end-2  text-lg lg:text-start lg:text-2xl lg:mt-4 leading-relaxed ">
            <span className="block text-3xl lg:text-4xl font-semibold lg:mb-4 mb-2">
              <span className="lg:block">Have a</span> project in mind?
            </span>
            <span className="block lg:mb-2">
              {" "}
              Got feedback or{" "}
              <span className="font-semibold text-3xl">opportunities?</span>
            </span>{" "}
            <span className="block mx-5 sm:mx-0">
              Drop me a <span className="font-semibold">message</span> — I’ll
              get back to you as soon as I can.
            </span>
          </p>
        </CardHeader>
        <CardContent className=" lg:col-start-2 lg:col-end-3">
          <ContactForm />
        </CardContent>
      </Card>
      <h2 className="h2"> Connect with me on social media:</h2>{" "}
      <ul className="flex flex-wrap justify-around  md:justify-center  gap-5 lg:gap-8 lg:max-w-3xl mx-auto px-5 md:px-0">
        {socialMedia.map(
          ({ Img, hover, href, opts: { ariaLabel, rel, target }, big }) => {
            return (
              <li
                key={href}
                className={`border rounded-xl background py-5 px-5 sm:px-8 md:px-5 w-40 ${
                  big && "w-full md:w-[45%]"
                }`}
              >
                <Link
                  target={target}
                  rel={rel}
                  aria-label={ariaLabel}
                  href={href}
                  className="flex  items-center justify-center gap-2"
                >
                  <Img className="size-9" />
                  <p>{hover}</p>
                </Link>
              </li>
            );
          }
        )}
      </ul>
    </section>
  );
};

export default ContactPage;
