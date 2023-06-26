import React from "react";
import "./App.css";
import image1 from "./assests/image1.png";
import image2 from "./assests/image2.png";
import image3 from "./assests/image3.jpg";
import image4 from "./assests/image4.png";
import image5 from "./assests/image5.png";
import Teamimage2 from "./assests/Teamimage2.png";
import Teamimage3 from "./assests/Teamimage3.png";
import valueimage1 from "./assests/valueimage1.png";
import bigimage from "./assests/bigimage.png";

const Images = [
  { id: 0, altText: "images", src: image3 },
  { id: 1, altText: "images", src: image2 },
];
const Images2 = [
  { id: 0, altText: "images", src: image4 },
  { id: 1, altText: "images", src: image5 },
];

function Contents() {
  return (
    <div className="bg-sky-950 grid grid-cols-1 h-[auto]  w-[100%]  ">
      <div className=" bg-sky-950 w-[100%] md:w-[100%] sm:w-[100%] sm:px-10 h-[auto] mx-auto-5 md:px-10 pb-10 pt-10 lg:px-14">
        <h1 className="text-white font-medium text-3xl md:text-5xl text-center">
          We love to make Greater things that matters
        </h1>
        <p className="text-white pt-5 pb-10 text-center font-normal text-[1.3rem]">
          Funding handshake buyer business-to-business metrics iPad partnership.
          First mover advantage innovator success deployment non-disclosure.
        </p>
      </div>
    </div>
  );
}

export default Contents;

export function Story() {
  return (
    <>
      <div className=" relative flex flex-col md:flex-row gap-1  w-[85%] md:w-[85%] h-[auto] mt-10  mx-auto">
        <div className="flex flex-col gap-5 object-cover items-center  w-[100%] h-[auto]">
          {Images.map((image) => (
            <img
              key={image.id}
              src={image.src}
              alt={image.altText}
              className="w-[85%] shadow-slate-400 shadow-2xl sm:w-[320px] h-[18rem] md:w-[80%] md:h-60 lg:h-[170%] lg:w-[60%]"
            />
          ))}
        </div>
        <div className="flex flex-col  items-center w-[100%] lg:w-[80%] object-cover mb-5 lg:h-[450px] h-[auto]">
          <img
            src={bigimage}
            alt="image"
            className=" w-[95%] shadow-xl shadow-slate-400 sm:w-[400px]   h-80 md:h-[100%] md:w-[100%]"
          />
        </div>
        <div className="flex object-cover flex-col gap-5 items-center w-[100%] h-[auto]">
          {Images2.map((image) => (
            <img
              key={image.id}
              src={image.src}
              alt={image.altText}
              className=" w-[85%] shadow-2xl shadow-slate-400 sm:w-[320px] h-[18rem] md:w-[80%] md:h-60 lg:h-[170%] lg:w-[60%]"
            />
          ))}
        </div>
      </div>
    </>
  );
}

