import React from "react";
import SecondaryButton from "../common/SecondaryButton";
import HeroVide from "../../assets/heroVideo.mp4";
import Crad from "../home/Card";
import contract from "../../assets/card1.jfif";
import Accredited from "../../assets/card2.jfif";
import Highly from "../../assets/card3.jfif";

import hero2 from "../../assets/hero2.jpg";
import dedication from "../../assets/ourDedication.png";
import quality from "../../assets/quality.png";

const cards = [
  {
    image: contract,
    title: "Contract Manufacturing",
    description:
      "Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.",
  },
  {
    image: Accredited,
    title: "Accredited Contract Development",
    description:
      "Professional business coach with advanced experience on growth and business scaling.",
  },
  {
    image: Highly,
    title: "Highly Qualified Team",
    description:
      "Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.",
  },
];

const Hero = () => {
  return (
    <div className="mx-auto relative py-20 container h-[100%] heroBg">
      <div className="flex justify-center items-center gap-x-8 h-[100%]">
        {/* left */}
        <div className="w-1/2">
          <h1 className="text-6xl uppercase font-bold">
            Welcome to our ONCO Division
          </h1>
          <p className="w-[80%] my-2 mb-8">
            Welcome to our Onco division. We are a team of dedicated
            professionals committed to bringing cutting-edge solutions and
            therapies to the fight against cancer.
          </p>
          <SecondaryButton className={"my-8"}>Know More</SecondaryButton>
        </div>
        {/* right */}
        <div className="w-1/2 overflow-hidden rounded-3xl">
          <video src={HeroVide}></video>
        </div>
      </div>
      <div className="w-8 h-12 rounded-full border-2 border-gray-500 mx-auto relative scrollAnim"></div>

      <div className="w-full py-[8vw]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8   overflow-x-hidden">
          {cards.map((card, index) => (
            <Crad
              key={index}
              image={card.image}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center gap-x-14">
        {/* left */}
        <div className="w-1/2 ">
          <h2 className="text-4xl font-semibold mb-2">
            OFFERING EXCEPTIONAL EMINENCE AND PROTECTION FOR WELL-BEING
          </h2>
          <p>
            MHJ PHARMACONCEPTS is a company that has been accredited by WHO-GMP,
            and is involved in fulfilling medical requirements across the world
            by offering a range of top-grade medical products that are aimed at
            enhancing the quality of life. <br />
            We thrive in the direction of development in a way where we can
            bring bold competition to some of the world's most expensive
            medicines by developing generics. <br /> <br /> Therefore, we are
            facilitating access to superior class of generic medicines for a
            greater number of patients around the world with critical ailments.
            We also provide access to our high-quality and finest generic
            versions of our medications to the entire world manufactured under
            most pioneered plant with highly trained professionals who follow
            EU-GMP, PIC/s, US-FDA and TGA-AUSTRALIA standards. <br /> <br />
            As a result, we have been trusted by health care proficient and
            patients across the globe over the years.
          </p>
        </div>
        {/* Right */}
        <div className="overflow-hidden rounded-md w-1/2">
          <img src={hero2} alt={hero2} className="  rounded-md" />
        </div>
      </div>
      <div className="flex justify-center items-center gap-x-14 my-[5vw]">
        <div className="overflow-hidden rounded-md w-1/2">
          <img src={dedication} alt={dedication} className="  rounded-md" />
        </div>
        <div className="w-1/2 ">
          <h2 className="text-4xl font-semibold mb-2">
            OUR DEDICATION TO SCIENCE STEMS FROM OUR DESIRE TO IMPROVE SOCIETY
          </h2>

          <p className="text-gray-700 mt-2">
            An extensive range of prescription drugs and over the counter
            medications are manufactured at our manufacturing plant, with an
            outsized product portfolio of over 500 molecules in Tablets,
            Capsules (Soft & Hard Gelatin), Injections (Dry Powders, Liquid &
            PFS), Oral Liquids, Ointments, and Sachets. MHJ PHARMACONCEPTS is
            also based in the United States and United Kingdom, and has overseas
            branches in Delaware and London respectively. We have prolonged our
            presence in key markets of AFRICA, CIS and LATAM, among other rising
            economies to make healthcare more affordable globally.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-x-14 my-[5vw]">
        <div className="w-1/2 ">
          <h2 className="text-4xl font-semibold mb-2">Quality Assurance</h2>
          <h4 className="font-semibold text-xl">Reliable & Efficient Team</h4>
          <p className="text-gray-700 mt-2 b-2">
            MHJ Pharmaconcepts is a pharmaceutical company that is committed to
            maintaining a high standard in their manufacturing process. They
            have a well-equipped laboratory that conducts a thorough examination
            of all raw materials including Active Pharmaceutical Ingredients
            (APIs), Excipients, and packaging materials. The examination
            involves rigorous physical, microbiological and instrumental
            testing, as well as feasible interface control to ensure the quality
            of their products.
          </p>
          <SecondaryButton className={"my-8"}>Know More</SecondaryButton>
        </div>
        <div className="overflow-hidden rounded-md w-1/2">
          <img src={quality} alt={quality} className="  rounded-md" />
        </div>
      </div>
      {/* Infinity horizontal scroll */}
      <div>
        <h3 className="text-3xl text-center w-1/2 mx-auto mt-10">Approval and clearance from international regulatory bodies.</h3>
        <div></div>
      </div>
    </div>
  );
};

export default Hero;
