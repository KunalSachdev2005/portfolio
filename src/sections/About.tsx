"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import mapImage from "@/assets/images/map.jpg";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from 'framer-motion';

import PythonIcon from "@/assets/icons/Python.svg";
import RIcon from "@/assets/icons/R.svg";
import CIcon from "@/assets/icons/C.svg";
import CppIcon from "@/assets/icons/C++.svg";
import BashIcon from "@/assets/icons/Bash.svg";
import JavascriptIcon from "@/assets/icons/JavaScript.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import AwsIcon from "@/assets/icons/AWS.svg";
import IbmCloudIcon from "@/assets/icons/IBM_Cloud.svg";
import DockerIcon from "@/assets/icons/Docker.svg";
import KubernetesIcon from "@/assets/icons/Kubernetes.svg";
import MongodbIcon from "@/assets/icons/MongoDB.svg";
import MysqlIcon from "@/assets/icons/MySQL.svg";
import SqliteIcon from "@/assets/icons/SQLite.svg";
import Db2Icon from "@/assets/icons/IBM_Db2.svg";
import OracleIcon from "@/assets/icons/Oracle.svg";
import RedShiftIcon from "@/assets/icons/Redshift.svg";
import OpenSearchIcon from "@/assets/icons/OpenSearch_Service.svg";
import JupyterIcon from "@/assets/icons/Jupyter.svg";
import ScikitLearnIcon from "@/assets/icons/Scikit-learn.svg";
import HuggingFaceIcon from "@/assets/icons/HuggingFace.svg";
import PyTorchIcon from "@/assets/icons/pytorch.svg";
import TensorFlowIcon from "@/assets/icons/TensorFlow.svg";
import PandasIcon from "@/assets/icons/Pandas.svg";
import NumpyIcon from "@/assets/icons/NumPy.svg";
import ScipyIcon from "@/assets/icons/SciPy.svg";
import MatplotlibIcon from "@/assets/icons/Matplotlib.svg";
import SeabornIcon from "@/assets/icons/Seaborn.svg";
import FoliumIcon from "@/assets/icons/Folium.svg";
import SqlAlchemyIcon from "@/assets/icons/SQLAlchemy.svg";
import StreamlitIcon from "@/assets/icons/Streamlit.svg"
import ReactIcon from "@/assets/icons/react.svg";
import NextjsIcon from "@/assets/icons/Next_JS.svg";
import TailwindIcon from "@/assets/icons/Tailwind_CSS.svg";
import NodejsIcon from "@/assets/icons/Node_JS.svg";
import ExpressIcon from "@/assets/icons/Express_JS.svg";
import FlaskIcon from "@/assets/icons/Flask.svg";
import DjangoIcon from "@/assets/icons/Django.svg";
import PlotlyIcon from "@/assets/icons/Plotly.svg";
import { useRef } from "react";


const toolboxItems1 = [
  { title: "Python", iconType: PythonIcon },
  { title: "R", iconType: RIcon },
  { title: "C", iconType: CIcon },
  { title: "C++", iconType: CppIcon },
  { title: "Bash Script", iconType: BashIcon },
  { title: "JavaScript", iconType: JavascriptIcon },
  { title: "HTML5", iconType: HTMLIcon },
  { title: "CSS3", iconType: CssIcon }
];

const toolboxItems2 = [
  { title: "AWS", iconType: AwsIcon },
  { title: "IBM Cloud", iconType: IbmCloudIcon },
  { title: "Docker", iconType: DockerIcon },
  { title: "Kubernetes", iconType: KubernetesIcon },
  { title: "MongoDB", iconType: MongodbIcon },
  { title: "MySQL", iconType: MysqlIcon },
  { title: "SQLite", iconType: SqliteIcon },
  { title: "IBM Db2", iconType: Db2Icon },
  { title: "Oracle", iconType: OracleIcon },
  { title: "RedShift", iconType: RedShiftIcon },
  { title: "OpenSearch", iconType: OpenSearchIcon },
];

