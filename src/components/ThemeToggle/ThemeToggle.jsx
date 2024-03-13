import { useContext } from 'react'
import { ToggleContext } from '../../utils/context/ToggleContext/ToggleContext'
import './ThemeToggle.css'

function ThemeToggle() {
	const { isEnabled, handleEnabled } = useContext(ToggleContext)

	return (
		<div className='theme__toggle-container'>
			<input
				type='checkbox'
				id='check'
				className='theme__toggle'
				onChange={handleEnabled}
				checked={isEnabled}
			/>
			<label htmlFor='check'>
				<img
					src={`/src/assets/img/${isEnabled ? 'icon-moon' : 'icon-sun'}.svg`}
					alt='Toggle Theme'
				/>
			</label>
		</div>
	)
}

export default ThemeToggle
