import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import style from './Detail.module.css'
import { MOVIE_API } from '../defines'
import Rating from '../Rating'


const Detail = ({ url, langUrl, generUrl, requestOptions, responseField }) => {

	const { id } = useParams();

	const [detailItem, setDetailItem] = useState({});
	const [lang, setLang] = useState('');
	const [geners, setGeners] = useState([]);

	useEffect(() => {
		window.scrollTo(0, 0);

		fetch(url, requestOptions)
			.then(response => response.json())
			.then(data => {
				const items = data[responseField];
				setDetailItem(items.find((item) => item.id === +id))
			})
			.catch(err => console.error(err));
	}, [id, url, requestOptions, responseField]);

	useEffect(() => {
		if (!detailItem.original_language) {
			return;
		}

		fetch(langUrl, requestOptions)
			.then(response => response.json())
			.then(data => {
				const langItem = data.find((item) => detailItem.original_language === item.iso_639_1);
				setLang(langItem.english_name);
			})
			.catch(err => console.error(err));
	}, [id, detailItem, langUrl, requestOptions]);

	useEffect(() => {
		if (!detailItem.genre_ids) {
			return;
		}

		fetch(generUrl, requestOptions)
			.then(response => response.json())
			.then(data => {
				const genersData = data.genres;
				const genersNames = []

				for (let i = 0; i < genersData.length; i++) {
					for (let j = 0; j < detailItem.genre_ids.length; j++) {
						if (genersData[i].id === detailItem.genre_ids[j]) {
							genersNames.push(genersData[i].name)
						}
					}
				}
				setGeners(genersNames);
			})
			.catch(err => console.error(err));
	}, [detailItem, generUrl, requestOptions]);

	const starCount = Math.round(detailItem.vote_average);

	const formatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
	const releaseDate = new Date(detailItem.release_date || detailItem.first_air_date);
	const formattedDate = releaseDate.toLocaleDateString("en-US", formatOptions);

	return (

		<div className={style.wrapper}>
			<div className={style.container}>
				<img className={style.poster} src={MOVIE_API.IMG_URL + detailItem.poster_path} alt={detailItem + " poster"} />
				<div className={style.detailInfo}>
					<h2 className={style.title}>{detailItem.title || detailItem?.name}</h2>
					<div className={style.movieInfo}>
						<div className={style.geners}>
							<h3>Gener</h3>
							{geners.map((gener, i) => <h4 key={i}>{gener}</h4>)}
						</div>
						<div className={style.lang}>
							<h3>Language</h3>
							<h4>{lang}</h4>
						</div>
						<div className={style.date}>
							<h3>Date</h3>
							<h4>{formattedDate}</h4>
						</div>
					</div>

					<p className={style.text}>{detailItem?.overview}</p>

					<Rating starCount={starCount} />
				</div>
			</div>
		</div>
	)
}

export default Detail