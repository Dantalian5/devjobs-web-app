import {useState, useEffect} from 'react';
import Button from './Button';

type FilterObj = {
	title: string;
	location: string;
	time: boolean;
};

const iconFilter: any = (
	<svg
		width="1em"
		height="1em"
		viewBox="0 0 20 20"
		xmlns="http://www.w3.org/2000/svg">
		<path
			d="M19.108 0H.86a.86.86 0 00-.764.455.833.833 0 00.068.884l6.685 9.202.007.01c.242.32.374.708.375 1.107v7.502a.825.825 0 00.248.594.865.865 0 00.942.18l3.756-1.4c.337-.1.56-.41.56-.784v-6.092c0-.399.132-.787.375-1.108l.007-.009 6.685-9.202c.19-.26.217-.6.068-.884A.86.86 0 0019.108 0z"
			fill="currentColor"
			fillRule="nonzero"
		/>
	</svg>
);
const iconLocation: any = (
	<svg
		className="svg-icon"
		width="17"
		height="24"
		viewBox="0 0 17 24"
		xmlns="http://www.w3.org/2000/svg">
		<path
			d="M14.358 2.451A8.3 8.3 0 008.448 0a8.3 8.3 0 00-5.911 2.451c-2.922 2.925-3.285 8.427-.786 11.76l6.697 9.683 6.687-9.669c2.508-3.347 2.145-8.85-.777-11.774zm-5.833 8.894a3.057 3.057 0 01-3.051-3.054 3.057 3.057 0 013.05-3.055 3.057 3.057 0 013.052 3.055 3.057 3.057 0 01-3.051 3.054z"
			fill="#5964E0"
			fillRule="nonzero"
		/>
	</svg>
);
const iconSearch: any = (
	<svg
		width="1em"
		height="1em"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg">
		<path
			d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z"
			fill="currentColor"
			fillRule="nonzero"
		/>
	</svg>
);
const iconCheck: any = (
	<svg
		className="svg-icon"
		width="15"
		height="12"
		xmlns="http://www.w3.org/2000/svg">
		<path
			d="M1 6.57l3.572 3.572L13.714 1"
			stroke="#FFF"
			strokeWidth="2"
			fill="none"
			fillRule="evenodd"
		/>
	</svg>
);

function useWindowWidth() {
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth);

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return width;
}

function Finder({action}: any) {
	const [input, setInput] = useState<FilterObj>({
		title: '',
		location: '',
		time: false,
	});
	const [showOverlay, setShowOverlay] = useState<boolean>(false);
	const width = useWindowWidth();

	function handleFocus(event: any) {
		event.target.classList.add('focus');
	}
	function handleBlur(event: any) {
		event.target.value === '' && event.target.classList.remove('focus');
	}
	function onSearch() {
		action(input);
	}
	const handleOverlayClick = () => {
		setShowOverlay(false);
	};
	const handleBoxClick = (e: any) => {
		e.stopPropagation();
	};

	return (
		<div className="filter">
			<div className="filter__title-section">
				<div className="input">
					<div className="input__icon filter__search-icon">{iconSearch}</div>
					<div className="input__wrapper f-body">
						<input
							className="input__input"
							id="finderInput"
							type="text"
							value={input.title}
							onFocus={handleFocus}
							onBlur={handleBlur}
							onChange={(e) =>
								setInput((prev) => ({...prev, title: e.target.value}))
							}
						/>
						<label
							className={'input__label'}
							htmlFor="finderInput">
							Filter by title…
						</label>
					</div>
				</div>
			</div>
			<div
				className={`filter__extras-section ${showOverlay && 'overlay-active'}`}
				onClick={handleOverlayClick}>
				<div
					className="extras-section"
					onClick={handleBoxClick}>
					<div className="extras-section__separator inner-sep"></div>
					<div className="input extras-section__location">
						<div className="input__icon">{iconLocation}</div>
						<div className="input__wrapper f-body">
							<input
								className="input__input "
								id="finderInputLocation"
								type="text"
								value={input.location}
								onFocus={handleFocus}
								onBlur={handleBlur}
								onChange={(e) =>
									setInput((prev) => ({...prev, location: e.target.value}))
								}
							/>
							<label
								className={'input__label'}
								htmlFor="finderInputLocation">
								Filter by location…
							</label>
						</div>
					</div>
					<div className="extras-section__separator"></div>
					<div className="input extras-section__full-time">
						<input
							type="checkbox"
							id="inputTime"
							name="inputTime"
							className="input__checkbox"
							checked={input.time}
							onChange={() => setInput((prev) => ({...prev, time: !prev.time}))}
						/>
						<div
							className="input__check"
							onClick={() => setInput((prev) => ({...prev, time: !prev.time}))}>
							{iconCheck}
						</div>
						<label
							htmlFor="inputTime"
							className="input__label-check f-h3">
							Full Time <span> Only</span>
						</label>
					</div>
					<Button
						action={onSearch}
						text="Search"
						type="cta"
						size="flex"
					/>
				</div>
			</div>
			<div className="filter__btn-section">
				<button
					className="btn-filter"
					onClick={() => setShowOverlay(true)}>
					{iconFilter}
				</button>
				<button
					className="btn-search"
					onClick={onSearch}>
					{iconSearch}
				</button>
			</div>
		</div>
	);
}

