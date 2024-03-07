"use client";
import React from "react";
import { Card1, Card2, Card3, Card4, Card5 } from "segmentor";
import Code from "../components/Code";

const codesOfCards = [
  `import {Card1} from "segmentor;
<Card1 imageurl={"Your imageUrl"} alt={<altText>} />`,
  `import {Card2} from "segmentor;
<Card2 imageurl={"Your imageUrl"} alt={<altText>}/>`,
  `import {Card3} from "segmentor;
<Card3 imageurl={"Your imageUrl"} alt={<altText>}/>`,
  `import {Card4} from "segmentor;
<Card4 imageurlfront={"Your imageUrl"}           
imageurlback={"Your imageUrl"} alt={<altText>}/>`,
  `import {Card5} from "segmentor;
<Card5 imageurlfront={"Your imageUrl"}          
imageurlback={"Your imageUrl"} alt={<altText>}/>`,
];

const page = () => {
  return (
    <>
      <h1 className="text-center text-4xl mt-10 underline">Cards</h1>
      <div className=" mt-10">
        <div className="md:flex mb-14 items-center">
          <div className=" w-full md:w-1/2 flex justify-center items-center">
            <Card1 imageurl={"/desert.jpg"} />
          </div>
          <div>
            <Code code={codesOfCards[0]} language="javascript" />
          </div>
        </div>

        <div className="md:flex mb-14 items-center ">
          <div className=" w-full md:w-1/2 flex justify-center items-center">
            <Card2 imageurl={"/desert.jpg"} />
          </div>
          <div>
            <Code code={codesOfCards[1]} language="javascript" />
          </div>
        </div>

        <div className="md:flex mb-14 items-center ">
          <div className=" w-full md:w-1/2 flex justify-center items-center">
            <Card3 imageurl={"/desert.jpg"} />
          </div>
          <div>
            <Code code={codesOfCards[2]} language="javascript" />
          </div>
        </div>

        <div className="md:flex mb-14 items-center">
          <div className=" w-full md:w-1/2 flex justify-center items-center">
            <Card4 imageurlfront={"/desert.jpg"} imageurlback={"/tree.jpg"} />
          </div>
          <div>
            <Code code={codesOfCards[3]} language="javascript" />
          </div>
        </div>

        <div className="md:flex mb-14 items-center">
          <div className=" w-full md:w-1/2 flex justify-center items-center">
            <Card5 imageurlfront={"/desert.jpg"} imageurlback={"/tree.jpg"} />
          </div>
          <div>
            <Code code={codesOfCards[4]} language="javascript" />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
