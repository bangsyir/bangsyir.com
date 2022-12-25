export default function Nav() {
  return (
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
  );
}
