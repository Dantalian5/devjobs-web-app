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
