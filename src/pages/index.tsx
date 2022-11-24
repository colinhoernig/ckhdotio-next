import Avatar from "../components/Avatar";
import SocialIconRow from "../components/SocialIconRow";
import DarkModeSwitch from "../components/DarkModeSwitch";

const Index = () => (
  <div className="md:container md:mx-auto flex items-center justify-center text-gray-800 dark:text-gray-200 ease-in-out">
    <div className="min-h-screen py-6 flex flex-col align-center items-center justify-center">
      <Avatar />
      <h1 className="text-4xl md:text-6xl">Colin Hoernig</h1>
      <h2 className="text-lg md:text-3xl text-gray-600 dark:text-gray-400">
        Engineering Leader,{" "}
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
