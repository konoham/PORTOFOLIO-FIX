import { GithubLogo, InstagramLogo, LinkedinLogo, YoutubeLogo } from "@phosphor-icons/react";
import { nav } from "../HERO/navbar/Navbar";
import { useEffect, useState } from "react";
const navSocial = [
  {
    icon: <InstagramLogo size={32} />,
    url: "",
  },
  {
    icon: <YoutubeLogo size={32} />,
    url: "",
  },
  {
    icon: <LinkedinLogo size={32} />,
    url: "",
  },
  {
    icon: <GithubLogo size={32} />,
    url: "https://github.com/konoham",
  },
];

const Header = () => {
  const [view, setView] = useState(false);

  const handleView = () => {
    if (window.scrollY >= 500) {
      setView(true);
    } else {
      setView(false);
    }
  };

  window.addEventListener("scroll", handleView);

  return (
    <header className="h-[50px] shadow-md font-bold fixed top-0 left-0 right-0 text-primary backdrop-blur-sm" id="header">
      <div className="container mx-auto h-full">
        <div className="flex justify-between items-center h-full">
          <a href="/" className="text-2xl text-primary hover:text-second">
            Rabani
          </a>
          <div className={` ${view ? "flex justify-center items-center gap-5 " : "hidden"}`}>
            {nav.map((e, i) => (
              <a key={i} href={e.url} className="hover:text-second">
                {e.li}
              </a>
            ))}
          </div>
          <div className="flex justify-center items-center gap-5 ">
            {navSocial.map((e, i) => (
              <a key={i} href={e.url} className="hover:text-second">
                {e.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
