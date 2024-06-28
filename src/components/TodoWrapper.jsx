import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { generateId } from "./index";
import Todos from "./Todos";
import { Button } from "./StyleButton";

const TodoWrapper = () => {
	const [todos, setTodos] = useState([]);

	const addTodoHandler = (todo) => {
		const newTodo = {
			todo,
			id: generateId(),
		};

		setTodos((prev) => [...prev, newTodo]);
	};

	const deleteTodoHandler = (id) => {
		setTodos(todos.filter((item) => item.id !== id));
	};

	const editTodoHandler = (id, changeText) => {
		setTodos((prev) =>
			prev.map((todo) => (todo.id === id ? { todo, todo: changeText } : todo))
		);
	};

	const toggleTodoHandler = (id) => {
		setTodos((prev) =>
			prev.map((todo) =>
				todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
			)
		);
	};

	const deleteAllHandler = () => {
		setTodos([]);
	};

	const completeAllHandler = () => {
		setTodos((prev) =>
			prev.map((todo) => ({
				...todo,
				isCompleted: true,
			}))
		);
	};

	const unCompleteAllHandler = () => {
		setTodos((prev) =>
			prev.map((todo) => ({
				...todo,
				isCompleted: false,
			}))
		);
	};

	return (
		<div>
			<h1>TODO LIST</h1>

			<TodoForm addTodo={addTodoHandler} />
			<Button
				color="delete"
				backgroundColor="delete"
				padding="delete"
				borderRadius="delete"
				onClick={deleteAllHandler}>
				DELETE ALL
			</Button>
			<Button
				color="complete"
				backgroundColor="complete"
				padding="complete"
				borderRadius="complete"
				onClick={completeAllHandler}>
				COMPLETE ALL
			</Button>
			<Button
				color="uncomplete"
				backgroundColor="uncomplete"
				padding="uncomplete"
				borderRadius="uncomplete"
				onClick={unCompleteAllHandler}>
				UNCOMPLETE ALL
			</Button>

			{todos.length === 0 ? (
				<div>empty</div>
			) : (
				<Todos>
					<TodoList
						onToggleTodo={toggleTodoHandler}
						onEditTodo={editTodoHandler}
						onDeleteTodo={deleteTodoHandler}
						todos={todos}
					/>
				</Todos>
			)}
		</div>
	);
};

export default TodoWrapper;
