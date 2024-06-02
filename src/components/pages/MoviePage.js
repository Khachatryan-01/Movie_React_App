import React from 'react'
import { MOVIE_API } from '../defines'
import List from '../List'
import style from './Page.module.css'

const MoviePage = () => {

    return (
        <>
            <aside className={style.aside}></aside>
            <section className={style.section}>
                <List url={MOVIE_API.getActionUrl(MOVIE_API.ACTIONS.MOVIE)} requestOptions={MOVIE_API.ACTIONS.REQ_OPTIONS} responseField={'results'} />
            </section>
        </>
    )
}

export default MoviePage