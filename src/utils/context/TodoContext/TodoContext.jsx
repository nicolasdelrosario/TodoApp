import { useState, createContext } from 'react'
import useLocalStorage from '../../../hooks/UseLocalStorage'

const TodoContext = createContext()

function TodoProvider({ children }) {
	const [{ item: todos, saveItem: saveTodos, loading, error }] =
		useLocalStorage('TODOS', [])
	const [searchValue, setSearchValue] = useState('')

	const incompletedTodos = todos.filter(todo => !todo.completed)

	const searchedTodos = todos.filter(todo => {
		const todoText = todo.text.toLowerCase()
		const searchText = searchValue.toLocaleLowerCase()

		return todoText.includes(searchText)
	})

	return (
		<TodoContext.Provider
			value={{
				loading,
				error,
				incompletedTodos,
				searchValue,
				setSearchValue,
				searchedTodos,
			}}
		></TodoContext.Provider>
	)
}

export { TodoContext, TodoProvider }
