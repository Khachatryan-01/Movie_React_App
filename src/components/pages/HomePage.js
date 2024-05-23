import React, { useEffect } from 'react'

const HomePage = () => {

	useEffect(() => {
		const isLoggedIn = sessionStorage.getItem('isLoggedIn');

		if (!isLoggedIn) {
			window.location.href = 'http://localhost:3000/login';
		}
	}, []);

	return (
		<div>HomePage</div>
	)
}

export default HomePage