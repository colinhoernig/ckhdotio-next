import { FaGithub, FaLinkedin } from "react-icons/fa";

const SocialIconRow = () => (
  <div className="flex justify-center align-center space-x-4">
    <a href="https://github.com/colinhoernig">
      <span className="sr-only">Follow @colinhoernig on GitHub</span>
      <FaGithub className="h-8 w-8" />
    </a>
    <a href="https://linkedin.com/in/colinhoernig">
      <span className="sr-only">Connect with colinhoernig on LinkedIn</span>
      <FaLinkedin className="h-8 w-8" />
    </a>
  </div>
);

export default SocialIconRow;
