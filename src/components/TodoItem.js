import sprite from "../icons/sprites.svg";

const TodoItem = ({ todo, handleEdit, handleDelete }) => {
	return (
		<li className='todo-item'>
			<p className='todo-text'>{todo.text}</p>
			<div className='todo-btns'>
				<span onClick={handleEdit}>
					<svg className='todo-icon icon-edit'>
						<use href={sprite + "#icon-pen"}></use>
					</svg>
				</span>
				<span onClick={handleDelete}>
					<svg className='todo-icon icon-delete'>
						<use href={sprite + "#icon-delete"}></use>
					</svg>
				</span>
			</div>
		</li>
	);
};

export default TodoItem;
