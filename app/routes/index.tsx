import type { MetaFunction } from "@remix-run/node";
import Typed from "react-typed";
import { GlobeAsiaAustraliaIcon } from "~/components/icon/icon";
import Layout from "~/components/Layout";
import { initializer } from "~/config/app";

export const meta: MetaFunction = () => ({
  "og:type": "website",
  "og:url": "https://bangsyir.vercel.app",
  "og:site_name": "bangsyir",
  "og:title": initializer.appTitle,
  "og:description": initializer.desc,
  "og:image": "https://bangsyir.vercel.app/meta-image.jpg",
  "og:image:width": "500",
  "og:image:height": "500",
  "twitter:card": "summary_large_image",
  "twitter:url": "https://bangsyir.vercel.app",
  "twitter:title": initializer.appTitle,
  "twitter:description": initializer.desc,
  "twitter:image": "https://bangsyir.vercel.app/public/img/meta-image.jpg",
});

export default function Index() {
  const string = [
    `<span className="text-green-700">pnpm</span> <span> run dev</span>`,
  ];

  return (
    <Layout>
      <div className="leading-none pt-10 text-center">
        <div className="text-3xl uppercase">
          I'm a full-Stack <span className="text-green-400">Web</span> Developer
        </div>
        <small>Find the problem, and give them a solution.</small>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
        {/* linux terminal */}
        <div className="border border-zinc-600 rounded-md p-2 text-left text-sm shadow-md shadow-zinc-700 mt-6 hover:border-zinc-500">
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
              <span className="text-green-400">bangsyir</span>
              <span className="text-zinc-400"> in </span>
              <span className="text-blue-400">ubuntu</span>
              <span className="text-zinc-400"> at </span>
              <span className="text-yellow-600">
                {" "}
                ~/projects/code/bangsyir.com{" "}
              </span>
            </div>
            <div>
              <span> $ </span>
              <span className="text-green-400">ls</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4">
              <span className="text-blue-400">app</span>
              <span>package.json</span>
              <span>README.md</span>
              <span className="text-blue-400">styles</span>
              <span className="text-blue-400">build</span>
              <span>pnpm-lock.yml</span>
              <span>remix-config.js</span>
              <span>tailwind.config.js</span>
              <span className="text-blue-400">node_modules</span>
              <span>public</span>
              <span>remix-env.d.ts</span>
              <span>tsconfig.json</span>
            </div>
            <div>
              <span className="text-green-400">bangsyir</span>
              <span className="text-zinc-400"> in </span>
              <span className="text-blue-400">ubuntu</span>
              <span className="text-zinc-400"> at </span>
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
      <div className="pt-8">
        <h2 className="font-bold text-xl">Projects</h2>
        <hr className="my-4 border-zinc-600" />
        <div className="container mx-auto md:px-32">
          <p className="pb-4 text-gray-300">
            The last few years, I almost use nodejs in every build an web
            application. started exploring nodejs since 2019. I learned because
            nodejs one of the most widely used technologies for server-side
            programming. Here are some projects i used nodejs to build apps.
          </p>
        </div>
        <div className="grid md:grid-cols-2 justify-center lg:grid-cols-4 gap-4">
          <a
            href="https://github.com/bangsyir/rm-next-reactquery"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={
                "https://github-readme-stats.vercel.app/api/pin/?username=bangsyir&repo=rm-next-reactquery&theme=gruvbox"
              }
              alt="rm-repo"
            />
          </a>
          <a
            href="https://github.com/bangsyir/notes-with-graphql"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://github-readme-stats.vercel.app/api/pin/?username=bangsyir&repo=notes-with-graphql&theme=gruvbox"
              alt="graphql-repo"
            />
          </a>
          <a
            href="https://github.com/bangsyir/bangsyir.com"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://github-readme-stats.vercel.app/api/pin/?username=bangsyir&repo=bangsyir.com&theme=gruvbox"
              alt="bangsyir.com"
            />
          </a>
          <a href="https://belihub.com" target="_blank" rel="noreferrer">
            <div className="border border-gray-100 border- rounded-md p-4 text-left">
              <p className="font-bold text-md text-amber-400 flex gap-2 items-center">
                <GlobeAsiaAustraliaIcon className="h-5 w-5 text-amber-600" />
                <span>Belihub.com</span>
              </p>
              <p className="mt-2 text-lime-300 text-xs">
                👨🏻‍💻 Product management & e-commerce solution.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="bg-green-600 w-3 h-3 rounded-full"></div>
                <span className="text-sm text-lime-300">Javascript</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </Layout>
  );
}
