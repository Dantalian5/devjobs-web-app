import { useEffect, useState } from 'react';
import Button from '@/components/Button';
import { svgCheck, svgSearch, svgLocation, svgFilter } from '@/utils/SvgIcon';
type FilterObj = {
  title: string;
  location: string;
  time: boolean;
};

const handleBoxClick = (e: any) => {
  e.stopPropagation();
};

function Filter({ action }: any) {
  const [input, setInput] = useState<FilterObj>({
    title: '',
    location: '',
    time: false,
  });
  const [showOverlay, setShowOverlay] = useState<boolean>(false);

  function handleFocus(event: any) {
    event.target.classList.add('focus');
  }
  function handleBlur(event: any) {
    event.target.value === '' && event.target.classList.remove('focus');
  }
  function onSubmit(event: any) {
    event.preventDefault();
    action(input);
  }
  function onCheck() {
    setInput((prev) => ({ ...prev, time: !prev.time }));
  }
  useEffect(() => {
    action(input);
  }, [input.time]);
  const handleOverlayClick = () => {
    setShowOverlay(false);
  };
  return (
    <form className='filter' onSubmit={onSubmit}>
      <div className='filter__title-section'>
        <div className='input'>
          <div className='input__icon filter__search-icon'>{svgSearch}</div>
          <div className='input__wrapper f-body'>
            <input
              className='input__input'
              id='finderInput'
              type='text'
              value={input.title}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={(e) =>
                setInput((prev) => ({ ...prev, title: e.target.value }))
              }
            />
            <label className={'input__label'} htmlFor='finderInput'>
              Filter by title…
            </label>
          </div>
        </div>
      </div>
      <div
        className={`filter__extras-section ${showOverlay && 'overlay-active'}`}
        onClick={handleOverlayClick}
      >
        <div className='extras-section' onClick={handleBoxClick}>
          <div className='extras-section__separator inner-sep'></div>
          <div className='input extras-section__location'>
            <div className='input__icon'>{svgLocation}</div>
            <div className='input__wrapper f-body'>
              <input
                className='input__input '
                id='finderInputLocation'
                type='text'
                value={input.location}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={(e) =>
                  setInput((prev) => ({ ...prev, location: e.target.value }))
                }
              />
              <label className={'input__label'} htmlFor='finderInputLocation'>
                Filter by location…
              </label>
            </div>
          </div>
          <div className='extras-section__separator'></div>
          <div className='input extras-section__full-time'>
            <input
              type='checkbox'
              id='inputTime'
              name='inputTime'
              className='input__checkbox'
              checked={input.time}
              onChange={onCheck}
            />
            <div className='input__check' onClick={onCheck}>
              {svgCheck}
            </div>
            <label htmlFor='inputTime' className='input__label-check f-h3'>
              Full Time <span> Only</span>
            </label>
          </div>
          <Button action={onSubmit} text='Search' type='cta' size='flex' />
        </div>
      </div>
      <div className='filter__btn-section'>
        <button className='btn-filter' onClick={() => setShowOverlay(true)}>
          {svgFilter}
        </button>
        <button className='btn-search' type='submit'>
          {svgSearch}
        </button>
      </div>
    </form>
  );
}

export default Filter;
