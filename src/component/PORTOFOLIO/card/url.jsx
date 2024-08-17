import { ArrowRight, GithubLogo } from "@phosphor-icons/react";

const Url = ({ item }) => {
  return (
    <a target="_blank" href={item} className="flex justify-center items-center gap-1 border-b border-treed">
      visit{" "}
      <span>
        <ArrowRight size={16} />
      </span>
    </a>
  );
};

export default Url;
