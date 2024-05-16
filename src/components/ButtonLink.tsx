interface LinkProps extends React.ComponentPropsWithoutRef<'a'> {
  children: React.ReactNode | string;
  isLink: boolean;
  size: 'small' | 'static' | 'flex';
  link: string;
}
function Button(props: LinkProps) {
  const { children, isLink, size, link, ...rest } = props;
  const buttonClass = `f-h3 btn ${isLink ? 'link' : 'cta'} ${size}`;
  return (
    <a className={buttonClass} href={link} target='_blank' {...rest}>
      {children}
    </a>
  );
}

export default Button;
