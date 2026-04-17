import { BookmarkIcon, ExclamationCircleIcon } from "~/components/icon/icon";
import React from "react";
import { Link } from "@remix-run/react";

const Card = ({
  children,
  redirect,
}: {
  children: React.ReactNode;
  redirect?: string;
}) => {
  const Icon = () => (
    <div className="absolute top-2 right-1 cursor-pointer">
      <BookmarkIcon className="h-5 w-5" />
    </div>
  );
  return (
    <div className="border border-zinc-700 p-2 rounded-md py-4 shadow hover:shadow-zinc-600 hover:bg-zinc-700 relative">
      {redirect && (
        <Link to={redirect}>
          <Icon />
        </Link>
      )}
      {children}
    </div>
  );
};

export default function TechIndex() {
  return (
    <>
      <div className="bg-zinc-900 opacity-75 rounded-md p-2 flex gap-2 shadow shadow-zinc-800">
        <ExclamationCircleIcon className="h-5 w-5" />
        <span className="text-left">
          part of the stack below, I don't master it 100%
        </span>
      </div>
      <h2 className="text-lg text-left font-semibold pb-2 pt-4">Front-End</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center items-center">
        <Card redirect="/tech/reactjs">
          <div>Reactjs</div>
        </Card>
        <Card redirect="/tech/remix">
          <div>Remix</div>
        </Card>
        <Card redirect="/tech/nextjs">
          <div>Nextjs</div>
        </Card>
        <Card>
          <div>Vue</div>
        </Card>
        <Card>
          <div>Nuxt</div>
        </Card>
        <Card>
          <div>Tailwindcss</div>
        </Card>
        <Card>
          <div>Bootstrap</div>
        </Card>
      </div>

      <h2 className="text-lg text-left font-semibold pb-2 pt-4">Back-End</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center items-center">
        <Card>
          <div>ExpressJs</div>
        </Card>
        <Card>
          <div>Laravel (php)</div>
        </Card>
        <Card>
          <div>Go (fiber/gin)</div>
        </Card>
      </div>
      <h2 className="text-lg text-left font-semibold pb-2 pt-4">Language</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center items-center">
        <Card>
          <div>Js/Ts</div>
        </Card>
        <Card>
          <div>PHP</div>
        </Card>
        <Card>
          <div>Go</div>
        </Card>
      </div>
      <h2 className="text-lg text-left font-semibold pb-2 pt-4">Database</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center items-center">
        <Card>
          <div>Mysql/MariaDb</div>
        </Card>
        <Card>
          <div>Postgresql</div>
        </Card>
        <Card>
          <div>Mongodb</div>
        </Card>
      </div>
      <h2 className="text-lg text-left font-semibold pb-2 pt-4">
        Mockup/Design
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center items-center">
        <Card>Figma</Card>
        <Card>Inkscape</Card>
        <Card>GIMP</Card>
        <Card>Adobe Illustrator</Card>
        <Card>Adobe Photoshop</Card>
      </div>
      <h2 className="text-lg text-left font-semibold pb-2 pt-4">Others</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center items-center">
        <Card>Docker</Card>
        <Card>Git/Github</Card>
        <Card>Linux</Card>
      </div>
    </>
  );
}
