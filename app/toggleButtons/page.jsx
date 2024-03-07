"use client";
import React from "react";
import { Toggle1, Toggle2, Toggle3, Toggle4, Toggle5 } from "segmentor";
import Code from "../components/Code";

const toggles = [
  {
    component: Toggle1,
    code: `import {Toggle1} from 'segmentor';
<Toggle1  checked={<true or false>} onChange={<Your function>}/>`,
  },
  {
    component: Toggle2,
    code: `import {Toggle2} from 'segmentor';
<Toggle2 checked={<true or false>} onChange={<Your function>}/>`,
  },
  {
    component: Toggle3,
    code: `import {Toggle3} from 'segmentor';
<Toggle3 checked={<true or false>} onChange={<Your function>}/>`,
  },
  {
    component: Toggle4,
    code: `import {Toggle4} from 'segmentor';
<Toggle4 checked={<true or false>} onChange={<Your function>}/>`,
  },
  {
    component: Toggle5,
    code: `import {Toggle5} from 'segmentor';
<Toggle5 checked={<true or false>} onChange={<Your function>}/>`,
  },
];

const page = () => {
  return (
    <>
      <h1 className="text-center text-4xl mt-10 underline">Toggle Buttons</h1>
      <div className=" mt-10">
        {toggles.map((Toggle, index) => (
          <div className="md:flex mb-14 items-center" key={index}>
            <div className=" w-full md:w-1/2 flex justify-center items-center">
              <Toggle.component />
            </div>
            <div>
              <Code code={Toggle.code} language="javascript" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default page;
