import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import style from './Detail.module.css'
import { AuthContext } from '../../context/auth-context';

const Detail = ({ url, requestOptions, responseField }) => {

	const authCtx = useContext(AuthContext);
	console.log(authCtx);
	console.log(authCtx.users);

	const { id } = useParams();

	const [items, setItems] = useState([]);

	useEffect(() => {
		
		window.scrollTo(0, 0);

		fetch(url, requestOptions)
			.then(response => response.json())
			.then(data => setItems(responseField ? data[responseField] : data))
			.catch(err => console.error(err));
	}, []);

	const detailItem = items.find((item) => item.id === +id);

	return (
		// <AuthContext.Consumer>
		// 	{(authCtx) => {

		// 		console.log(authCtx);
		// 		return (
		// 			<div className={style.wrapper}>
		// 				<h2>{detailItem?.title}</h2>
		// 			</div>
		// 		)
		// 	}}
		// </AuthContext.Consumer>

		<div className={style.wrapper}>
			<h2>{detailItem?.title}</h2>
		</div>
	)
}

export default Detail