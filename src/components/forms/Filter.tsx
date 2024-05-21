import { useState } from 'react';
import Button from '@/components/common/Button';
import Input from '@/components/forms/Input';
import CheckBox from '@/components/forms/CheckBox';
import { useFilterStore } from '@/store/filter.store';
import { svgSearch, svgLocation, svgFilter } from '@/utils/SvgIcon';
import type { Filter } from '@/types/filter';

const Filter = () => {
  const { filter, updateFilter } = useFilterStore();
  const [input, setInput] = useState<Filter>(filter);
  const [showOverlay, setShowOverlay] = useState<boolean>(false);

  return (
    <div className='filter__wrapper'>
      <form
        role='search'
        className='filter'
        onSubmit={(e) => {
          e.preventDefault();
          setShowOverlay(false);
          updateFilter(input);
        }}
      >
        <div className='filter__title-section'>
          <Input
            icon={svgSearch}
            iconSize='1.5rem'
            iconClass='hidden-on-mobile'
            id='finderInput'
            value={input.title}
            onChange={(e) =>
              setInput((prev) => ({ ...prev, title: e.target.value }))
            }
            aria-label='Filter by title'
            placeholder='Filter by title...'
          />
        </div>
        <div
          className={`filter__extras-section ${showOverlay && 'overlay-active'}`}
          aria-expanded={showOverlay}
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
            <Input
              icon={svgLocation}
              iconSize='1rem'
              iconClass='hidden-on-mobile'
              className='extras-section__location'
              id='finderInputLocation'
              type='text'
              value={input.location}
              onChange={(e) =>
                setInput((prev) => ({ ...prev, location: e.target.value }))
              }
              aria-label='Filter by location'
              placeholder='Filter by location...'
            />
            <div className='extras-section__separator'></div>
            <CheckBox
              label1='Full Time'
              label2='Only'
              className='extras-section__full-time'
              isChecked={input.time}
              id='inputTime'
              onChange={() =>
                setInput((prev) => ({ ...prev, time: !prev.time }))
              }
            />
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
            type='button'
          />
          <Button
            innerIcon={svgSearch}
            type='submit'
            size='sm'
            colors='search'
          />
        </div>
      </form>
    </div>
  );
};

export default Filter;
