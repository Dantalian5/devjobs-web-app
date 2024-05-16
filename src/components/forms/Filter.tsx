import { useState } from 'react';
import Button from '@/components/Button';
import { useFilterStore } from '@/store/filter.store';
import { svgCheck, svgSearch, svgLocation, svgFilter } from '@/utils/SvgIcon';
import type { Filter } from '@/types/filter';

function Filter() {
  const { filter, updateFilter } = useFilterStore();
  const [input, setInput] = useState<Filter>(filter);
  const [showOverlay, setShowOverlay] = useState<boolean>(false);

  return (
    <form
      className='filter'
      onSubmit={(e) => {
        e.preventDefault();
        updateFilter(input);
      }}
    >
      <div className='filter__title-section'>
        <div className='input'>
          <div className='input__icon filter__search-icon'>{svgSearch}</div>
          <input
            className='input__input f-body'
            id='finderInput'
            type='text'
            value={input.title}
            onChange={(e) =>
              setInput((prev) => ({ ...prev, title: e.target.value }))
            }
            aria-label='Filter by title'
            placeholder='Filter by title...'
          />
        </div>
      </div>
      <div
        className={`filter__extras-section ${showOverlay && 'overlay-active'}`}
        onClick={() => {
          setShowOverlay(false);
        }}
      >
        <div
          className='extras-section'
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className='extras-section__separator inner-sep'></div>
          <div className='input extras-section__location'>
            <div className='input__icon'>{svgLocation}</div>
            <input
              className='input__input f-body'
              id='finderInputLocation'
              type='text'
              value={input.location}
              onChange={(e) =>
                setInput((prev) => ({ ...prev, location: e.target.value }))
              }
              aria-label='Filter by location'
              placeholder='Filter by location...'
            />
          </div>
          <div className='extras-section__separator'></div>
          <label
            htmlFor='inputTime'
            className='input extras-section__full-time f-h3'
          >
            <input
              type='checkbox'
              id='inputTime'
              name='inputTime'
              className='input__checkbox'
              checked={input.time}
              onChange={() =>
                setInput((prev) => ({ ...prev, time: !prev.time }))
              }
            />
            <span className='input__check'>{svgCheck}</span>
            <p className='checkbox-label__text'>
              Full Time <span> Only</span>
            </p>
          </label>
          <Button
            innerText='Search'
            type='submit'
            size='flexible'
            colors='cta'
          />
        </div>
      </div>
      <div className='filter__btn-section'>
        <Button
          innerIcon={svgFilter}
          onClick={() => setShowOverlay(true)}
          size='sm'
          colors='filter'
        />
        <Button innerIcon={svgSearch} type='submit' size='sm' colors='search' />
      </div>
    </form>
  );
}

export default Filter;
