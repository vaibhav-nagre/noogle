import Link from "next/link";
export default function About() {
  return (
    <div className=" flex flex-col w-full md:flex-row-reverse h-full items-center gap-x-10 gap-y-10 justify-center pb-10 md:pb-0">
      <div className="flex flex-col font-ropaSans w-4/5 md:w-2/5 lg:w-1/3 font-bold text-md text-white gap-y-4">
        <h2 className="text-accent-text opacity-70">Vaibhav Nagre</h2>
        <h2>
          I'm a Computer Science student who loves building
          things for humans.
        </h2>

        <h2>
          I'm advanced in{" "}
          <span className="text-[#DED7FC] italic ">
            Java and Python blending expertise in identity management with software development
          </span>{" "}
          as well as a mastery of turning designs into code. My most epic skillset lies in the fact that I consistently push the boundaries of coventional thinking to turn my ambitious visions into reality.
        </h2>

        <h2>
          Currently, I’m working as a Sr. IAM Engineer at {" "}
          <span className="text-[#DED7FC] hover:opacity-70  transform transition-all duration-300">
            <Link href={"https://www.saviynt.com"} target={"_blank"}>
              Saviynt Inc.
            </Link>
          </span>{" "}
          , a leading cybersecurity product company{" "}
        </h2>

        <h2>
          I previously worked for a startup, SeeFoodApp, where I was part of the core team responsible for building the complete web application from scratch.
        </h2>

        <h2>
          I love chasing after unique experiences and jumping off (imaginary)
          cliffs to test my skills.
        </h2>

        <Link
          href="/search?q=nagre-projects"
          className="border border-[#DED7FC] flex flex-row w-full items-center justify-center rounded-md p-4 hover:bg-[#DED7FC] hover:text-dark-purple-100 transform transition-all duration-300"
        >
          discover my career rollercoaster
        </Link>
      </div>
      <div className="flex md:flex-col-reverse items-center justify-start">
        <div
          className="bg-no-repeat bg-cover w-32 h-32 md:w-48 md:h-48"
          style={{ backgroundImage: `url("head-shot.png")` }}
        />
      </div>
    </div>
  );
}