import {useEffect, useState, useCallback} from 'react';

function debounce(fn: any, time: number) {
	let timeout: any;
	return function executedFunction(...args: any) {
		const later = () => {
			clearTimeout(timeout);
			fn(...args);
		};

		clearTimeout(timeout);
		timeout = setTimeout(later, time);
	};
}
type FilterObj = {
	title: string;
	location: string;
	time: boolean;
};
function Finder({action}: any) {
	const [isInputFocus, setIsInputFocus] = useState<boolean>(false);
	const [input, setInput] = useState<FilterObj>({
		title: '',
		location: '',
		time: false,
	});

	const debouncedAction = useCallback(debounce(action, 500), []);
	useEffect(() => {
		debouncedAction(input.title);
	}, [input, debouncedAction]);

	return (
		<div className="m-filter">
			<label
				className={`m-filter__label f-body ${isInputFocus && 'active'}`}
				htmlFor="finderInput">
				Filter by title…
			</label>
			<input
				className="m-filter__input f-body"
				id="finderInput"
				type="text"
				value={input.title}
				onFocus={() => setIsInputFocus(true)}
				onBlur={() => setIsInputFocus(input.title === '' ? false : true)}
				onChange={(e) => setInput((prev) => ({...prev, title: e.target.value}))}
			/>
			<button className="m-filter__btn-filter">
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
			</button>

			<button className="m-filter__btn-search">
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
			</button>
		</div>
	);
}

export default Finder;
// todo : fix, upgrade an finish filter bar,
