"use client";
import React from "react";
import {
  Loader1,
  Loader2,
  Loader3,
  Loader4,
  Loader5,
  Loader6,
  Loader7,
  Loader8,
  Loader9,
  Loader10,
} from "segmentor";
import Code from "../components/Code";

const loaders = [
  {
    component: Loader1,
    code: `import {Loader1} from 'segmentor';
<Loader1/>`,
  },
  {
    component: Loader2,
    code: `import {Loader2} from 'segmentor';
<Loader2/>`,
  },
  {
    component: Loader3,
    code: `import {Loader3} from 'segmentor';
<Loader3/>`,
  },
  {
    component: Loader4,
    code: `import {Loader4} from 'segmentor';
<Loader4/>`,
  },
  {
    component: Loader5,
    code: `import {Loader5} from 'segmentor';
<Loader5/>`,
  },
  {
    component: Loader6,
    code: `import {Loader6} from 'segmentor';
<Loader6/>`,
  },
  {
    component: Loader7,
    code: `import {Loader7} from 'segmentor';
<Loader7/>`,
  },
  {
    component: Loader8,
    code: `import {Loader8} from 'segmentor';
<Loader8/>`,
  },
  {
    component: Loader9,
    code: `import {Loader9} from 'segmentor';
<Loader9/>`,
  },
  {
    component: Loader10,
    code: `import {Loader10} from 'segmentor';
<Loader10/>`,
  },
];

const page = () => {
  return (
    <>
      <h1 className="text-center text-4xl mt-10 underline">Loaders</h1>
      <div className=" mt-10">
        {loaders.map((loader, index) => (
          <div className="md:flex mb-14 items-center" key={index}>
            <div className=" w-full md:w-1/2 flex justify-center items-center">
              <loader.component />
            </div>
            <div className=" mx-auto">
              <Code code={loader.code} language="javascript" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default page;
