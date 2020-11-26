import { useCallback, useEffect, useState } from "react";

const DarkModeSwitch = () => {
  const [active, setActive] = useState(false);

  const toggleActive = useCallback(() => setActive((current) => !current), []);

  useEffect(() => {
    if (active) {
      // @ts-ignore
      document?.querySelector("html").classList.add("dark");
    } else {
      // @ts-ignore
      document?.querySelector("html").classList.remove("dark");
    }
  }, [active]);

  return (
    <div
      className="absolute top-0 right-0 mr-4 mt-4 w-12 h-8 flex items-center rounded-full p-1 bg-gray-800 dark:bg-gray-200"
      onClick={toggleActive}
    >
      <div
        className={`w-6 h-6 rounded-full shadow-sm duration-300 ease-in-out bg-gray-200 dark:bg-gray-800 ${
          active && "transform translate-x-4"
        }`}
      />
    </div>
  );
};

export default DarkModeSwitch;
