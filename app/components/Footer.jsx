import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white mt-12 shadow dark:bg-gray-900 h-20 pt-3">
      <div className="w-full max-w-screen-xl mx-auto p-3">
        <hr className="my-2 border-slate-200 sm:mx-auto dark:border-slate-500" />
        <span className="text-sm text-slate-200  sm:text-center dark:text-slate-200 flex justify-center">
          © 2024{" "}
          <a href="https://segmentor.vercel.app/" className="hover:underline">
            Segmentor™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
