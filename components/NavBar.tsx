import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

const NavBar: NextPage<{
  links: { route: string; text: string; icon?: any }[];
}> = ({ links }) => {
  const Router = useRouter();

  const activeClass = "text-blue-600";

  return (
    <nav className="flex-grow  flex justify-evenly items-center ">
      {links.map((link, index) => (
        <Link href={link.route} key={index}>
          <a
            className={`text-white flex  p-2 items-center rounded-3xl text-xl 
${link.route === Router.pathname ? activeClass : ""}`}
          >
            {link.text}
            {link.icon ? link.icon : null}
          </a>
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
