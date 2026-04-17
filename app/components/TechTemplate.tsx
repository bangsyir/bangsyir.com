import { Link } from "@remix-run/react";
import type { ReactNode } from "react";
import { ArrowLeftIcon } from "./icon/icon";

export default function TechTemplate({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  return (
    <>
      <Link to={"/tech"}>
        <div className="flex gap-2 items-center  mb-4 border border-zinc-700 p-2 rounded-md hover:border-zinc-600 hover:bg-zinc-700 w-2/4 md:w-1/4">
          <ArrowLeftIcon className="h-6 w-6" />
          <span>
            Back to <b>tech</b>
          </span>
        </div>
        <h1 className="text-xl text-left md:text-center">{title}</h1>
      </Link>
      <div className="text-left md:text-center">{children}</div>
    </>
  );
}
