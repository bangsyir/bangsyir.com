export default function Footer() {
  const now = new Date();
  const year = now.getFullYear();
  return (
    <footer className="container mx-auto px-4 pb-4 mt-auto">
      <hr className="border-t border-zinc-600 my-2" />
      <p className="flex items-center justify-center">
        © {year} Bangsyirr. All rights reserved. Build with ❤️
      </p>
    </footer>
  );
}
