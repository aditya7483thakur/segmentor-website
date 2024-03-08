import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="md:flex justify-center items-center text-center">
      <div className="md:w-4/6 text-2xl md:text-xl mt-4">
        <div className="underline text-6xl md:text-5xl text-center md:mb-7">
          About Us
        </div>
        <div className="md:w-1/2 w-4/6 md:hidden block mx-auto mb-5">
          <img className="w-full" src="image.png" alt="Image..." />
        </div>
        <div className="">
          Welcome to Segmentor, a comprehensive collection of UI components
          designed to streamline your development process and enhance user
          experience. Developed with the latest technologies and best practices,
          Segmentor offers a wide range of components to suit various project
          requirements.
        </div>
        <div className=" mt-7 md:block hidden">
          Have questions, feedback, or suggestions? We&apos;d love to hear from
          you! Get in touch with us via email at{" "}
          <span className="underline">adityakumarji7483@email</span>.com or
          through our GitHub repository :{" "}
          <Link
            className="underline"
            href={"https://github.com/aditya7483thakur/segmentor"}
          >
            github.com/aditya7483thakur/segmentor
          </Link>
          . Thank you for choosing Segmentor! We&apos;re excited to be a part of
          your development journey.
        </div>
      </div>

      <div className="w-1/2 md:block hidden">
        <img className="w-full" src="image.png" alt="Image..." />
      </div>
    </div>
  );
};

export default page;
