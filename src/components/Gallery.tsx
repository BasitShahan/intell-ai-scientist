import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";
import vectoricon from "../../public/images/image-gallery/vector icon.png";
import images from "./index"; // Ensure that this import path is correct and `images` is an array

export default function Gallery() {
  return (
    <>
      <div className="relative w-full h-[500px] md:mb-20" id="hero">
        <div
          className="flex flex-col justify-center items-center absolute w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/image-gallery/bg-image-11-3 1.png')",
          }}
        >
          <div>
            <h1 className="text-white text-3xl font-semibold">Forms</h1>
          </div>
          <div className="text-lg text-[rgba(255,255,255,0.75)] font-semibold p-2 flex items-center gap-2">
            <Link href="/free-tools">Home</Link>
            <FaChevronRight className="text-sm" />
            <Link
              href="/free-tools/blog-title"
              className="capitalize text-[rgba(255,151,71,1)]"
            >
              Forms
            </Link>
          </div>
        </div>
      </div>

      {/* lets expolre text */}
      <div className="flex flex-col gap-2">
        <div>
          <i>
            <h1 className="font-title2 text-center font-bold text-4xl">
              Let’s Explore Our Gallery
            </h1>
          </i>
        </div>
        <div className="mx-auto">
          <Image src={vectoricon} width="340" height="26" alt="images" />
        </div>
      </div>

      {/* images section */}
      <div  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8 px-4"
>
        {images.map((val, index) => (
          <div key={index} className="flex justify-center items-center">
            <Image
              src={val.image}
              alt={`image-${index}`}
              width={val.width}
              height={val.height}
            />
          </div>
        ))}
      </div>
    </>
  );
}

// className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8 px-4"
