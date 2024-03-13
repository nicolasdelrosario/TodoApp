import { useContext } from 'react'
import { ToggleContext } from '../utils/context/ToggleContext/ToggleContext'
import Header from '../components/Header/Header'
import TodoList from '../components/TodoList/TodoList'
import TodoItem from '../components/TodoItem/TodoItem'
import dataExample from '../data/data'

function AppUI() {
	const { isEnabled } = useContext(ToggleContext)

	return (
		<div
			id='main'
			className='section grid'
			data-theme={isEnabled ? 'dark' : 'light'}
		>
			<div className='container'>
				<Header />

				<TodoList>
					{dataExample.map(todo => (
						<TodoItem
							key={todo.text}
							text={todo.text}
							completed={todo.completed}
						/>
					))}
				</TodoList>
			</div>

			<div
				className={`bg-img ${isEnabled ? 'bg-img-dark' : 'bg-img-light'}`}
			></div>
		</div>
	)
}

export default AppUI
