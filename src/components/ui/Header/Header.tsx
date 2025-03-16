import React from "react";
import lunaEdgeLogo from "../../../assets/logos/LunaEdgeLogo.svg";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = "" }) => {
  return (
    <header
      className={`w-full bg-indigo-700 p-4 flex justify-center rounded-lg ${className}`}
    >
      <img src={lunaEdgeLogo} alt="Luna Edge Logo" className="h-8" />
    </header>
  );
};

export default Header;
