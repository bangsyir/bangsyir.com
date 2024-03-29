import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { initializer } from "./config/app";
import styles from "./styles/app.css";
import { Analytics } from "@vercel/analytics/react";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: initializer.appTitle,
  description: initializer.desc,
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Analytics />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
