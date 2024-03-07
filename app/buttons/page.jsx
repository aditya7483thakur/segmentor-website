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
    code: `import {Button1} from segmentor;
<Button1 children={"Button 1"} onClick={<your function>} />`,
  },
  {
    component: Button2,
    children: "Button 2",
    code: `import {Button2} from segmentor;
<Button2 children={"Button 2"} onClick={<your function>} />`,
  },
  {
    component: Button3,
    children: "Button 3",
    code: `import {Button3} from segmentor;
<Button3 children={"Button 3"} onClick={<your function>} />`,
  },
  {
    component: Button4,
    children: "Button 4",
    code: `import {Button4} from segmentor;
<Button4 children={"Button 4"} onClick={<your function>} />`,
  },
  {
    component: Button5,
    children: "Button 5",
    code: `import {Button5} from segmentor;
<Button5 children={"Button 5"} onClick={<your function>} />`,
  },
  {
    component: Button6,
    children: "Button 6",
    code: `import {Button6} from segmentor;
<Button6 children={"Button 6"} onClick={<your function>} />`,
  },
  {
    component: Button7,
    children: "Button 7",
    code: `import {Button7} from segmentor;
<Button7 children={"Button 7"} onClick={<your function>} />`,
  },
  {
    component: Button8,
    children: "Button 8",
    code: `import {Button8} from segmentor;
<Button8 children={"Button 8"} onClick={<your function>} />`,
  },
  {
    component: Button9,
    children: "Button 9",
    code: `import {Button9} from segmentor;
<Button9 children={"Button 9"} onClick={<your function>} />`,
  },
  {
    component: Button10,
    children: "Button 10",
    code: `import {Button10} from segmentor;
<Button10 children={"Button 10"} onClick={<your function>} />`,
  },
];

const handleClick = (component) => {
  toast.success(`${component} clicked`);
};

const page = () => {
  return (
    <>
      <h1 className="text-center text-4xl mt-10 underline">Buttons</h1>
      <div className=" mt-10">
        {buttons.map((button) => (
          <div className="md:flex mb-14 " key={button.component}>
            <div className=" w-full md:w-1/2 flex justify-center items-center">
              <button.component
                children={button.children}
                onClick={() => handleClick(button.children)}
              />
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

export default page;
