import Image from "next/image";

import SocialIconRow from "../components/SocialIconRow";
import DarkModeSwitch from "../components/DarkModeSwitch";

const GRAVATAR_URL =
  "https://www.gravatar.com/avatar/15cb4683f9aa1f015998d230b61b0ef7?s=200";

const Index = () => (
  <div className="md:container md:mx-auto flex items-center justify-center text-gray-800 dark:text-gray-200 ease-in-out">
    <div className="min-h-screen py-6 flex flex-col align-center items-center justify-center">
      <div className="h-36 w-36 md:w-48 md:h-48 mb-6 md:mb-12">
        <Image
          alt={"Headshot"}
          src={GRAVATAR_URL}
          layout={"responsive"}
          width={150}
          height={150}
          className="object-cover rounded-full"
        />
      </div>
      <h1 className="text-4xl md:text-6xl">Colin Hoernig</h1>
      <h2 className="text-lg md:text-3xl text-gray-600 dark:text-gray-400">
        Tech Lead Manager,{" "}
        <a href="https://tackle.io">
          <span className="font-semibold">@</span>
          <span className="border-b-2 border-gray-300">tackle.io</span>
        </a>
      </h2>
      <h3 className="mt-4 md:mt-8 mb-6 md:mb-10 px-12 text-md md:text-xl text-center text-gray-600 dark:text-gray-400">
        Building high performing engineering teams and software along the way.
      </h3>
      <SocialIconRow />
    </div>
    <DarkModeSwitch />
  </div>
);

export default Index;
