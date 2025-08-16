'use client';

import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import edelweissLogo from "@/assets/images/edelweiss3.jpg";
import infoOriginLogo from "@/assets/images/infoorigin1.jpeg";
import hdfcLogo from "@/assets/images/hdfc.png";
import { Card } from "@/components/Card";
import { motion } from 'framer-motion';
import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useEffect, useState } from 'react';


const experiences = [
  {
  company: "Edelweiss Life Insurance",
  title: "GenAI Engineer Intern",
  date: "May 2025 - Aug 2025",
  year: "2025",
  location: "Mumbai, India",
  width: 200,
  height: 200,
  logo: edelweissLogo,
  projects: [
    {
      title: "GenAI-powered Business Insights and Visualization",
      bullets: [
        "Built a serverless RAG app on AWS Bedrock (Claude 3.5 Sonnet) enabling real-time conversational access to AWS Data Lake, replacing 200+ static BI dashboards and enabling Rs. 300,000+ in estimated annual operational cost savings.",
        "Engineered Lambda functions for query validation, Redshift schema extraction, OpenSearch retrieval, and LLM inference; achieved 99% API uptime and reduced 8,700+ annual emails per user via automation.",
        "Boosted SQL generation accuracy by 28% using Cohere embeddings + OpenSearch retrieval for few-shot prompting. Integrated API Gateway + Streamlit UI, serving 1.5K+ daily active users with real-time tables/visuals.",
        "Fine-tuned CodeLlama-7B-Instruct using QLoRA and deployed it on NVIDIA TensorRT-LLM optimized SageMaker endpoints, accelerating inference by 1.8x and reduce memory usage by 50%."
      ],
    },
    {
      title: "Data Science Project - Policy Grievance and Mis-selling Prediction",
      bullets: [
        "Productionized a top-5 LightGBM + CATBoost ensemble to flag grievance/mis-selling risk across 809K+ policies, surfacing 97% of grievance cases in the top decile, empowering agents to preempt complaints.",
        "Developed a scalable ML pipeline on AWS SageMaker, containerized with ECR, and orchestrated automated weekly predictions reports with AWS Lambda and AWS EventBridge Scheduler cron jobs, reducing prediction latency by 3x.",
        "Operationalized model outputs by tagging high-risk users as “Handle with Care” in internal systems and routing them to trained agents in real time, driving a 23.8% drop in 3-month rolling average of complaints."
      ],
    }
  ],
  tech: ["RAG", "LLM", "NVIDIA TensorRT-LLM", "Claude 3.5 Sonnet", "Llama", "Prompt Engineering", "AWS", "Lambda", "SageMaker", "Bedrock", "HuggingFace", "Cohere", "OpenSearch", "Streamlit", "API Gateway", "Python", "Bash", "Docker", "LightGBM", "CatBoost", "EventBridge", "ECR"],
},
  {
    company: "Info Origin Inc.",
    title: "Data Science Intern",
    date: "May 2024 - Aug 2024",
    year: "2024",
    width: 150,
    height: 100,
    location: "Remote",
    logo: infoOriginLogo,
    bullets: [
      "Deployed a custom spaCy NER model with Streamlit UI to auto-extract key resume entities, cutting HR candidate screening time by 40% and streamlining early-stage hiring workflows.",
      "Optimized hyperparameters for a custom 5-layer neural network using Google’s NNLM embeddings and PyTorch TensorDataset/DataLoader for efficient batching/shuffling of 2,200+ articles, achieving 96.4% accuracy in news classification.",
      "Conducted organization-wide technical workshops on Neural Networks, Attention Mechanisms, Transformer architectures, and LLMs.",
    ],
    tech: ["spaCy", "PyTorch", "Named Entity Recognition", "Jupyter", "Google Colab", "TensorFlow",  "BERT", "RoBERTa", "Scikit-Learn", "Doccano", "Streamlit", "Transformers", "NLP", "Stemming", "Lemmatization", "Seaborn", "Matplotlib", "Bayesian Optimization"],
  },
  {
    company: "HDFC ERGO General Insurance",
    title: "Software Developer Intern",
    date: "Apr 2022 - Jun 2022",
    year: "2022",
    location: "Mumbai, India",
    width: 100,
    height: 100,
    logo: hdfcLogo,
    bullets: [
      "Automated ingestion of insurance quote data from Excel to Oracle DB using Flask API, SQLAlchemy, Pandas, and Numpy, cutting processing time by 97.8% (1.5 hours to 2 minutes), enabling instant policy generation for underwriters.",
      "Implemented a 4-factor validation pipeline (file format, encrypted token, template schema, metadata check) to detect obsolete or tampered Excel templates, reducing manual entry errors and rejections by 90%.",
      "Designed a redundancy management system using an isactive flag for lead IDs, eliminating duplicate entries from reuploads.",
    ],
    tech: ["Flask", "Oracle Database", "Pandas", "NumPy", "SQLALchemy", "API"],
  },
];

