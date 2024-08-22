import { ArrowRight, GithubLogo } from "@phosphor-icons/react";

const Url = ({ item }) => {
  return (
    <a target="_blank" href={item} className="flex justify-center items-center gap-1 border-b border-treed group">
      visit{" "}
      <span className="group-hover:ps-2 transition-all duration-300">
        <ArrowRight size={16} />
      </span>
    </a>
  );
};

export default Url;
