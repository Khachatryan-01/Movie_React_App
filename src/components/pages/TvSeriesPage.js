import React, { useEffect } from 'react'
import { MOVIE_API } from '../defines'
import List from '../List'
import style from './Page.module.css'

const TvSeriesPage = () => {

	return (
		<>
			<aside className={style.aside}></aside>
			<section className={style.section}>
				<List url={MOVIE_API.getActionUrl(MOVIE_API.ACTIONS.TV_SERIES)} requestOptions={MOVIE_API.ACTIONS.REQ_OPTIONS} responseField={'results'} />
			</section>
		</>
	)
}

export default TvSeriesPage