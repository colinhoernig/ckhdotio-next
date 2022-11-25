import Image from 'next/image';

const GRAVATAR_URL =
  'https://www.gravatar.com/avatar/237464605b5b0822a189189ece47a09b?s=1000';

const Index = () => (
  <div className="object-cover md:h-full md:mt-2 w-100 flex items-center justify-center">
    <Image
      alt={'Headshot'}
      src={GRAVATAR_URL}
      loading="eager"
      width={300}
      height={300}
      className="object-cover rounded-full"
      style={{
        maxWidth: '100%',
        height: 'auto',
      }}
    />
  </div>
);

export default Index;
