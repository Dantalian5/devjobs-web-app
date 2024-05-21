import { svgCheck } from '@/utils/SvgIcon';
interface CheckboxProps extends React.ComponentPropsWithoutRef<'input'> {
  label1?: string;
  label2?: string;
  isChecked: boolean;
}
const CheckBox = (props: CheckboxProps) => {
  const { label1, label2, className, isChecked, ...rest } = props;
  return (
    <div className={className} role='search'>
      <label className='input'>
        <input
          type='checkbox'
          name='checkbox'
          className='input__checkbox'
          checked={isChecked}
          aria-checked={isChecked}
          {...rest}
        />
        <span className='input__check f-body'>{isChecked && svgCheck}</span>
        <span className='checkbox-label__text f-h3'>
          {label1} <span> {label2}</span>
        </span>
      </label>
    </div>
  );
};

export default CheckBox;
