import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";

const Header = () => {
  return (
    <header
      className="h-[50px] shadow-md font-bold fixed top-0 left-0 right-0 text-primary backdrop-blur-sm"
      id="header"
    >
      <div className="container mx-auto h-full">
        <div className="flex justify-between items-center h-full">
          <h1 className="text-2xl text-primary">Rabani</h1>
          <div className="flex justify-center items-center gap-5">
            <a href="">
              <InstagramLogo size={32} />
            </a>
            <a href="">
              <YoutubeLogo size={32} />
            </a>
            <a href="">
              <LinkedinLogo size={32} />
            </a>
            <a href="https://github.com/konoham" target="_blank">
              <GithubLogo size={32} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
