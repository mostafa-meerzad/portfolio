import { socialMediaLinks } from "../data";

const Footer = () => {
  return (
    <section className="wrapper pt-8 pb-4 bg-slightly-dark-gray text-center md:text-start relative">
      <h2 className="text-3xl ">Contact</h2>
      <p className="text-gray-300 md:max-w-sm">
        I would love to hear about your project and how i could help.
      </p>

      <ul className="flex justify-center items-center gap-4 mt-8 mb-4 md:absolute md:right-12 bottom-0 md:top-0 md:gap-8">
        {socialMediaLinks.map(({ name, img, url }) => (
          <li key={name}>
            <a href={url}>
              <img src={img} alt={name} className="w-8" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Footer;
