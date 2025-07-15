import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ContactForm from "./ContactForm";

const ContactPage = () => {
  return (
    <section className="text-center my-10 ">
      <h2 className="text-4xl font-bold mb-16">
        Let’s Build Something Great Together
      </h2>
      <Card className=" dark:bg-zinc-900/20 grid lg:grid-cols-[0.9fr_1fr] xl:grid-cols-[0.6fr_1fr] gap-4 items-center lg:gap-2 xl:gap-8">
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
    </section>
  );
};

export default ContactPage;
