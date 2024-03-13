const dataExample = [
	{ text: 'Jugar videojuegos', completed: true },
	{ text: 'Salir', completed: false },
	{ text: 'Estudiar', completed: false },
	{ text: 'Llorar', completed: false },
	{ text: 'Trabajar', completed: false },
]

localStorage.setItem('TODOS', JSON.stringify(dataExample))

export default dataExample