export default Finder;
// todo : fix, upgrade an finish filter bar on > 600px it sucks!!!,

{
	/* // Hard coded inner input */
}
{
	/* <div className="filter__separator filter__inner-box"></div>
			<div className="filter__input input filter__inner-box">
				<div className="input__icon">{iconLocation}</div>
				<div className="input__wrapper f-body">
					<input
						className="input__input "
						id="finderInputLocation"
						type="text"
						value={input.location}
						onFocus={handleFocus}
						onBlur={handleBlur}
						onChange={(e) =>
							setInput((prev) => ({...prev, location: e.target.value}))
						}
					/>
					<label
						className={'input__label'}
						htmlFor="finderInputLocation">
						Filter by location…
					</label>
				</div>
			</div>
			<div className="filter__separator filter__inner-box"></div>
			<div className="filter__input input f-h3 filter__inner-box">
				<input
					type="checkbox"
					id="inputTime"
					name="inputTime"
					className="input__checkbox"
					checked={input.time}
					onChange={() => setInput((prev) => ({...prev, time: !prev.time}))}
				/>
				<div className="input__check">{iconCheck}</div>
				<label
					htmlFor="inputTime"
					className="input__label-check">
					Full Time
				</label>
			</div>
			<div className="filter__btn-search filter__inner-box">
				<Button
					action={onSearch}
					text="Search"
					type="cta"
					size="small"
				/>
			</div> */
}

{
	/* //----------------------------------------- */
}

{
	/* <div
				className={`filter__overlay ${showOverlay && 'active'}`}
				onClick={handleOverlayClick}>
				<div
					className="filter__outer-box"
					onClick={handleBoxClick}>
					<div className="filter__separator"></div>
					<div className="input filter__input">
						<div className="input__icon">{iconLocation}</div>
						<div className="input__wrapper f-body">
							<input
								className="input__input "
								id="finderInputLocation"
								type="text"
								value={input.location}
								onFocus={handleFocus}
								onBlur={handleBlur}
								onChange={(e) =>
									setInput((prev) => ({...prev, location: e.target.value}))
								}
							/>
							<label
								className={'input__label'}
								htmlFor="finderInputLocation">
								Filter by location…
							</label>
						</div>
					</div>
					<div className="filter__separator"></div>
					<div className="input filter__input f-h3">
						<input
							type="checkbox"
							id="inputTime"
							name="inputTime"
							className="input__checkbox"
							checked={input.time}
							onChange={() => setInput((prev) => ({...prev, time: !prev.time}))}
						/>
						<div className="input__check">{iconCheck}</div>
						<label
							htmlFor="inputTime"
							className="input__label-check">
							Full Time <span className="filter__extra-word"> Only</span>
						</label>
					</div>
					<Button
						action={onSearch}
						text="Search"
						type="cta"
						size="flex"
					/>
				</div>
			</div> */
}
