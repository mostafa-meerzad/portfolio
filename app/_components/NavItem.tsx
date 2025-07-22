import Link from "next/link";

const NavItem = ({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description: string;
}) => {
  return (
    <Link href={href} className="block p-3 hover:bg-zinc-600/10 dark:hover:bg-zinc-800 rounded-lg">
      <div className="text-lg font-medium">{title}</div>
      <div className="text-sm text-muted-foreground">{description}</div>
    </Link>
  );
};
export default NavItem;
