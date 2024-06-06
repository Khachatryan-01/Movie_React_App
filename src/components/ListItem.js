import React from 'react'
import style from './ListItem.module.css'
import { MOVIE_API } from './defines'
import { Link } from 'react-router-dom'


const ListItem = ({ itemData }) => {
	return (
		itemData.title ?
			<Link to={`/movies/${itemData.id}`} className={style.movieItem}>
				<img src={MOVIE_API.IMG_URL + itemData.poster_path} alt={itemData.title + " poster"} />
				<h2>{itemData.title}</h2>
			</Link>
			:
			<Link to={`/tvSeries/${itemData.id}`} className={style.movieItem}>
				<img src={MOVIE_API.IMG_URL + itemData.poster_path} alt={itemData.name + " poster"} />
				<h2>{itemData.name}</h2>
			</Link>
	)
}

export default ListItem