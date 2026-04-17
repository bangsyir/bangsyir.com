export default function Nav() {
  return (
    <nav className="p-2">
      <div id="logo" className="flex gap-4 items-center justify-end">
        <div>Follow me : </div>
        <a
          href="https://instagram.com/teahaliasuam"
          target="_blank"
          aria-label="link to instagram"
          rel="noreferrer"
        >
          <img src="/instagram.svg" className="h-5 w-5" alt="" />
        </a>
        <a
          href="https://www.facebook.com/abcdefghijklmnopkrstuvwxyz1234567890"
          target="_blank"
          aria-label="link to facebook"
          rel="noreferrer"
        >
          <img src="/facebook.svg" className="h-5 w-5" alt="" />
        </a>
        <a
          href="https://twitter.com/bangsyir"
          target="_blank"
          aria-label="link to twitter"
          rel="noreferrer"
        >
          <img src="/twitter.svg" className="h-5 w-5" alt="" />
        </a>
        <a
          href="https://www.linkedin.com/in/syirra-fitrah-763672193/"
          target="_blank"
          aria-label="link to linkedin"
          rel="noreferrer"
        >
          <img src="/linkedin.svg" className="h-5 w-5" alt="" />
        </a>
        <a
          href="https://github.com/bangsyir"
          target="_blank"
          aria-label="link to github"
          rel="noreferrer"
        >
          <img src="/github.svg" className="h-5 w-5" alt="" />
        </a>
      </div>
    </nav>
  );
}
