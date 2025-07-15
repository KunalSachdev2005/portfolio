'use client';

import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import edelweissLogo from "@/assets/images/edelweiss.png";
import infoOriginLogo from "@/assets/images/infoorigin.png";
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
    location: "Mumbai, India",
    logo: edelweissLogo,
    bullets: [
      "Enabled dynamic enterprise insights with a serverless RAG app using Claude 3.5 Sonnet on AWS Bedrock.",
      "Built two Lambda functions with VPC-secured SageMaker/Bedrock inference and 99% API uptime.",
      "Boosted SQL generation accuracy by 28% using Cohere embeddings in OpenSearch few-shot prompting.",
      "Fine-tuned CodeLlama-7B-Instruct via QLoRA; deployed with TensorRT-LLM for 1.8x speed, 50% memory cut.",
      "Streamlit frontend + API Gateway served plots and tables to 3,000+ daily users.",
    ],
    tech: ["RAG", "LLM", "NVIDIA TensorRT-LLM", "Claude 3.5 Sonnet", "Llama", "Promp Engineering", "AWS", "Lambda", "SageMaker", "Bedrock", "HuggingFace", "Cohere", "OpenSearch", "Streamlit", "API Gateway", "Python", "Bash", "Docker"],
  },
  {
    company: "Info Origin Inc.",
    title: "Data Science Intern",
    date: "May 2024 - Aug 2024",
    location: "Remote",
    logo: infoOriginLogo,
    bullets: [
      "Trained and deployed an NER model (spaCy, Doccano, Streamlit) to parse resumes, reducing screening time by 40%.",
      "Built and tuned a 5-layer NN with NNLM embeddings (PyTorch) to classify 2,200+ articles at 96.4% accuracy.",
    ],
    tech: ["spaCy", "PyTorch", "Named Entity Recognition", "Jupyter", "Google Colab", "TensorFlow",  "BERT", "RoBERTa", "Scikit-Learn", "Doccano", "Streamlit", "Transformers", "NLP", "Stemming", "Lemmatization", "Seaborn", "Matplotlib", "Bayesian Optimization"],
  },
  {
    company: "HDFC ERGO General Insurance",
    title: "Software Developer Intern",
    date: "Apr 2022 - Jun 2022",
    location: "Mumbai, India",
    logo: hdfcLogo,
    bullets: [
      "Built Flask-based Python API to clean, encrypt, and store Excel premium quotes in Oracle DB.",
      "Automated ETL pipeline with Pandas, SQLAlchemy, NumPy - reducing quote processing time by 97.8%.",
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
    <section ref={sectionRef} className="py-20 lg:py-32 relative">
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
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        width={36}
                        height={36}
                        className="object-contain -z-50"
                      />
                    </div>
                  </div>
              
                  {/* Right-side Card only */}
                  <div className="lg:col-span-8 col-span-1 text-left md:max-w-3xl lg:max-w-5xl">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 90 }}
                    >
                      <Card className="p-6 shadow-md md:ml-20 lg:ml-10">
                        <div className="flex items-center justify-start gap-3 mb-2">
                          <h3 className="font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-sky-400">
                            {exp.title}
                          </h3>
                        </div>
                        <p className="text-base text-white mb-2 font-semibold">
                          {exp.company}
                        </p>
                        <p className="text-sm text-white/60">
                          {exp.date} | {exp.location}
                        </p>
                        <hr className="my-4 border-white/10" />
                        <ul className="list-disc pl-6 space-y-2 text-white/80">
                          {exp.bullets.map((b, i) => (
                            <li key={i} className="text-sm md:text-base text-white/50 leading-relaxed">{b}</li>
                          ))}
                        </ul>
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
