"use client";
import React from "react";
import {
  Button1,
  Button2,
  Button3,
  Button4,
  Button5,
  Button6,
  Button7,
  Button8,
  Button9,
  Button10,
} from "segmentor";
import Code from "../components/Code";
import toast from "react-hot-toast";

const buttons = [
  {
    component: Button1,
    children: "Button 1",
    code: `import {Button1} from "segmentor";
<Button1 onClick={<your function>}>Button 1</Button1>`,
  },
  {
    component: Button2,
    children: "Button 2",
    code: `import {Button2} from "segmentor";
<Button2 onClick={<your function>}>Button 2</Button2>`,
  },
  {
    component: Button3,
    children: "Button 3",
    code: `import {Button3} from "segmentor";
<Button3 onClick={<your function>}>Button 3</Button3>`,
  },
  {
    component: Button4,
    children: "Button 4",
    code: `import {Button4} from "segmentor";
<Button4 onClick={<your function>}>Button 4</Button4>`,
  },
  {
    component: Button5,
    children: "Button 5",
    code: `import {Button5} from "segmentor";
<Button5 onClick={<your function>}>Button 5</Button5>`,
  },
  {
    component: Button6,
    children: "Button 6",
    code: `import {Button6} from "segmentor";
<Button6 onClick={<your function>}>Button 6</Button6>`,
  },
  {
    component: Button7,
    children: "Button 7",
    code: `import {Button7} from "segmentor";
<Button7 onClick={<your function>}>Button 7</Button7>`,
  },
  {
    component: Button8,
    children: "Button 8",
    code: `import {Button8} from "segmentor";
<Button8 onClick={<your function>}>Button 8</Button8>`,
  },
  {
    component: Button9,
    children: "Button 9",
    code: `import {Button9} from "segmentor";
<Button9 onClick={<your function>}>Button 9</Button9>`,
  },
  {
    component: Button10,
    children: "Button 10",
    code: `import {Button10} from "segmentor";
<Button10 onClick={<your function>}>Button 10</Button10>`,
  },
];

const handleClick = (component) => {
  toast.success(`${component} clicked`);
};

const Page = () => {
  return (
    <>
      <h1 className="text-center text-4xl mt-10 underline">Buttons</h1>
      <div className="mt-10">
        {buttons.map((button) => (
          <div className="md:flex mb-14" key={button.component}>
            <div className="w-full md:w-1/2 flex justify-center items-center">
              <button.component onClick={() => handleClick(button.children)}>
                {button.children}
              </button.component>
            </div>
            <div>
              <Code code={button.code} language="javascript" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Page;
