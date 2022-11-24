import Image from "next/image";

const GRAVATAR_URL =
  "https://www.gravatar.com/avatar/237464605b5b0822a189189ece47a09b?s=200";

const Index = () => (
  <div className="h-36 w-36 md:w-48 md:h-48 mb-6 md:mb-12">
    <Image
      alt={"Headshot"}
      src={GRAVATAR_URL}
      loading="eager"
      width={300}
      height={300}
      className="object-cover rounded-full"
      style={{
        maxWidth: "100%",
        height: "auto"
      }} />
  </div>
);

export default Index;
