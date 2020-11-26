import { FaGithub, FaLinkedin } from "react-icons/fa";

const SocialIconRow = () => (
  <div className="flex justify-center align-center mt-4 space-x-4">
    <a href="https://github.com/colinhoernig">
      <FaGithub className="h-8 w-8" />
    </a>
    <a href="https://linkedin.com/in/colinhoernig">
      <FaLinkedin className="h-8 w-8" />
    </a>
  </div>
);

export default SocialIconRow;
