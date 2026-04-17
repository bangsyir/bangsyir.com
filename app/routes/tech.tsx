import { Outlet } from "@remix-run/react";
import Layout from "~/components/Layout";

export default function Tech() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