export function Page() {
  return (
    <>
      <div className=" bg-white h-[auto] md:h-[400px] w-[90%]  md:w-[85%] mx-auto md:px-0 py-6 md:border-2 mt-10 ">
        <h1 className=" text-zinc-700 text-2xl font-semibold md:px-9">
          Our Story
        </h1>
        <h1 className=" text-2xl md:text-3xl font-normal text-zinc-900 pt-4 md:px-9">
          Handshake infographic mass market crowdfunding iteration.
        </h1>
        <p className=" text-lg text-zinc-800 font-medium pt-9 md:px-9">
          Conversion angel investor entrepreneur first mover advantage.
          Handshake infographic mass market crowdfunding iteration. Traction
          stock user experience deployment beta innovator incubator focus. Sales
          user experience branding growth hacking holy grail monetization
          conversion prototype stock network effects. Learning curve network
          effects return on investment bootstrapping business-to-consumer.
        </p>
      </div>
    </>
  );
}
export function Page2() {
  const Div = [
    { id: 0, number: "120m", text: "Cool feature title" },
    { id: 1, number: "10.000", text: "Cool feature title" },
    { id: 2, number: "240", text: "Cool feature title" },
  ];
  return (
    <>
      <div className=" bg-sky-950 h-[fit-content] w-[100%] py-10 md:w-[95%] mx-auto mt-10 md:px-10 rounded-lg">
        <h1 className=" text-white text-2xl font-semibold pt-5 md:px-9  px-4 ">
          Our numbers
        </h1>
        <h1 className=" text-4xl font-normal text-white pt-4 md:px-9 px-4">
          Handshake infographic mass market crowdfunding iteration.
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 place-content-center mt-8">
          {Div.map((div) => (
            <div
              key={div.id}
              className=" flex justify-center items-center flex-col px-8 w-[100%] h-[200px] md:h-[200px]"
            >
              <h1 className=" text-green-500 text-5xl font-medium pb-2">
                {div.number}
              </h1>
              <p className=" text-white text-lg font-normal">{div.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export function Team() {
  const Images = [
    {
      id: 0,
      altText: "images",
      src: image1,
      paragraph: "General Manager",
      heading: "Michael Scott",
    },
    {
      id: 1,
      altText: "images",
      src: Teamimage2,
      paragraph: "General Manager",
      heading: "Dwight Schrute",
    },
    {
      id: 2,
      altText: "images",
      src: Teamimage3,
      paragraph: "General Manager",
      heading: "Pam Beetsley",
    },
  ];
  return (
    <>
      <div className="  bg-white h-[auto] md:h-[650px] lg:h-[700px] w-[90%]  md:w-[90%] mx-auto md:px-0 py-6 my-10">
        <h1 className=" text-zinc-700 text-2xl font-semibold px-5 md:px-10">
          Our Team
        </h1>
        <h1 className=" text-4xl font-normal text-zinc-900 px-4 pt-4 md:px-10">
          The leadership team
        </h1>
        <p className=" text-lg text-zinc-800 font-medium px-4 pt-5 md:px-9">
          Conversion angel investor entrepreneur first mover advantage.
          Handshake infographic mass market crowdfunding iteration. Traction
          stock user experience deployment beta innovator incubator focus.
        </p>
        <div className=" w-[100%] h-[auto] grid grid-cols-1 place-content-center place-items-center md:grid-cols-3 gap-5 md:gap-2 lg:gap-5 ">
          {Images.map((image) => (
            <div key={image.id} className=" mt-5">
              <img
                src={image.src}
                alt={image.altText}
                className=" w-[300px] h-[300px] shadow-zinc-500 hover:shadow-2xl transition-all"
              />
              <h1 className=" text-center font-medium text-2xl text-zinc-900 pt-3">
                {image.heading}
              </h1>
              <p className=" text-center text-lg text-zinc-900 font-normal">
                {image.paragraph}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export function Values() {
  const Images = [
    {
      id: 0,
      altText: "images",
      src: valueimage1,
      paragraph: "General Manager",
      heading: "We are responsible.",
    },
    {
      id: 1,
      altText: "images",
      src: image2,
      paragraph: "General Manager",
      heading: "We are commited.",
    },
    {
      id: 2,
      altText: "images",
      src: image4,
      paragraph: "General Manager",
      heading: "We aim for progress.",
    },
  ];
  return (
    <>
      <div className=" bg-sky-950 w-[100%] md:w-[95%] h-[auto] mx-auto mt-2 py-8 rounded-lg ">
        <h1 className=" text-white text-2xl font-semibold px-5 md:px-10 ">
          Our Values
        </h1>
        <h1 className=" text-4xl font-normal text-white px-4 pt-4 md:px-10">
          Things in we believe
        </h1>
        <p className=" text-lg text-white font-medium px-4 pt-9 md:px-9">
          Conversion angel investor entrepreneur first mover advantage.
          Handshake infographic mass market crowdfunding iteration. Traction
          stock user experience deployment beta innovator incubator focus.
        </p>
        <div className=" mt-10 w-[80%] flex gap-4 md:gap-10 flex-col mx-auto">
          {Images.map((image) => (
            <div
              key={image.id}
              className=" flex justify-center items-center flex-col md:flex-row  w-[100%] "
            >
              <div className=" w-[100%] md:w-[50%]">
                <img
                  src={image.src}
                  alt=""
                  className=" w-[140px] right-0 h-[140px]"
                />
              </div>
              <div className=" w-[100%] mt-5 md:mt-0  md:w-[50%]">
                <h1 className=" text-white text-2xl font-semibold ">
                  {image.heading}
                </h1>
                <p className="text-lg text-white font-normal pt-4  ">
                  Conversion angel investor entrepreneur first mover advantage.
                  Handshake infographic mass market crowdfunding iteration.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export function CallToAction() {
  return (
    <>
      <div className="bg-sky-950  h-[auto] w-[100%] sm:w-[95%] md:w-[90%] py-10 mx-auto mt-10 rounded-lg">
        <div>
          <h1 className=" text-white text-4xl font-medium text-center px-2 sm:px-4 pt-8 ">
            An enterprise template to ramp up your company website
          </h1>
        </div>
        <div>
          <form className=" mx-auto w-[50%] mt-16 flex flex-col justify-center items-center gap-4 md:flex-row">
            <input
              type="email"
              placeholder="Your email address"
              className=" py-4 px-3 placeholder:text-black placeholder:text-base bg-slate-100 rounded-full w-[300px] h-[45px]"
            />
            <input
              type="button"
              value={"Start now"}
              className="  bg-green-400  h-10 w-[130px] rounded-full text-lg font-semibold  hover:bg-slate-300 text-black"
            />
          </form>
        </div>
      </div>
    </>
  );
}

export function Footer() {
  const ShortLinks = [
    {
      id: 0,
      Heading: "Landings",
      paragraph: "HOME",
      paragraph2: "Products",
      paragraph3: "Services",
    },
    {
      id: 1,
      Heading: "Company",
      paragraph: "Home",
      paragraph2: "Careers",
      paragraph3: "Services",
    },
    {
      id: 2,
      Heading: "Resources",
      paragraph: "Blog",
      paragraph2: "Products",
      paragraph3: "Services",
    },
  ];
  return (
    <>
      <footer className=" bg-indigo-100 w-[100%] md:w-[95%]  mt-10  sm:w-[95%] h-auto px-7 py-10 mx-auto grid grid-cols-1 lg:place-items-center place-content-center  sm:grid-cols-2 lg:grid-cols-4">
        <div className="md:mb-3">
          <div className="flex p-2 gap-1">
            <div className="">
              <div className=" bg-sky-950 h-4 w-5 rounded-r-lg mb-1"></div>
              <div className=" bg-sky-950 h-5 w-[1.8rem] rounded-r-lg"></div>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-sky-950 md:pt-0 pt-1 pl-1">
              Boldo
            </h1>
          </div>
          <p className=" text-zinc-800 font-medium text-base pt-3">
            Social media validation business model canvas graphical user
            interface launch party creative facebook iPad twitter.
          </p>
          <p className="text-zinc-700 font-medium text-base pt-3 underline">
            All rights reserved.
          </p>
        </div>
        {ShortLinks.map((Links) => (
          <div key={Links.id} className="flex flex-col flex-grow">
            <h1 className=" text-sky-950 text-2xl font-medium  pb-5 pt-2">
              {Links.Heading}
            </h1>
            <p className=" text-base font-medium text-zinc-800 uppercase py-2 lg:py-3 pl-1">
              {Links.paragraph}
            </p>
            <p className=" text-base font-medium text-zinc-800 uppercase py-2 lg:py-3 pl-1">
              {Links.paragraph2}
            </p>
            <p className=" text-base font-medium text-zinc-800 uppercase py-2 lg:py-3 pl-1">
              {Links.paragraph3}
            </p>
          </div>
        ))}
      </footer>
    </>
  );
}
