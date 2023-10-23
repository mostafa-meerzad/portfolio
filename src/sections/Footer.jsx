import { socialMediaLinks } from "../data";

const Footer = () => {
  return (
    <section className="container pt-8 pb-4 bg-slightly-dark-gray text-center">
      <h2 className="text-3xl ">Contact</h2>
      <p className="text-gray-300">
        I would love to hear about your project and how i could help.
      </p>

      <ul className="flex justify-center items-center gap-4 mt-8 mb-4">
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
