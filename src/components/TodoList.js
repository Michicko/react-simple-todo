import TodoItem from "./TodoItem";

const TodoList = ({ todoList, handleEdit, handleDelete }) => {
	
	return (
		<ul className='todo-list'>
			{todoList.map((todo) => {
        return (
					<TodoItem
						key={todo.id}
						todo={todo}
						handleEdit={() => handleEdit(todo.id)}
						handleDelete={() => handleDelete(todo.id)}
					/>
				);
			})}
		</ul>
	);
};
 
export default TodoList;