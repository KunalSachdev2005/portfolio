import StarIcon from "@/assets/icons/star.svg"
import { Fragment } from "react";

const words = [
  "Curious",
  "Data Scientist",
  "Proactive",
  "Software Developer",
  "Adaptable",
  "Machine Learning Engineer",
  "Resilient",
  "Confident",
  "Problem Solver",
  "Full-Stack Developer",
];

export const TapeSection = () => {
  return (
    <div className="sm:pt-10 md:pt-5 lg:pt-8 py-13 pb-16 lg:py-16 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 pr-4 py-3 animate-move-left [animation-duration:30s]">
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
              {words.map((word) => (
                <div key={word} className="inline-flex gap-4">
                  <span className="text-gray-900 uppercase text-sm font-extrabold">{word}</span>
                  <StarIcon className="size-6 text-gray-900 -rotate-12" />
                </div>
              ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
};
