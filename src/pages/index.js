import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { heroImage, solarPanel1 } from "@/assets";
import {
  HandThumbUpIcon,
  LightBulbIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <div className="">
        <Image src={heroImage} className="relative h-screen" />
        <Navbar />
        <div className="absolute top-72 left-48 text-white">
          <h1 className="font-semibold text-6xl w-3/4">
            Democratizing energy access and management across Africa
          </h1>
          <p className="mt-16 text-2xl italic w-3/6">
            Africa has the richest solar resources in the world, yet installed
            only 5 gigawatts (GW) of solar PV, less than 1% of the global total
          </p>
          <button className="py-5 px-10 bg-red-400 mt-20 font-bold text-xl rounded">
            Read more
          </button>
        </div>
      </div>

      <div className="py-10">
        <div className="flex justify-around items-center px-20">
          <Image src={solarPanel1} alt="" className="h-[700px] w-auto " />
          <div>
            <h1
              style={{ fontWeight: "bolder" }}
              className="text-2xl mb-20 text-left"
            >
              WHAT MAKES US SPECIAL
            </h1>
            <div class="flex">
              <div>
                <div className="w-[400px] p-5 space-y-5">
                  <LightBulbIcon className="text-red-400 h-20" />
                  <h1>INNOVATION</h1>
                  <p>
                    Innovation drives everything that we do, our innovative
                    solutions ensure we remain at the forefront of technology
                    use, delivering optimum solutions across the entire energy
                    value chain
                  </p>
                </div>

                <div className="w-[400px] p-5 space-y-5">
                  <HandThumbUpIcon className="text-red-400 h-20" />
                  <h1>QUALITY</h1>
                  <p>
                    We do not compromise on quality and work with reputable
                    global OEMs to deliver world class solutions in a local
                    environment.
                  </p>
                </div>
              </div>
              <div>
                <div className="w-[400px] p-5 space-y-5">
                  <h1>CUSTOMER FIRST</h1>
                  <SupportAgentIcon
                    style={{ fontSize: 100 }}
                    className="text-red-400"
                  />
                  <p>
                    Our priority is our customers. We continually adapt our
                    strategies to ensure optimum delivery based on customer
                    feedback.
                  </p>
                </div>

                <div className="w-[400px] p-5 space-y-5">
                  <ScaleIcon className="text-red-400 h-20" />
                  <h1>INTEGRITY</h1>
                  <p>Our word is our bond, what we commit, we deliver.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>Get in touch</div>
      <div>solutions</div>
      <div>contact us</div>
    </div>
  );
}
