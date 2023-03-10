import { Link, useLocation } from "@remix-run/react";

export default function Navbar() {
  const { pathname } = useLocation();
  return (
    <div className="flex gap-4 items-center justify-center sticky top-0 z-50 bg-zinc-800 py-4 opacity-75">
      <Link
        to={"/"}
        className={`${pathname === "/" && "font-bold text-green-400"}`}
      >
        Home
      </Link>
      <Link
        to={"/tech"}
        className={`${
          pathname.includes("/tech") && "font-bold text-green-400"
        }`}
      >
        Tech
      </Link>
      <a
        href={"https://github.com/bangsyir?tab=repositories"}
        target="_blank"
        rel="noreferrer"
        className={`${pathname === "/projects" && "font-bold text-green-400"}`}
      >
        Repositories
      </a>
      <Link
        to={"/blogs"}
        className={`${pathname === "/blogs" && "font-bold text-green-400"}`}
      >
        Blog
      </Link>
      <Link
        to={"/about"}
        className={`${pathname === "/about" && "font-bold text-green-400"}`}
      >
        About
      </Link>
    </div>
  );
}
