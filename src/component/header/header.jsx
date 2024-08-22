import { GithubLogo, Hamburger, InstagramLogo, LinkedinLogo, List, YoutubeLogo } from "@phosphor-icons/react";
import { nav } from "../HERO/navbar/Navbar";
import { useEffect, useRef, useState } from "react";

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
  const sidebar = useRef(null);
  const triger = useRef(null);
  const handleClose = (event) => {
    if (sidebar.current && !sidebar.current.contains(event.target) && triger.current && !triger.current.contains(event.target)) {
      console.log("click window");

      setView(false);
    }
  };

  window.addEventListener("click", handleClose);

  const handleView = () => {
    if (window.screen.width > 390) {
      if (window.scrollY >= 500) {
        setView(true);
      } else {
        setView(false);
      }
    } else {
      return;
    }
  };

  console.log(window.screen.width);

  const setHandleView = () => {
    setView((prev) => !prev);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleView);
    return () => window.removeEventListener("scroll", handleView);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 h-[50px] ${view ? "bg-white shadow-md" : "bg-transparent shadow-none"}   text-primary backdrop-blur-sm md:h-[60px]`}>
      <div className="container mx-auto flex h-full anav items-center justify-between px-4 md:px-8">
        <a href="/" className="text-xl font-bold text-primary after:bg-second hover:text-second md:text-2xl">
          Rabani
        </a>

        <div
          ref={sidebar}
          className={`${
            view ? "flex md:scale-100" : "hidden md:scale-0"
          } absolute md:w-full md:ms-16 w-[200px] transition-all pt-8  right-0 top-full md:bg-transparent text-black md:text-primary md:static rounded-s-lg shadow-md md:h-full md:shadow-none bg-background h-svh flex-col md:pt-2 items-center gap-5 sm:flex-row sm:justify-center anav md:flex`}
        >
          {nav.map((e, i) => (
            <a key={i} href={e.url} className="text-sm font-semibold after: after:bg-second hover:text-second md:text-base">
              {e.li}
            </a>
          ))}
        </div>

        <div className="anav flex items-center justify-center gap-4">
          {navSocial.map((e, i) => (
            <a target="_blank" onClick={setHandleView} key={i} href={e.url} className="hover:text-second after:bg-second">
              {e.icon}
            </a>
          ))}
          <button onClick={setHandleView} ref={triger}>
            <List size={32} className="md:hidden block" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
