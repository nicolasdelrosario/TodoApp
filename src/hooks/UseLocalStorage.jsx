import { useEffect, useState } from 'react'

function UseLocalStorage(itemName, initialValue) {
	const [item, setItem] = useState(initialValue)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)

	useEffect(() => {
		try {
			const localStorageItem = localStorage.getItem(itemName)
			let parsedItem

			if (!localStorageItem) {
				localStorage.setItem('TODOS', JSON.stringify(initialValue))
				parsedItem = initialValue
			} else {
				parsedItem = JSON.parse(localStorageItem)
				setItem(parsedItem)
			}
		} catch (error) {
			setLoading(false)
			setError(true)
		}
	}, [])

	const saveItem = newItem => {
		localStorage.setItem('TODOS', JSON.stringify(newItem))
		setItem(newItem)
	}

	return [{ item, saveItem, loading, error }]
}

export default UseLocalStorage
