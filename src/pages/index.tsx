import Avatar from '../components/Avatar';
import SocialIconRow from '../components/SocialIconRow';

const Index = () => (
  <div className="md:container md:mx-auto flex items-center justify-center text-gray-800 dark:text-gray-200 ease-in-out">
    <div className="min-h-screen min-w-full py-6 flex flex-col align-center items-center justify-center">
      <div className="max-w-md mx-auto overflow-hidden md:max-w-2xl">
        <div className="md:flex m-8">
          <Avatar />
          <div className="md:ml-8 mt-8 md:mt-0 text-center md:text-left">
            <h1 className="text-5xl">Colin Hoernig</h1>
            <h2 className="text-3xl text-gray-600 dark:text-gray-400">
              Engineering Leader{' '}
              <a href="https://tackle.io">
                <span className="font-semibold">@</span>
                <span className="border-b-2 border-gray-300">tackle.io</span>
              </a>
            </h2>
            <h3 className="mt-4 md:mt-8 mb-6 md:mb-10 text-xl text-gray-600 dark:text-gray-400">
              Building high performing engineering teams and software along the
              way.
            </h3>
            <SocialIconRow />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Index;
