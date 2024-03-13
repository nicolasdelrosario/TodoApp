import ThemeToggle from '../ThemeToggle/ThemeToggle'
import './Header.css'

function Header() {
	return (
		<div className='header'>
			<h1>TODO</h1>
			<ThemeToggle />
		</div>
	)
}

export default Header
