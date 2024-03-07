"use client";
import React from "react";
import { Input1, Input2, Input3, Input4, Input5 } from "segmentor";
import Code from "../components/Code";

const inputs = [
  {
    component: Input1,
    code: `import {Input1} from segmentor;
<Input1 onChange={<your function>} placeholder={<placeholder>}/>`,
  },
  {
    component: Input2,
    code: `import {Input2} from segmentor;
<Input2 onChange={<your function>} placeholder={<placeholder>}/>`,
  },
  {
    component: Input3,
    code: `import {Input3} from segmentor;
<Input3 onChange={<your function>} placeholder={<placeholder>}/>`,
  },
  {
    component: Input4,
    code: `import {Input4} from segmentor;
<Input4 onChange={<your function>} placeholder={<placeholder>}/>`,
  },
  {
    component: Input5,
    code: `import {Input5} from segmentor;
<Input5 onChange={<your function>} placeholder={<placeholder>}/>`,
  },
];

const page = () => {
  return (
    <>
      <h1 className="text-center text-4xl mt-10 underline">Inputs</h1>
      <div className=" mt-10">
        {inputs.map((input, index) => (
          <div className="md:flex mb-14 " key={index}>
            <div className=" w-full md:w-1/2 flex justify-center items-center">
              <input.component className={" w-96"} />
            </div>
            <div>
              <Code code={input.code} language="javascript" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default page;
