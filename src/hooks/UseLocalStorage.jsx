import { useEffect, useState } from 'react'

function UseLocalStorage(itemName, initialValue) {
	const [item, setItem] = useState(initialValue)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)

	useEffect(() => {
		try {
		} catch (error) {
			setLoading(false)
			setError(true)
		}
	}, [])
}

export default UseLocalStorage
