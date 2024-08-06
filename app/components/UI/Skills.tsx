"use client";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee"; // Import Marquee for scrolling effect
// Define a type for Skill objects
type Skill = {
  id: number;
  src: string;
  alt: string;
};

const Skills = () => {
  const FRONTEND: Skill[] = [
     // Array of front-end skills
    { id: 1, src: "https://res.cloudinary.com/dvau3pvl9/image/upload/v1722963277/html-5_k2p08f.png", alt: "HTML" },
    { id: 2, src: "https://res.cloudinary.com/dvau3pvl9/image/upload/v1722963276/css_tw0q1d.png", alt: "CSS" },
    { id: 3, src: "https://res.cloudinary.com/dvau3pvl9/image/upload/v1722963346/javascript_ihhknb.svg", alt: "Javascript" },
    { id: 4, src: "https://res.cloudinary.com/dvau3pvl9/image/upload/v1722963277/java_jomy3o.png", alt: "Java" },
    { id: 5, src: "https://res.cloudinary.com/dvau3pvl9/image/upload/v1722963278/typescript_a82db2.png", alt: "Typescript" },
    { id: 6, src: "https://res.cloudinary.com/dvau3pvl9/image/upload/v1722963338/bootstrap_pfcfcn.svg", alt: "Bootstrap" },
    { id: 7, src: "https://res.cloudinary.com/dvau3pvl9/image/upload/v1722963278/react_sgk0me.png", alt: "React" },
    { id: 8, src: "https://res.cloudinary.com/dvau3pvl9/image/upload/v1722963347/redux_ljaxb0.svg", alt: "Redux" },
    { id: 9, src: "https://res.cloudinary.com/dvau3pvl9/image/upload/v1722963277/next_flqnpv.png", alt: "Next" },
    { id: 10, src: "https://res.cloudinary.com/dvau3pvl9/image/upload/v1722963278/tailwind_avoyck.png", alt: "Tailwind" },
    { id: 11, src: "https://res.cloudinary.com/dvau3pvl9/image/upload/v1722963341/git_ybcahu.svg", alt: "Git" },
    { id: 12, src: "https://res.cloudinary.com/dvau3pvl9/image/upload/v1722963344/github_mm5omt.svg", alt: "Github" },
    { id: 13, src: "https://res.cloudinary.com/dvau3pvl9/image/upload/v1722963278/shadcn_amc3uc.png", alt: "Shadcn" },
    { id: 13, src: "https://res.cloudinary.com/dvau3pvl9/image/upload/v1722963278/nextui_et5pja.png", alt: "NextUi" },

  ];

  const BACKEND: Skill[] = [

  // Array of back-end skills
    { id: 1, src: "https://res.cloudinary.com/dvau3pvl9/image/upload/v1722963278/node-js_caplyu.png", alt: "HTML" },
    { id: 2, src: "https://res.cloudinary.com/dvau3pvl9/image/upload/v1722963340/express_hgcd3t.svg", alt: "CSS" },
    { id: 3, src: "https://res.cloudinary.com/dvau3pvl9/image/upload/v1722963347/mongodb_pgt0r7.svg", alt: "Javascript" },
    { id: 4, src: "https://res.cloudinary.com/dvau3pvl9/image/upload/v1722963278/postgres_v2cxru.png", alt: "Java" },
    { id: 5, src: "https://res.cloudinary.com/dvau3pvl9/image/upload/v1722963276/kafka_ujsuzb.png", alt: "Kafka" },
    { id: 6, src: "https://res.cloudinary.com/dvau3pvl9/image/upload/v1722963339/Docker_ot4ecw.svg", alt: "Redux" },
    { id: 7, src: "https://res.cloudinary.com/dvau3pvl9/image/upload/v1722963835/aws_dizxyf.png", alt: "Tailwind" },
    { id: 8, src: "https://res.cloudinary.com/dvau3pvl9/image/upload/v1722963345/graphql_jexczz.svg", alt: "Git" },
  ];

  return (
    <div>
      <main className="flex flex-col justify-center w-full m-auto mt-14 max-w-13xl">
        <div>
          <h1 className="p-4 text-xl font-semibold text-primaryOrange sm:text-2xl md:text-3xl sm:pb-10 text-center">
            Skills
          </h1>
        </div>
        <main className="flex flex-row flex-wrap w-11/12 sm:w-9/12 gap-4 m-auto">
          <Marquee
            autoFill
            pauseOnHover
            gradient
            gradientColor="#0e100f"
            speed={30}
          >
            {FRONTEND.map((img) => (
              <div
                key={img.id}
                className="bg-primaryBorder m-1 rounded-xl p-4 cursor-pointer"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={50}
                  height={50}
                />
              </div>
            ))}
          </Marquee>
          <Marquee
            autoFill
            pauseOnHover
            direction="right"
            speed={30}
            gradient
            gradientColor="#0e100f"
          >
            {BACKEND.map((img) => (
              <div
                key={img.id}
                className="bg-primaryBorder m-1 rounded-xl p-4 cursor-pointer"
              >
                <Image
                  src={ img.src}
                  alt={img.alt}
                  width={50}
                  height={50}
                />
              </div>
            ))}
          </Marquee>
        </main>
      </main>
    </div>
  );
};

export default Skills;
