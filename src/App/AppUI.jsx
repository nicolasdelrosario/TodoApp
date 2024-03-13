import { useContext } from 'react'
import { ToggleContext } from '../utils/context/ToggleContext/ToggleContext'
import Header from '../components/Header/Header'

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
			</div>

			<div
				className={`bg-img ${isEnabled ? 'bg-img-dark' : 'bg-img-light'}`}
			></div>
		</div>
	)
}

export default AppUI
