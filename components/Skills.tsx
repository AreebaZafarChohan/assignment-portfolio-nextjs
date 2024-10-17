import React from "react";
import { skills } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Skills = () => {
  return (
    <section id="skills" className="pt-20">
      <h1 className="heading">
        Technical and Soft
        <span className="text-purple"> Skills</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={skills}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;