interface Button {
  action?: any;
  text: string;
  type: 'cta' | 'link';
  size: 'small' | 'static' | 'flex';
  linked?: boolean;
  link?: string;
}
function Button({
  text = 'Button',
  action,
  type = 'cta',
  size = 'static',
  linked = false,
  link = '',
}: Button) {
  const buttonClass = `f-h3 btn ${type} ${size}`;

  return (
    <>
      {linked ? (
        <a className={buttonClass} href={link} target='_blank'>
          {text}
        </a>
      ) : (
        <button className={buttonClass} onClick={action}>
          {text}
        </button>
      )}
    </>
  );
}

export default Button;
