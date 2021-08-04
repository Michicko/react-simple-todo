import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
	const genId = (rnd = (r16) => Math.floor(r16).toString(16)) =>
		rnd(Date.now() / 1000) +
		" ".repeat(16).replace(/./g, () => rnd(Math.random() * 16));

	const [state, setState] = useState({
		todos: [],
		id: genId(),
		todo: "",
	});

	const [todoInputValue, setTodoInputValue] = useState("");
	const [todoList, setTodoList] = useState([]);
  const [edit, setEdit] = useState(false);
  
  // if adding localstorage - use useEffect to setTodoList

	const handleTodoInput = (e) => {
		setTodoInputValue(e.target.value);
		setState({
			...state,
			todo: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const newTodo = {
			id: state.id,
			text: todoInputValue,
		};

		if (newTodo.text) {
			const updatedTodoList = [...state.todos, newTodo];
			setState({
				...state,
				id: genId(),
				todos: updatedTodoList,
      });
      setTodoList(updatedTodoList);
      setTodoInputValue("");
      setEdit(false);
		} else {
			console.log("Please add todo");
		}
	};

	const clearList = () => {
		setTodoList([]);
	};

	const handleDelete = (id) => {
		const newList = todoList.filter((todo) => todo.id !== id);
		setTodoList(newList);
	};

	const handleEdit = (id) => {
		setEdit(true);
		const selectedTodo = todoList.find((todo) => todo.id === id);
		const filteredTodo = todoList.filter((todo) => todo.id !== id);
		setTodoList(filteredTodo);
		setTodoInputValue(selectedTodo.text);
    console.log(selectedTodo);
    setState({
      id: selectedTodo.id,
      todos: filteredTodo
    });
	};

	return (
		<div className='container'>
			<div className='content'>
				<h1 className='primary-heading text-center mb-2'>Todo input</h1>
				<div className='form-container'>
					<TodoForm
						todoInputValue={todoInputValue}
						handleTodoInput={handleTodoInput}
						edit={edit}
						handleSubmit={handleSubmit}
					/>
				</div>
				<div className='todo-content'>
					<h1 className='primary-heading text-center mb-2'>Todo list</h1>
					<TodoList
						todoList={todoList}
						handleEdit={handleEdit}
						handleDelete={handleDelete}
					/>
					<button className='btn btn-block btn-danger my-2' onClick={clearList}>
						Clear list
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
