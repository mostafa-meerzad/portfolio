import { socialMediaLinks } from "../data";

const Footer = () => {
  return (
    <section className="flex flex-col items-center text-center gap-8 px-4 py-8 ">
      <div>
        <h2 className="text-3xl ">Contact</h2>
        <p className="mt-2">
          I would love to hear about your project and how i could help.
        </p>
      </div>

      <ul className="flex gap-8">
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
