import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import Navbar from "./Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="container mx-auto px-4 text-center pb-6">
        <Nav />
        <Navbar />
        {children}
      </div>
      <Footer />
    </>
  );
}
