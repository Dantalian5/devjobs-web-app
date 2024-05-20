interface CtaProps extends React.ComponentPropsWithoutRef<'button'> {
  innerText?: string;
  innerIcon?: React.ReactNode;
  colors: 'cta' | 'link' | 'filter' | 'search';
  size: 'sm' | 'base' | 'lg' | 'flexible';
}
const Button = (props: CtaProps) => {
  const { innerText, innerIcon, colors, size, className, ...rest } = props;
  return (
    <button
      className={`btn btn__${colors} btn__${size} ${className || ''}`.trim()}
      {...rest}
    >
      {innerIcon}
      {innerText && <span className='f-h3'>{innerText}</span>}
    </button>
  );
};

export default Button;
