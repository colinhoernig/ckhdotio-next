import SocialIconRow from "../components/SocialIconRow";
import DarkModeSwitch from "../components/DarkModeSwitch";

const Index = () => (
  <div className="md:container md:mx-auto flex items-center justify-center text-gray-800 dark:text-gray-200">
    <div className="min-h-screen py-6 flex flex-col align-center items-center justify-center sm:py-12">
      <img
        src="https://www.gravatar.com/avatar/15cb4683f9aa1f015998d230b61b0ef7?s=200"
        className="rounded-full h-36 w-36 mb-6"
      />
      <h1 className="text-6xl font-sans">Colin Hoernig</h1>
      <h2 className="text-xl">
        Tech Lead Manager,{" "}
        <a
          href="https://tackle.io"
          className="text-gray-800 dark:text-gray-200"
        >
          <span className="font-semibold">@</span>
          <span className="border-b-2">tackle.io</span>
        </a>
      </h2>
      <SocialIconRow />
    </div>
    <DarkModeSwitch />
  </div>
);

export default Index;