function useIsLargeScreen() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1200px)');
    const handler = (e: MediaQueryListEvent) => setIsLargeScreen(e.matches);

    setIsLargeScreen(mediaQuery.matches);
    mediaQuery.addEventListener('change', handler);

    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return isLargeScreen;
}

export const WorkExperienceSection = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const isLargeScreen = useIsLargeScreen();

  return (
    <section ref={sectionRef} className="sm:mb-20 md:mb-20 lg:mb-1 lg:py-2 relative">
      <div className="container">
        <SectionHeader
          eyebrow="Experience"
          title="Work Experience"
          description="Hands-on learning and real-world impact through industry placements."
        />

        <div className="relative mt-20">
          {/* Vertical Line */}
          <motion.div
            style={{ scaleY }}
            className="hidden left-1 lg:left-16 md:block rounded-full origin-top absolute top-0 h-full w-1 bg-gradient-to-b from-emerald-300 to-sky-400"
          />

          {/* Timeline Cards */}
          <div className="space-y-24">
            {experiences.map((exp, index) => {
              const variants = {
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeIn" } },
              };
            
              return (
                <motion.div
                  key={index}
                  className="grid grid-cols-1 lg:grid-cols-9 items-center"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.1 }}
                  variants={variants}
                >
                  {/* Timeline Dot and Logo on Left */}
                  <div className="hidden lg:flex col-span-1 justify-start lg:justify-center relative">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 z-0 border-1 border-emerald-400 flex items-center justify-center overflow-hidden">
                      {/*<Image
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        width={36}
                        height={36}
                        className="object-contain -z-50"
                      />*/}
                      <span className="leading-tight text-black font-semibold">
                        {exp.year}
                      </span>
                    </div>
                  </div>
              
                  {/* Right-side Card only */}
                  <div className="lg:col-span-8 col-span-1 text-left md:max-w-3xl lg:max-w-5xl">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 90 }}
                    >
                      <Card className="p-6 shadow-md md:ml-20 lg:ml-10 relative">
                        <div className="flex items-start mb-2">
                          <div>
                            <h3 className="font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-sky-400">
                              {exp.title}
                            </h3>
                            <p className="text-base text-white mb-2 font-semibold">
                              {exp.company}
                            </p>
                            <p className="text-sm text-white/60">
                              {exp.date} | {exp.location}
                            </p>
                          </div>
                          <div className="ml-auto flex flex-col items-center h-full">
                            <Image
                              src={exp.logo}
                              alt={`${exp.company} logo`}
                              width={exp.width}
                              height={exp.height}
                              className="object-contain"
                            />
                          </div>
                        </div>
                        <hr className="my-4 border-white/10" />
                        {exp.projects ? (
                          exp.projects.map((proj, pIdx) => (
                            <div key={pIdx} className="mb-6">
                              <h4 className="font-semibold text-white/80 mb-2">{proj.title}</h4>
                              <ul className="list-disc pl-6 space-y-2 text-white/80">
                                {proj.bullets.map((b, i) => (
                                  <li key={i} className="text-sm md:text-base text-white/50 leading-relaxed">{b}</li>
                                ))}
                              </ul>
                            </div>
                          ))
                        ) : (
                          <ul className="list-disc pl-6 space-y-2 text-white/80">
                            {exp.bullets.map((b, i) => (
                              <li key={i} className="text-sm md:text-base text-white/50 leading-relaxed">{b}</li>
                            ))}
                          </ul>
                        )}
                        {exp.tech && exp.tech.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-4">
                            {exp.tech.map((tool, i) => (
                              <motion.span
                                key={i}
                                className="text-xs font-medium bg-gradient-to-r text-black from-emerald-300 to-sky-400 px-3 py-1 rounded-full cursor-pointer select-none"
                                whileHover={{ y: -4, scale: 1.1 }}
                                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                              >
                                {tool}
                              </motion.span>
                            ))}
                          </div>
                        )}
                      </Card>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
