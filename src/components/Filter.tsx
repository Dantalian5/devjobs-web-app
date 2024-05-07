import * as Checkbox from "@radix-ui/react-checkbox";
import Button from "@/components/Button";
import { svgCheck, svgLocation, svgSearch } from "@/utils/SvgIcon";
import { useForm } from "react-hook-form";
import { FilterObj } from "@/type/jobs";
import { useJobsStore } from "@/store/jobs.store.ts";

function Filter() {
  const { input, setInput } = useJobsStore();

  const { register, handleSubmit } = useForm<FilterObj>();
  const submit = (formData: FilterObj): void => {
    setInput(formData);
  };

  return (
    <form className="filter" onSubmit={handleSubmit(submit)}>
      <div className="filter__title-section">
        <div className="input">
          <div className="input__icon filter__search-icon">{svgSearch}</div>
          <div className="input__wrapper f-body">
            <input
              className="input__input"
              id="title"
              type="text"
              {...register("title")}
              onChange={(event) =>
                setInput({ ...input, title: event.target.value })
              }
            />
            <label className={"input__label"} htmlFor="title">
              Filter by title:
            </label>
          </div>
        </div>
      </div>
      <div className={`filter__extras-section overlay-active`}>
        <div className="extras-section">
          <div className="extras-section__separator inner-sep"></div>
          <div className="input extras-section__location">
            <div className="input__icon">{svgLocation}</div>
            <div className="input__wrapper f-body">
              <input
                className="input__input "
                id="location"
                type="text"
                {...register("location")}
                onChange={(event) =>
                  setInput({ ...input, location: event.target.value })
                }
              />
              <label className={"input__label"} htmlFor="location">
                Filter by location:
              </label>
            </div>
          </div>
          <div className="extras-section__separator"></div>
          <div className="input extras-section__full-time">
            <Checkbox.Root
              {...register("time")}
              id="time"
              name="time"
              className="input__checkbox"
            >
              <Checkbox.CheckboxIndicator>
                {svgCheck}
              </Checkbox.CheckboxIndicator>
            </Checkbox.Root>
            <label htmlFor="time" className="input__label-check f-h3">
              Full Time Only
            </label>
          </div>
          <Button
            isLink={false}
            onClick={handleSubmit(submit)}
            text="Search"
            type="submit"
            size="flex"
          />
        </div>
      </div>
    </form>
  );
}

export default Filter;
