import type { MetaFunction } from "@remix-run/node";
import Typed from "react-typed";
import Layout from "~/components/Layout";
import { initializer } from "~/config/app";

export const meta: MetaFunction = () => ({
  "og:type": "website",
  "og:url": "https://bangsyir.vercel.app",
  "og:site_name": "bangsyir",
  "og:title": initializer.appTitle,
  "og:description": initializer.desc,
  "og:image": "https://bangsyir.vercel.app/profile.png",
  "og:image:width": "500",
  "og:image:height": "500",
  "twitter:card": "summary_large_image",
  "twitter:url": "https://bangsyir.vercel.app",
  "twitter:title": initializer.appTitle,
  "twitter:description": initializer.desc,
  "twitter:image": "https://bangsyir.vercel.app/public/img/profile.png",
});

export default function Index() {
  const string = [
    '<span className="text-green-700">pnpm</span> <span> run dev</span>',
  ];

  return (
    <Layout>
      <div className="leading-none pt-10 text-left md:text-center">
        <div className="text-3xl uppercase">
          Full-Stack <span className="text-green-400">Web</span> Developer
        </div>
        <small>Find the problem, and solve it with the code.</small>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
        <img
          src="/profile.png"
          className="drop-shadow-lg shadow-slate-50"
          alt=""
        />
        {/* linux terminal */}
        <div className="border border-zinc-600 rounded-md p-2 text-left text-sm shadow-md shadow-zinc-700 mt-6">
          <div className="flex items-center justify-between">
            <div className="mx-auto">Terminal - bangsyir.com projects</div>
            <div className="flex gap-2">
              <div className="bg-orange-600 rounded-full w-3 h-3"></div>
              <div className="bg-green-600 rounded-full w-3 h-3"></div>
              <div className="bg-red-600 rounded-full w-3 h-3"></div>
            </div>
          </div>
          <hr className="border-t border-zinc-600 my-2" />
          <div className="font-mono">
            <div>
              <span className="text-green-600">bangsyir</span>
              <span className="text-zinc-600"> in </span>
              <span className="text-blue-600">ubuntu</span>
              <span className="text-zinc-600"> at </span>
              <span className="text-yellow-600">
                {" "}
                ~/projects/code/bangsyir.com{" "}
              </span>
            </div>
            <div>
              <span> $ </span>
              <span className="text-green-700">ls</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4">
              <span className="text-blue-500">app</span>
              <span>package.json</span>
              <span>README.md</span>
              <span className="text-blue-500">styles</span>
              <span className="text-blue-500">build</span>
              <span>pnpm-lock.yml</span>
              <span>remix-config.js</span>
              <span>tailwind.config.js</span>
              <span className="text-blue-500">node_modules</span>
              <span>public</span>
              <span>remix-env.d.ts</span>
              <span>tsconfig.json</span>
            </div>
            <div>
              <span className="text-green-600">bangsyir</span>
              <span className="text-zinc-600"> in </span>
              <span className="text-blue-600">ubuntu</span>
              <span className="text-zinc-600"> at </span>
              <span className="text-yellow-600">
                {" "}
                ~/projects/code/bangsyir.com{" "}
              </span>
            </div>
            <div>
              <span> $ </span>
              <Typed strings={string} typeSpeed={100} />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 border border-zinc-700 rounded-md p-4">
        <h1 className="text-xl">Hi, I’m Syir. Nice to meet you.</h1>
        <hr className="my-1 border-t border-zinc-700" />
        <p className="text-justify indent-8">
          My name is Syirra Fitrah bin Ahmad. I am from Kuala Lumpur. Always
          interested on webdevelopment. Capable of the fields of full stack web
          development (back-end & front-end) and photography. Also i am always
          interested in solving problems, creative thinking and business.
        </p>
        <p className="text-justify indent-8">
          I started to know programming and design when I was in high school
          (2011). That was the first time I knew html, css and how to operate
          coreldraw. At the end of the year in high school, i became interested
          in learning about web programming and until now.
        </p>
      </div>
    </Layout>
  );
}