const toolboxItems3 = [
  { title: "Jupyter", iconType: JupyterIcon },
  { title: "Scikit-learn", iconType: ScikitLearnIcon },
  { title: "HuggingFace", iconType: HuggingFaceIcon },
  { title: "PyTorch", iconType: PyTorchIcon },
  { title: "TensorFlow", iconType: TensorFlowIcon },
  { title: "Pandas", iconType: PandasIcon },
  { title: "NumPy", iconType: NumpyIcon },
  { title: "SciPy", iconType: ScipyIcon },
  { title: "Matplotlib", iconType: MatplotlibIcon },
  { title: "Seaborn", iconType: SeabornIcon },
  { title: "Folium", iconType: FoliumIcon },
  { title: "SQLAlchemy", iconType: SqlAlchemyIcon }
];

const toolboxItems4 = [
  { title: "Streamlit", iconType: StreamlitIcon},
  { title: "React", iconType: ReactIcon },
  { title: "Next.js", iconType: NextjsIcon },
  { title: "Tailwind CSS", iconType: TailwindIcon },
  { title: "Node.js", iconType: NodejsIcon },
  { title: "Express", iconType: ExpressIcon },
  { title: "Flask", iconType: FlaskIcon },
  { title: "Django", iconType: DjangoIcon },
  { title: "Plotly", iconType: PlotlyIcon }
];


const hobbies = [
  {
    title: "Fitness",
    emoji: "🏋️‍♂️",
    left: "5%",
    top: "5%",
  },
  {
    title: "Poker",
    emoji: "♠️",
    left: "10%",
    top: "35%",
  },
  {
    title: "MMA",
    emoji: "🥊",
    left: "60%",
    top: "5%",
  },
  {
    title: "Sleep",
    emoji: "😴",
    left: "45%",
    top: "25%",
  },
  {
    title: "Basketball",
    emoji: "🏀",
    left: "30%",
    top: "45%",
  },
  {
    title: "Cricket",
    emoji: "🏏",
    left: "70%",
    top: "45%",
  },
  {
    title: "Anime",
    emoji: "🎥",
    left: "5%",
    top: "65%",
  },
  {
    title: "Badminton",
    emoji: "🏸",
    left: "40%",
    top: "70%",
  },
  {
    title: "Food",
    emoji: "😋",
    left: "30%",
    top: "12%",
  },
]

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div className="py-20">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse into My World"
          description="Learn more about who I am, what I do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[390px] md:h-[480px] lg:h-[480px] md:col-span-2 lg:col-span-1">
              <CardHeader title="My Reads" description="Explore the books shapring my perspectives."/>
              <div className="w-40 md:w-48 mx-auto mt-2">
                <Image src={bookImage} alt="Book cover" />
              </div>
            </Card>
            <Card className="h-[480px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I have used in my internships and personal projects."
                className=""
                />
              <ToolboxItems items={toolboxItems1} className="" itemsWrapperClassName="animate-move-right [animation-duration:25s]" />
              <ToolboxItems items={toolboxItems2} className="mt-6" itemsWrapperClassName="animate-move-left [animation-duration:35s]" />
              <ToolboxItems items={toolboxItems4} className="mt-6" itemsWrapperClassName="animate-move-right [animation-duration:25s]" />    
              <ToolboxItems items={toolboxItems3} className="mt-6" itemsWrapperClassName="animate-move-left [animation-duration:35s]" />    
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond Coding"
                description="Explore my interests and hobbies beyond the digital realm."
                className="px-6 py-6"
              />
                <div className="relative flex-1" ref={constraintRef}>
                  {hobbies.map(hobby => (
                    <motion.div
                      key={hobby.title}
                      className="inline-flex items-center gap-2 px-6 bg-gradient-to-r 
                      from-emerald-300 to-sky-400 rounded-full py-1.5 absolute bg-sky-400"
                      style={{
                        left: hobby.left,
                        top: hobby.top,
                      }}
                      drag
                      dragConstraints={constraintRef}
                    >
                      <span className="font-medium text-gray-950">{hobby.title}</span>
                      <span>{hobby.emoji}</span>
                    </motion.div>
                  ))}
                </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="Map"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-[70%] md:top-[60%] lg:top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 
              rounded-full after:content-[''] after:inset-0 after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image
                  src={smileMemoji}
                  alt="Smiling emoji"
                  className="size-20"
                  />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
