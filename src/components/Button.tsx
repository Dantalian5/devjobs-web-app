import { Link } from "react-router-dom";

interface Button {
  action?: any;
  text: string;
  type: "cta" | "link";
  size: "small" | "static" | "flex";
  linked?: boolean;
  link?: string;
}
function Button({
  text = "Button",
  action,
  type = "cta",
  size = "static",
  linked = false,
  link = "",
}: Button) {
  const buttonClass = `f-h3 btn ${type} ${size}`;

  return (
    <>
      {linked ? (
        <Link className={buttonClass} target="_blank" to={link}>
          {text}
        </Link>
      ) : (
        <button className={buttonClass} onClick={action}>
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
