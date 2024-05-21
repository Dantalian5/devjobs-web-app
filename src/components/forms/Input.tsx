interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  icon?: React.ReactNode;
  iconSize?: string;
  iconClass?: string;
}

const Input = (props: InputProps) => {
  const { icon, iconSize, iconClass, className, ...rest } = props;
  return (
    <div className={`input ${className || ''}`.trim()}>
      {icon && (
        <div
          className={`input__icon ${iconClass || ''}`.trim()}
          style={{ fontSize: iconSize || '1rem' }}
        >
          {icon}
        </div>
      )}
      <input className='input__input f-body' type='text' {...rest} />
    </div>
  );
};

export default Input;
