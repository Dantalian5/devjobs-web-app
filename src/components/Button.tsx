interface Button {
	action: any;
	text: string;
	type: 'cta' | 'link';
	size: 'small' | 'static' | 'flex';
}
function Button({
	text = 'Button',
	action,
	type = 'cta',
	size = 'static',
}: Button) {
	const buttonClass = `f-h3 btn ${type} ${size}`;
	return (
		<button
			className={buttonClass}
			onClick={action}>
			{text}
		</button>
	);
}

export default Button;
