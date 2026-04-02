type ToDoInputProps = {
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
	type: React.InputHTMLAttributes<HTMLInputElement>["type"];
	className: string;
	placeholder?: string;
	inputValue?: string;
	checked?: boolean;
};

export const ToDoInput = ({
	onChange,
	onKeyDown,
	type,
	className,
	placeholder,
	inputValue,
	checked,
}: ToDoInputProps) => {
	return (
		<input
			className={className}
			placeholder={placeholder}
			type={type}
			onChange={onChange}
			value={inputValue}
			onKeyDown={onKeyDown}
			checked={checked}
		></input>
	);
};
