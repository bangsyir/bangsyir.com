export default function Footer() {
  const now = new Date();
  const year = now.getFullYear();
  return (
    <footer className="container mx-auto px-4 pb-4 mt-auto">
      <hr className="border-t border-zinc-600 my-2" />
      <p className="flex flex-wrap items-center justify-center">
        © {year}. All rights reserved. Build with ❤️ by&nbsp;
        <a
          href="https://github.com/bangsyir"
          className="text-green-500 font-bold"
          target="_blank"
          rel="noreferrer"
        >
          Bangsyir
        </a>
      </p>
    </footer>
  );
}
