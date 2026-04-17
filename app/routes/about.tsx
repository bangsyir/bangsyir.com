import Layout from "~/components/Layout";

export default function AboutPage() {
  return (
    <Layout>
      <div className="flex justify-center pb-4">
        <img
          src="/profile.png"
          width={300}
          height={300}
          className="drop-shadow-lg shadow-slate-50"
          alt=""
        />
      </div>
      <h1 className="text-xl">Hi, I’m Syir. Nice to meet you.</h1>
      <hr className="my-1 border-t border-zinc-700" />
      <p className="text-justify indent-10">
        My name is Syirra Fitrah bin Ahmad, you can call me
        syir/bosyir/bangsyir. As a full-stack web programmer with expertise in
        Node.js, i have a strong foundation in both front-end and back-end
        technologies, allowing you to build complete web applications from start
        to finish. I'm skilled in using the Node.js runtime to build efficient
        and scalable back-end systems, and i'm a good understanding of web
        development principles such as security, performance, and accessibility.
        also familiar with front-end technologies such as HTML, CSS, and
        JavaScript, and able to use these technologies to build responsive and
        user-friendly interfaces. I'm experience working with frameworks and
        libraries such as React, Nextjs, Remix, and comfortable using them to
        speed up development and streamline the process of building web
        applications. With my skills and experience, i'm able to deliver
        high-quality web applications that provide a seamless and engaging user
        experience to users.
      </p>
      <div className="pt-4 text-left">
        <p>Contact me:</p>
        <p>
          Email:{" "}
          <a
            href="mailto: bangsyir@proton.me"
            target="_blank"
            aria-label="link to telegram"
            rel="noreferrer"
            className="font-bold"
          >
            bangsyir@proton.me
          </a>{" "}
        </p>
        <p>
          Telegram:{" "}
          <a
            href="https://t.me/Bangsyir"
            target="_blank"
            aria-label="link to telegram"
            rel="noreferrer"
            className="font-bold"
          >
            bangsyir
          </a>
        </p>
      </div>
    </Layout>
  );
}
