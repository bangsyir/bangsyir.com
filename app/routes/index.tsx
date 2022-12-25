import type { MetaFunction } from "@remix-run/node";
import React from "react";
import Typed from "react-typed";

export const meta: MetaFunction = () => ({
  "og:type": "website",
  "og:url": "https://bangsyir.vercel.app",
  "og:site_name": "bangsyir",
  "og:title": "Bangsyir - happy coding",
  "og:description": "Build web app with hands not with passion.",
  "og:image": "https://bangsyir.vercel.app/profile.png",
  "og:image:width": "500",
  "og:image:height": "500",
  "twitter:card": "summary_large_image",
  "twitter:url": "https://bangsyir.vercel.app",
  "twitter:title": "Bangsyir - happy coding",
  "twitter:description": "Build web app with hands not with passion.",
  "twitter:image": "https://bangsyir.vercel.app/public/img/profile.png",
});

export default function Index() {
  const string = [
    '<span className="text-green-700">pnpm</span> <span> run dev</span>',
  ];

  return (
    <>
      <div className="container mx-auto px-4 text-center">
        <nav className="p-2">
          <div id="logo" className="flex gap-4 items-center justify-end">
            <div>Follow me : </div>
            <a href="https://instagram.com/teahaliasuam">
              <img src="/instagram.svg" className="h-5 w-5" alt="" />
            </a>
            <a href="https://www.facebook.com/abcdefghijklmnopkrstuvwxyz1234567890">
              <img src="/facebook.svg" className="h-5 w-5" alt="" />
            </a>
            <a href="https://twitter.com/bangsyir">
              <img src="/twitter.svg" className="h-5 w-5" alt="" />
            </a>
            <a href="https://www.linkedin.com/in/syirra-fitrah-763672193/">
              <img src="/linkedin.svg" className="h-5 w-5" alt="" />
            </a>
            <a href="https://github.com/bangsyir">
              <img src="/github.svg" className="h-5 w-5" alt="" />
            </a>
          </div>
        </nav>
        <div className="leading-none pt-10">
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
          <div className="border border-zinc-600 rounded-md p-2 text-left text-sm shadow-md shadow-zinc-700 mb-6">
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
      </div>
    </>
  );
}
