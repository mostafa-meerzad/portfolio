import Link from "next/link";

const Name = () => {
  return (
    <Link href={"/"}>
      <p className="leading-7 [&:not(:first-child)]:mt-6">Mostafa Meerzad</p>
    </Link>
  );
};
export default Name;
