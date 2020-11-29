import Image from "next/image";

const GRAVATAR_URL =
  "https://www.gravatar.com/avatar/15cb4683f9aa1f015998d230b61b0ef7?s=200";

const Index = () => (
  <div className="h-36 w-36 md:w-48 md:h-48 mb-6 md:mb-12">
    <Image
      alt={"Headshot"}
      src={GRAVATAR_URL}
      layout={"responsive"}
      loading="eager"
      width={150}
      height={150}
      className="object-cover rounded-full"
    />
  </div>
);

export default Index;
