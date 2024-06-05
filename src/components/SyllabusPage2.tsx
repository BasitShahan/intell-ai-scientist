import React from "react";
import Image from "next/image";
const Cards = () => {
  const syllabusContent = [
    {
      image: "/images/syllabus/ai.png",
      title: "Artificial Intelligence",
      subHead: "Importance And Application Of AI.",
      lesson: "6 Lessons",
      hour: "4 Hours",
      rating: "4.50",
      level: "All Level",
      teachImage: "/images/syllabus/btn/Teacher.png",
      timeImage: "/images/syllabus/btn/MeetingTime.png",
      RatingImage: "/images/syllabus/btn/Star.png",
      levelImage: "/images/syllabus/btn/Volumelevel.png",
      price: "$ 265",
    },
    {
      image: "/images/syllabus/prompt-engineering.png",
      title: "Prompt Engineering",
      subHead: "Importance Of Prompt In AI Engineering.",
      lesson: "6 Lessons",
      hour: "4 Hours",
      rating: "5",
      level: "All Level",
      teachImage: "/images/syllabus/btn/Teacher.png",
      timeImage: "/images/syllabus/btn/MeetingTime.png",
      RatingImage: "/images/syllabus/btn/Star.png",
      levelImage: "/images/syllabus/btn/Volumelevel.png",
      price: "$ 265",
    },
    {
      image: "/images/syllabus/python.png",
      title: "Python",
      subHead: "Basic To Master Syntax And Data Type.",
      lesson: "6 Lessons",
      hour: "4 Hours",
      rating: "4.50",
      level: "All Level",
      teachImage: "/images/syllabus/btn/Teacher.png",
      timeImage: "/images/syllabus/btn/MeetingTime.png",
      RatingImage: "/images/syllabus/btn/Star.png",
      levelImage: "/images/syllabus/btn/Volumelevel.png",
      price: "$ 265",
    },
    {
      image: "/images/syllabus/pythonn.png",
      title: "Python",
      subHead: "Functions, Modular,  And Programming.",
      lesson: "6 Lessons",
      hour: "4 Hours",
      rating: "4.50",
      level: "All Level",
      teachImage: "/images/syllabus/btn/Teacher.png",
      timeImage: "/images/syllabus/btn/MeetingTime.png",
      RatingImage: "/images/syllabus/btn/Star.png",
      levelImage: "/images/syllabus/btn/Volumelevel.png",
      price: "$ 265",
    },
    {
      image: "/images/syllabus/data.png",
      title: "Basics Of Data",
      subHead: "Learn To Get Data For Different Projects.",
      lesson: "6 Lessons",
      hour: "4 Hours",
      rating: "4.50",
      level: "All Level",
      teachImage: "/images/syllabus/btn/Teacher.png",
      timeImage: "/images/syllabus/btn/MeetingTime.png",
      RatingImage: "/images/syllabus/btn/Star.png",
      levelImage: "/images/syllabus/btn/Volumelevel.png",
      price: "$ 265",
    },
    {
      image: "/images/syllabus/eda.png",
      title: "Basics Of EDA",
      subHead: "Basics Of Exploratory Data Analysis.",
      lesson: "6 Lessons",
      hour: "4 Hours",
      rating: "4.50",
      level: "All Level",
      teachImage: "/images/syllabus/btn/Teacher.png",
      timeImage: "/images/syllabus/btn/MeetingTime.png",
      RatingImage: "/images/syllabus/btn/Star.png",
      levelImage: "/images/syllabus/btn/Volumelevel.png",
      price: "$ 265",
    },
    {
      image: "/images/syllabus/machinelearning.png",
      title: "Machine Learning",
      subHead: "Basics To Expert Level In AI.",
      lesson: "6 Lessons",
      hour: "4 Hours",
      rating: "4.50",
      level: "All Level",
      teachImage: "/images/syllabus/btn/Teacher.png",
      timeImage: "/images/syllabus/btn/MeetingTime.png",
      RatingImage: "/images/syllabus/btn/Star.png",
      levelImage: "/images/syllabus/btn/Volumelevel.png",
      price: "$ 265",
    },
    {
      image: "/images/syllabus/ai1.png",
      title: "Artificial Intelligence",
      subHead: "Importance And Application of AI",
      lesson: "6 Lessons",
      hour: "4 Hours",
      rating: "4.50",
      level: "All Level",
      teachImage: "/images/syllabus/btn/Teacher.png",
      timeImage: "/images/syllabus/btn/MeetingTime.png",
      RatingImage: "/images/syllabus/btn/Star.png",
      levelImage: "/images/syllabus/btn/Volumelevel.png",
      price: "$ 265",
    },
  ];

  return (
    <>
      <div
        className="grid grid-cols-1 lg:grid-cols-2
      py-16 px-4 md:px-12  justify-center gap-8 w-full mx-auto"
      >
        {syllabusContent.map((data, index) => {
          return (
            <>
              {/* card sectrion start */}
              <div
                className="bg-[rgb(255,255,255)] relative flex flex-col gap-4 pb-4
                 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] pr-6 rounded-lg transform transition-transform duration-1000 hover:scale-105 cursor-pointer "
              >
                <div className="flex gap-2">
                  <div>
                    <Image
                      className="rounded-t"
                      src={data.image}
                      alt="Logo"
                      width={300}
                      height={300}
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-1 md:gap-6 pl-3">
                    <p className="w-fit text-xs md:text-lg font-popin border-b-2 border-green-400">
                      {data.title}
                    </p>

                    <p className="text-xs sm:text-[20px] font-bold leading-normal sm:leading-6">
                      {data.subHead}
                    </p>
                  </div>
                </div>
                {/* Bottom section */}
                <div className="flex py-2 gap-2 md:gap-4 pl-2 items-center flex-wrap">
                  <div className="flex gap-2 items-center">
                    <Image
                      src={data.teachImage}
                      alt="Logo"
                      width={25}
                      height={25}
                    />
                    <p className="text-xs md:text-sm md:font-bold">
                      {data.lesson}
                    </p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Image
                      src={data.timeImage}
                      alt="Logo"
                      width={25}
                      height={25}
                    />
                    <p className="text-xs md:text-sm md:font-bold">
                      {data.hour}
                    </p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Image
                      src={data.RatingImage}
                      alt="Logo"
                      width={25}
                      height={25}
                    />
                    <p className="text-xs md:text-sm  md:font-bold">
                      {data.rating}
                    </p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Image
                      src={data.levelImage}
                      alt="Logo"
                      width={25}
                      height={25}
                    />
                    <p className="text-xs md:text-sm  md:font-bold">
                      {data.level}
                    </p>
                  </div>
                </div>
                {/* bottom section end */}
                {/* Pricing */}
                <span className="bg-[#30b979] absolute left-1 top-2 sm:left-3 sm:top-4 p-1 sm:p-2 w-fit rounded-full text-xs sm:text-sm text-white">
                  {data.price}
                </span>
                {/* pricing end */}
              </div>
              {/* card section end */}
            </>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
