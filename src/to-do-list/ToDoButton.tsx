type ToDoButtonProps = {
	onClick: () => void;
	type: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
	className: string;
	children: React.ReactNode;
};

export const ToDoButton = ({
	onClick,
	type,
	className,
	children,
}: ToDoButtonProps) => {
	return (
		<button className={className} type={type} onClick={onClick}>
			{children}
		</button>
	);
};
