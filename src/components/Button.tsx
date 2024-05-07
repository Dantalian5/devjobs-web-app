import { Link } from "react-router-dom";
import React from "react";

interface Button extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  handleClick?: any;
  text: string;
  size: "small" | "static" | "flex";
  linked?: boolean;
  link?: string;
  isLink: boolean;
}

function Button({
  text,
  isLink = true,
  size = "static",
  handleClick,
  linked = false,
  link = "",
}: Button) {
  const buttonClass = `f-h3 btn ${isLink} ${size}`;

  return (
    <>
      {linked ? (
        <Link className={buttonClass} target="_blank" to={link}>
          {text}
        </Link>
      ) : (
        <button className={buttonClass} onClick={handleClick}>
          {text}
        </button>
      )}
    </>
  );
}

export default Button;
//
// - camelCase at function names
//
// - absense of h1
