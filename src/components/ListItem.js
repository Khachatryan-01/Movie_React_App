import React from 'react'
import style from './ListItem.module.css'
import { MOVIE_API } from './defines'
import { Link } from 'react-router-dom'


const ListItem = ({ itemData }) => {

	const itemName = itemData.title || itemData.name

	return (
		<Link to={`/movies/${itemData.id}`} className={style.movieItem}>
			<img src={MOVIE_API.IMG_URL + itemData.poster_path} alt={itemName + " poster"} />
			<h2>{itemName}</h2>
		</Link>
	)
}

export default ListItem