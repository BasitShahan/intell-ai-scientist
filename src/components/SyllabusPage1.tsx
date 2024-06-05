import React from "react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";
import Cards from "./SyllabusPage2";
const page = () => {
  return (
    <>
      <div className="relative w-full h-[500px] md:mb-20" id="hero">
        <div
          className="flex flex-col justify-center items-center absolute w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/syllabus/bg.png')" }}
        >
          <div>
            <h1 className="text-white text-3xl font-semibold">Syllabus</h1>
          </div>
          <div className="text-lg text-[rgba(255,255,255,0.75)] font-semibold p-2 flex items-center gap-2">
            <Link href="/free-tools">Home</Link>
            <FaChevronRight className="text-sm" />
            <Link
              href="/free-tools/blog-title"
              className="capitalize text-[rgba(255,151,71,1)]"
            >
              Our Syllabus
            </Link>
          </div>
        </div>
      </div>
      <Cards />
    </>
  );
};

export default page;
