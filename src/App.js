import React from 'react'
import RegisterPage from './components/auth/RegisterPage'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './components/auth/LoginPage'
import Layout from './components/pages/Layout'
import MoviePage from './components/pages/MoviePage'
import TvSeriesPage from './components/pages/TvSeriesPage'
import Detail from './components/pages/Detail'
import { MOVIE_API } from './components/defines'

const App = () => {
	
	return (
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path='movies' element={<MoviePage />} />
					<Route path='tvSeries' element={<TvSeriesPage />} />
					<Route path='movies/:id' element={<Detail url={MOVIE_API.getActionUrl(MOVIE_API.ACTIONS.MOVIE)} requestOptions={MOVIE_API.ACTIONS.REQ_OPTIONS} responseField={'results'} />} />
				</Route>
				<Route path='/register' element={<RegisterPage />} />
				<Route path='/login' element={<LoginPage />} />
			</Routes>
	)
}

export default App