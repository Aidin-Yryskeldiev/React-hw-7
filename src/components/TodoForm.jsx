import { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "./StyleButton";

const TodoForm = ({ addTodo }) => {
	const [value, setValue] = useState("");
	const [errorText, setErrorText] = useState("");

	const submitHandler = (e) => {
		e.preventDefault();

		if (value.trim() === "") {
			setErrorText("Поле не должно быть пустым!");
		} else {
			addTodo(value);
			setValue("");
			setErrorText("");
		}
	};

	return (
		<div>
			<form onSubmit={submitHandler}>
				<input
					type="text"
					value={value}
					onChange={(e) => setValue(e.target.value)}
					placeholder="Enter new todo"
				/>

				<Button
					color="add"
					backgroundColor="add"
					padding="add"
					borderRadius="add"
					type="submit">
					Add Task
				</Button>

				{errorText && <p>{errorText}</p>}
			</form>
		</div>
	);
};

TodoForm.propTypes = { addTodo: PropTypes.func.isRequired };

export default TodoForm;
