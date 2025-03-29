import style from "./Button.module.scss";

interface IButton {
	type?: "button" | "submit" | "reset" | undefined;
	children?: React.ReactNode;
	onClick?: () => void;
}

export function Button({ type, onClick, children }: IButton) {
	return (
		<button type={type} className={style.Button} onClick={onClick}>
			{children}
		</button>
	);
}
