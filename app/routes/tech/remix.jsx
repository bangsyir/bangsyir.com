import TechTemplate from "../../components/TechTemplate";

export default function RemixPage() {
  return (
    <TechTemplate title="Remix">
      <p className="py-4">
        Remix is a full stack web framework that lets you focus on the user
        interface and work back through web standards to deliver a fast, slick,
        and resilient user experience. People are gonna love using your stuff. -{" "}
        <a
          href="https://remix.run"
          target="_blank"
          rel="noreferrer"
          className="font-bold text-blue-500"
        >
          Remix website
        </a>
      </p>
      <p className="py-4">
        I start learn remix because no need to much using useState hook, and
        remix also use amazing nested routing.
      </p>
    </TechTemplate>
  );
}
