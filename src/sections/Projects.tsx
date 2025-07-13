import darkSaasLandingPage from "@/assets/images/car.png";
import lightSaasLandingPage from "@/assets/images/biquadris.png";
import aiStartupLandingPage from "@/assets/images/winning.png";
import Image from "next/image";
import ArrawUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "March",
    year: "2025",
    title: "Car Dealership Full-Stack Application",
    results: [
      { title: "Car Dealership Website: React frontend; Django + SQLite backend." },
      { title: "Dealership and reviews service (Express.js + MongoDB + Docker) for serving dealer listings and customer reviews via RESTful APIs." },
      { title: "Customer sentiment analyzer microservice hosted on IBM Cloud Code Engine" },
      { title: "CI/CD pipeline: GitHub Actions; App Deployment: Kubernetes." },
    ],
    link: "https://github.com/KunalSachdev2005/Car_Dealership_Full_Stack_Application",
    image: darkSaasLandingPage,
  },
  {
    company: "October",
    year: "2022",
    title: "Winning the Space Race with Data Science",
    results: [
      { title: "ML pipeline to predict Falcon 9 first-stage landing success" },
      { title: "Data Collection and EDA: IBM Db2, SpaceX API, BeautifulSoup" },
      { title: "Interactive Web Dasboards/Maps: Plotly, Dash, Folium" },
      { title: "Hyperparaemter Tuning: Decision Tree - 87.5% accuracy" },
    ],
    link: "https://github.com/KunalSachdev2005/Winning_the_Space_Race_with_Data_Science",
    image: aiStartupLandingPage,
  },
  {
    company: "December",
    year: "2024",
    title: "Biquadris",
    results: [
      { title: "C++ implementation of popular block-dropping game Tetris, enhanced with a unique 'biquadris' mode." },
      { title: "Turn-based gameplay, level progression, and special block abilities." },
      { title: "Object-oriented patterns (Factory Method, Observer) for modularity, extensibility, and polymorphic behavior." },
      { title: "Textual and XWindows graphical interfaces." },
    ],
    link: "https://github.com/KunalSachdev2005/Biquadris",
    image: lightSaasLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 md:mb-40 sm:mb-40 lg:py-24 lg:mb-0">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">Exploring Technologies</p>
        </div>
        <h1 className="font-serif text-3xl md:text-5xl text-center mt-6">Featured Projects</h1>
        <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
          Constantly learning, experimenting, and evolving with every line of code.
        </p>
        <div className="flex flex-col mt-10 gap-20 md:mt-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 lg:sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="inline-flex gap-2 uppercase font-bold tracking-widest text-sm bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5"/>
                  <ul className="flex flex-col gap-4 mt-4 list-disc pl-5">
                    {project.results.map((result, resultIndex) =>(
                      <li key={resultIndex} className="text-sm md:text-base text-white/50">
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <button className="bg-white text-gray-950 h-12 rounded-xl w-full md:w-auto px-6 font-semibold
                    inline-flex items-center justify-center gap-2 mt-8">
                      <span>GitHub</span>
                      <ArrawUpRightIcon className="size-4"/>
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
