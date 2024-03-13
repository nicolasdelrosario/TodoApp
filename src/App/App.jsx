import { ToggleProvider } from '../utils/context/ToggleContext/ToggleContext'
import { TodoProvider } from '../utils/context/TodoContext/TodoContext'
import AppUI from './AppUI'

function App() {
	return (
		<ToggleProvider>
			<AppUI />
		</ToggleProvider>
	)
}

export default App
