import { useState, createContext } from 'react'

const ToggleContext = createContext()

function ToggleProvider({ children }) {
	const [isEnabled, setIsEnabled] = useState(true)

	const handleEnabled = () => setIsEnabled(!isEnabled)

	return (
		<ToggleContext.Provider
			value={{
				isEnabled,
				setIsEnabled,
				handleEnabled,
			}}
		>
			{children}
		</ToggleContext.Provider>
	)
}

export { ToggleContext, ToggleProvider }
