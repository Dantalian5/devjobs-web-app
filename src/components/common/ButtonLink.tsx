// interface LinkProps extends React.ComponentPropsWithoutRef<'a'> {
//   children: React.ReactNode | string;
//   isLink: boolean;
//   size: 'small' | 'static' | 'flex';
//   link: string;
// }
// function Button(props: LinkProps) {
//   const { children, isLink, size, link, ...rest } = props;
//   const buttonClass = `f-h3 btn ${isLink ? 'link' : 'cta'} ${size}`;
//   return (
//     <a className={buttonClass} href={link} target='_blank' {...rest}>
//       {children}
//     </a>
//   );
// }

// export default Button;

interface LinkProps extends React.ComponentPropsWithoutRef<'a'> {
  innerText?: string;
  innerIcon?: React.ReactNode;
  colors: 'cta' | 'link' | 'filter' | 'search';
  size: 'sm' | 'base' | 'lg' | 'flexible';
}
const ButtonLink = (props: LinkProps) => {
  const { innerText, innerIcon, colors, size, className, ...rest } = props;
  return (
    <a
      className={`btn btn__${colors} btn__${size} ${className || ''}`.trim()}
      {...rest}
    >
      {innerIcon}
      {innerText && <span className='f-h3'>{innerText}</span>}
    </a>
  );
};

export default ButtonLink;
