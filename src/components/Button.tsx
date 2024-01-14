interface Button {
	action: any;
	text: string;
	type: 'cta' | 'link';
	size: 'small' | 'medium' | 'large';
}
function Button({
	text = 'Button',
	action,
	type = 'cta',
	size = 'medium',
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
