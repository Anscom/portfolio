import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize text-accent">
            Description
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
          Highly adaptable software engineer with approximately one year of experience in the fast-paced
          banking industry. A fast learner with a strong passion for the IT field, eager to tackle challenges and
          continuously grow. Proven ability to troubleshoot issues, develop solutions, and build projects while
          collaborating effectively with cross-functional teams.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left sm:text-5xl">
            Computer Science
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-8 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            1+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=appwrite,aws,bootstrap,cloudflare,css,docker,figma,firebase,github,js,jquery,kubernetes,linux,mongodb,mysql,netlify,nextjs,nodejs,npm,postgres,react,redux,replit,sass,supabase,tailwind,threejs,vercel,vite,vscode,yarn,spring,java`}
            alt="Anscom"
            loading="lazy"
          />
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;