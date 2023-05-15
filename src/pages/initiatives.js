import {
  bunmi,
  heroImage,
  projectImages,
  quoteRight,
  solarPanel,
  schneider,
  asohon,
  sdg,
} from "@/assets";
import Accordion from "@/components/Accordion";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

function ourinitiatives() {
  const router = useRouter();
  return (
    <div className="">
      <div className="bg-black h-[600px]">
        <Navbar />
        <div className="absolute top-72 left-48 text-white">
          <h1 className="font-semibold text-6xl w-3/4">
            Project Catalyze: Catalyzing the leaders of tomorrow for growth
          </h1>

          <button
            onClick={() => router.push("/donate")}
            className="py-5 px-10 bg-white text-black mt-20 font-bold text-xl rounded"
          >
            Support Us
          </button>
        </div>
      </div>
      <div className="flex mt-20 space-x-5 px-48">
        <div className="flex space-x-5">
          <div className="left">
            <div className="space-y-5">
              <div
                style={{ fontWeight: "bolder" }}
                className="bg-[#89347E] text-white py-16 px-5 w-[400px]"
              >
                <Image src={solarPanel} alt="" className="h-32 w-32 mb-10" />
                <h1 className="mb-10 text-3xl">Increased safety</h1>
                <p className="text-lg">
                  Energy access can improve safety by providing light and
                  reducing the need for dangerous fuels like kerosene.
                </p>
              </div>
              <div
                style={{ fontWeight: "bolder" }}
                className="bg-gray-200 text-black py-16 px-5 w-[400px]"
              >
                <Image src={solarPanel} alt="" className="h-32 w-32 mb-10" />
                <h1 className="mb-10 text-3xl">Education opportunities</h1>
                <p className="text-lg">
                  Energy access can provide light for studying and improve
                  access to information and communication technologies,
                  increasing educational opportunities for orphans.
                </p>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="space-y-5">
              <div
                style={{ fontWeight: "bolder" }}
                className="bg-gray-200 text-black py-16 px-5 w-[400px]"
              >
                <Image src={solarPanel} alt="" className="h-32 w-32 mb-10" />
                <h1 className="mb-10 text-3xl">Improved Health</h1>
                <p className="text-lg">
                  Energy access can improve access to clean water, refrigeration
                  for food storage, and better hygiene, leading to improved
                  health outcomes for orphans.
                </p>
              </div>
              <div
                style={{ fontWeight: "bolder" }}
                className="bg-[#89437e] text-white py-16 px-5 w-[400px]"
              >
                <Image src={solarPanel} alt="" className="h-32 w-32 mb-10" />
                <h1 className="mb-10 text-3xl">Economic empowerment</h1>
                <p className="text-lg">
                  Energy access can provide a source of income for orphans
                  through micro-enterprises and other economic activities.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* About the initiative */}
        <div className="mt-20 px-10">
          <div className="mb-10">
            <h1 style={{ fontWeight: "bolder" }} className="text-4xl mb-16">
              CSR initiative to bring solar power to orphanages
            </h1>
            <p className="text-lg mr-10">
              At Gridcrux, we believe that access to clean and sustainable
              energy is a basic human right.
              <br /> With this initiative, we will be installing
              state-of-the-art inverters in orphanages across Nigeria, providing
              a reliable source of electricity for the children and staff.
            </p>
          </div>

          {/* Image, quote and signature */}
          <div className="flex">
            <Image
              src={bunmi}
              alt=""
              className="aspect-square w-40 h-40
                w-50 object-contain rounded-full"
            />

            <div className="ml-10">
              <Image
                src={quoteRight}
                alt=""
                height={100}
                width={100}
                className="mb-10"
              />
              <p className="text-lg mb-10">
                We are dedicated to ensuring that there is energy equity across
                all forms, works and strata of life. Our children must not be
                left out. They must be encouraged to innovate and deliver
                solutions that will also combat unforeseen challenges to come.
              </p>
              {/* Signature */}
              {/* <Image /> */}
            </div>
          </div>
        </div>
      </div>
      {/*Image Gallery*/}
      <div className="mt-20  ml-20">
        <h1 className="text-5xl mb-10">Project Gallery</h1>
        <div className="flex space-x-10  items-center">
          {projectImages.map((image) => (
            <div className="w-80">
              <Image
                src={image}
                height={400}
                width={400}
                // style={{ borderRadius: "50%" }}
              />
              <h1>Orphanage name</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
                laboriosam excepturi error tempora dignissimos labore
                repudiandae similique architecto, porro quos, magni voluptatem,
                quae earum ipsam at voluptate ut quisquam ab.
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-10 ml-32 mr-48">
        {/*Partners */}
        <div className="bg-gray-200 px-10 py-10 space-y-10 mr-10">
          <h1 style={{ fontStyle: "bolder" }} className="text-2xl mt-10">
            Partners
          </h1>
          <Image src={schneider} alt="" />
          <Image src={asohon} alt="" />
          <Image src={sdg} alt="" />
        </div>

        {/*Goals*/}
        <div className="bg-[#89437e] text-white text-xl py-10 px-10 w-[700px]">
          <h1 style={{ fontWeight: "bolder" }} className="text-5xl mb-10">
            Our mission
          </h1>
          <p className="mb-10">
            Project Catalyze’s goal is to reduce overall cost of power so the
            savings can be utilized for the children’s education, food and
            healthcare, ultimately leading to:
          </p>
          <ul className="list-disc space-y-5">
            <li>Conducive living environment</li>
            <li>Improved learning opportunities</li>
            <li>Equal learning opportunities</li>
            <li>Reduced Power cost</li>
            <li>Savings on orphanage running cost</li>

            <li>Improved access to indoor entertainment</li>
            <li>Improved psychological well being</li>
            <p className="mt-10">
              A gift from you can make a real difference and impact positively
              on so many people’s lives.
            </p>
          </ul>
          <button className="bg-white mt-16 py-5 px-10 text-[#89347e] rounded-[60px]">
            Donate Today!
          </button>
        </div>
      </div>

      {/*FAQ */}
      <div>
        <div>image</div>
        <div>
          <h1>Questions People Ask</h1>
          <Accordion />
        </div>
      </div>
    </div>
  );
}

export default ourinitiatives;
