import TechTemplate from "~/components/TechTemplate";

export default function NextjsPage() {
  return (
    <TechTemplate title="Nextjs">
      <p className="py-4">
        Many features provided by Nextjs for web development. Especially in
        font-end development, it's ready to use.
      </p>
      <p className="py-4">
        Go to{" "}
        <a
          href="https://nextjs.org/"
          target="_blank"
          rel="noreferrer"
          className="font-bold"
        >
          NextJs Page.
        </a>
      </p>
    </TechTemplate>
  );
}
