import { ToggleProvider } from '../utils/context/ToggleContext/ToggleContext'
import AppUI from './AppUI'

function App() {
	return (
		<ToggleProvider>
			<AppUI />
		</ToggleProvider>
	)
}

export default App
