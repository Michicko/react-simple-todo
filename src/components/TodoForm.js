import sprite from '../icons/sprites.svg';
const TodoForm = ({ todoInputValue, handleTodoInput, edit, handleSubmit }) => {

	return (
		<>
			<form className='form' id='todoForm' onSubmit={handleSubmit}>
				<div className='form-group'>
					<label htmlFor='todoInput' className='form-label'>
						<span className='form-icon-box'>
							<svg className='form-icon'>
								<use href={sprite + "#icon-list"}></use>
							</svg>
						</span>
					</label>
					<input
						type='text'
						id='todoInput'
						className='form-input'
						placeholder='Add Todo Item'
						value={todoInputValue}
						onChange={handleTodoInput}
					/>
				</div>
				<input type='submit' value={edit ? 'Upate Item' : 'Add Item'} className={edit ? 'btn btn-success' : 'btn btn-primary'} />
			</form>
		</>
	);
};

export default TodoForm;
