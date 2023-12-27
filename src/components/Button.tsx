interface Button {
	text: string;
	action: any;
	type: any;
}

function Button({text, action, type}: any) {
	return (
		<button
			className={`f-h3 m-button ${type}`}
			onClick={action}>
			{text}
		</button>
	);
}

export default Button;
