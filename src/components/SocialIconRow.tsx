import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const SOCIAL_LINKS = {
  github: {
    service: "GitHub",
    url: "https://github.com/colinhoernig",
    handle: "@colinhoernig",
    srPretext: "View",
    icon: FaGithub,
  },
  twitter: {
    service: "Twitter",
    url: "https://twitter.com/colinhoernig",
    handle: "@colinhoernig",
    srPretext: "Follow",
    icon: FaTwitter,
  },
  linkedin: {
    service: "LinkedIn",
    url: "https://linkedin.com/in/colinhoernig",
    handle: "Colin Hoernig",
    srPretext: "Connect with",
    icon: FaLinkedin,
  },
};

const SocialIconRow = () => (
  <div className="flex justify-center align-center space-x-4">
    {Object.values(SOCIAL_LINKS).map((social) => (
      <a href={social.url} target="_blank">
        <span className="sr-only">
          {social.srPretext} {social.handle} on {social.service}
        </span>
        {social.icon({ className: "h-8 w-8" })}
      </a>
    ))}
  </div>
);

export default SocialIconRow;
